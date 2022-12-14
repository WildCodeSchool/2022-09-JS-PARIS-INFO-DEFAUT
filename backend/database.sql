DROP TABLE IF EXISTS users;
CREATE TABLE users(
  `id_user` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `cp` VARCHAR(8) UNIQUE NOT NULL,
  `admin` TINYINT(1) DEFAULT '0',
  `mail` VARCHAR(50) UNIQUE NOT NULL,
  `phone_number` VARCHAR(10) NULL,
  `hashedPassword` VARCHAR(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;


DROP TABLE IF EXISTS defaults;
CREATE TABLE defaults(
  `id_default` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `station` VARCHAR(50) NULL,
  `tgv_number` INT NULL,
  `ter_number` INT NULL,
  `railway_track_number` INT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `picture` VARCHAR(2000) NULL,
  `latitude` VARCHAR(255) NULL,
  `longitude` VARCHAR(255) NULL,
  `treatment` VARCHAR(50) DEFAULT 'Non traité',
  `user_id` INT NOT NULL,
  CONSTRAINT fk_defaults_users
    FOREIGN KEY (user_id)
    REFERENCES users(id_user)
  ) ENGINE = InnoDB DEFAULT CHARSET = latin1;



DROP TABLE IF EXISTS token_blacklist;
CREATE TABLE token_blacklist(
  token varchar(255) primary key NOT NULL
);

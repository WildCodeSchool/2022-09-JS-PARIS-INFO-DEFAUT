import React from "react";
import "./UserCard.css";

export const UserCard = ({ id_user, cp, mail, phone_number }) => {
  return (
    <div className="userCard-container">
      <ul>
        <li> id user : {id_user} </li>
        <li> numero de CP :{cp} </li>
        <li> adresse mail : {mail} </li>
        <li> numero de téléphone : {phone_number} </li>
      </ul>
    </div>
  );
};
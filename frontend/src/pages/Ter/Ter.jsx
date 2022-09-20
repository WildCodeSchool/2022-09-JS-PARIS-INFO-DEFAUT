import React, { useContext, useState } from "react";
import "./Ter.css";
import { Link } from "react-router-dom";
import { postDefaults } from "../../services/axios/AxiosDefaults";
import { Geolocalisation } from "../../services/Geolocalisation/Geolocalisation";
import {
  Footer,
  Header,
  Input,
  Button,
  Textarea,
} from "../../components/index";
import {
  ProfileContext,
  LongitudeContext,
  LatitudeContext,
} from "../../context/index";

const Ter = () => {
  const { id_user } = useContext(ProfileContext);

  const [ter_number, setTerNumber] = useState(0);
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const { latitude, setLatitude } = useContext(LatitudeContext);
  const { longitude, setLongitude } = useContext(LongitudeContext);

  const data = {
    id_user,
    ter_number,
    description,
    picture,
    longitude,
    latitude,
  };

  return (
    <div className="ter-container">
      {Geolocalisation()}
      <Header backCss="backTer" profileCss="profileTer" />

      <form className="ter_champ-container">
        <h1> TER </h1>
        {/* <Input
          className="inputTer"
          forId="cp"
          type="text"
          champ="Numéro de CP"
          minlength={8}
          maxlength={8}
        /> */}
        <Input
          className="inputTer"
          onChange={(e) => setTerNumber(e.target.value)}
          value={ter_number}
          forId="ter"
          type="number"
          champ="Numéro de Ter"
        />
        <Textarea
          className="textTer"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          forId="field"
          type="text"
        />
        <Input
          className="inputTer"
          onChange={(e) => setPicture(e.target.value)}
          value={picture}
          forId="file"
          type="file"
          champ="Joindre une photographie"
        />
        <Input
          className="inputGare"
          forId="file"
          onChange={(e) => setLatitude(e.target.value)}
          type="text"
          value={latitude}
          champ="Latitude"
        />
        <Input
          className="inputGare"
          forId="file2"
          onChange={(e) => setLongitude(e.target.value)}
          type="text"
          value={longitude}
          champ="Longitude"
        />

        <Button
          classButton="envoyer"
          onClick={(e) =>
            postDefaults(data, setTerNumber(0), setDescription(""), e)
          }
          champButton="ENVOYER"
          type="button"
        />
      </form>
      <Link to={`/defaultsUser/${id_user}`}>
        <Button
          classButton="envoyer"
          champButton="defaut envoyé"
          type="bouton"
        />
      </Link>

      <Footer />
    </div>
  );
};

export default Ter;

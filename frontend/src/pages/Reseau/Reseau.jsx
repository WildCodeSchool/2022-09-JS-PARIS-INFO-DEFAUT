import React, { useState, useContext } from "react";
import "./Reseau.css";
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
  IdUserContext,
  CpUserContext,
  LongitudeContext,
  LatitudeContext,
} from "../../context/index";

const Reseau = () => {
  const { id_user } = useContext(IdUserContext);
  const { cp_user } = useContext(CpUserContext);

  const [railway_track_number, setRailwayNumber] = useState(0);
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const { latitude, setLatitude } = useContext(LatitudeContext);
  const { longitude, setLongitude } = useContext(LongitudeContext);

  const data = {
    id_user,
    railway_track_number,
    description,
    picture,
    longitude,
    latitude,
  };

  return (
    <div className="reseau-container">
      {Geolocalisation()}
      <Header backCss="backReseau" profileCss="profileReseau" />

      <form className="reseau_champ-container">
        <h1>RESEAU</h1>
        {/* <Input
          className="inputReseau"
          forId="cp"
          type="text"
          champ="Numéro de CP"
          minlength={8}
          maxlength={8}
        /> */}
        <Input
          className="inputReseau"
          onChange={(e) => setRailwayNumber(e.target.value)}
          value={railway_track_number}
          forId="ligne"
          type="number"
          champ="Numéro de ligne / Emprise"
        />
        <Textarea
          className="textReseau"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          forId="field"
          type="text"
        />
        <Input
          className="inputReseau"
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
            postDefaults(data, setRailwayNumber(0), setDescription(""), e)
          }
          champButton="ENVOYER"
          type="button"
        />
      </form>
      <Link to={`/defaultsUser/${cp_user}`}>
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

export default Reseau;

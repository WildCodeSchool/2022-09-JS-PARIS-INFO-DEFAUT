import React from "react";
import "./UpdateDefaultsUser.css";

import { Geolocalisation } from "../../services/Geolocalisation/Geolocalisation";
import { Footer, Header, Update } from "../../components/index";

const UpdateDefaultsUser = () => {
  return (
    <div className="updateUser-container">
      {Geolocalisation()}
      <Header backCss="backUpdateUser" profileCss="profileUpdateUser" />
      <Update />
      <Footer />
    </div>
  );
};

export default UpdateDefaultsUser;

import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "../CircleIcon";

const WhatsApp = ({ userName }) => (
  <CircleIcon href={`https://api.whatsappcom/@${userName}`} iconName="WhatsAppIcon" />
);

WhatsApp.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default WhatsApp;

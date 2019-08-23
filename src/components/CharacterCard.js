import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react'

// import { Link } from 'react-router-dom'; 


export default function CharacterCard({ name, image, species, status, origin, location }) {

  const extra = (
    <a>
      {location.name}
    </a>
  )

  return (
    <Card
    image={image}
    header={name}
    meta={species}
    // description={status}
    description={origin.name}
    extra={extra}
  />
  );
}
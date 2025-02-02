import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react'
import axios from 'axios';

export default function LocationCard({ name, type, dimension, residents }) {

	return (
           

    <Card>

      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>Residents: {residents.length}</Card.Meta>
        <Card.Description>
         Type: {type}
        </Card.Description>
        <Card.Description>
         Dimension: {dimension}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

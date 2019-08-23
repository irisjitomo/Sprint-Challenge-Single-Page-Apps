import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react'

export default function EpisodeList({ name, episode, airDate}) {

	return (

		<Card>

      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
         {episode}
        </Card.Description>
        <Card.Description>
         Air Date: {airDate}
        </Card.Description>
      </Card.Content>
    </Card>
	);
}

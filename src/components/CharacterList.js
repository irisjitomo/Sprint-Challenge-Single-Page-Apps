import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Card } from 'semantic-ui-react';

export default function CharacterList() {
	const [ characters, setCharacter ] = useState([]);

	useEffect(() => {
		axios
			.get('https://rickandmortyapi.com/api/character/')
			.then((res) => {
				const data = res.data.results;
				console.log(res.data.results);
				setCharacter(data);
			})
			.catch((error) => {
				console.error('Server Error', error);
			});
	}, []);

	return (
		<section className="character-list grid-view">
      <div>
      <Card.Group>
      {characters.map((character) => (
      <CharacterCard 
      key={character.id}
      name={character.name}
      image={character.image}
      species={character.species}
      status={character.status}
      origin={character.origin}
      location={character.location} 
      />
      ))}
      </Card.Group></div>
		</section>
	);
}

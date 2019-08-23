import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';
import { Card } from 'semantic-ui-react';

export default function LocationsList() {
	const [ locations, setLocations ] = useState([]);

	useEffect(() => {
		axios
			.get('https://rickandmortyapi.com/api/location/')
			.then((res) => {
				const data1 = res.data.results;
				console.log(res.data.results);
				setLocations(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		
			<section>
				<div>
					<Card.Group>
						{locations.map((location) => (
							<LocationCard
								key={location.id}
								name={location.name}
								type={location.type}
								dimension={location.dimension}
								residents={location.residents}
							/>
						))}
					</Card.Group>
				</div>
			</section>
		
	);
}

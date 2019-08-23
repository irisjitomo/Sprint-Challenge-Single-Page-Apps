import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import { Card } from 'semantic-ui-react';

export default function EpisodeList() {
	const [ episodes, setepisodes ] = useState([]);

	useEffect(() => {
		axios.get('https://rickandmortyapi.com/api/episode/').then((res) => {
            const data = (res.data.results)
            console.log(res.data.results);
            setepisodes(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    
    return (
        <section>
            <div>
            <Card.Group>
            
                {episodes.map(episode => (
                    <EpisodeCard 
                    key={episode.id}
                    name={episode.name}
                    episode={episode.episode}
                    airDate={episode.air_date} />
                ))}
                </Card.Group>
            </div>
        </section>
	);
}
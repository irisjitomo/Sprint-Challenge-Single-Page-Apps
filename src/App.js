import React from "react";
import { Route } from 'react-router-dom';
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";

import WelcomePage from './components/WelcomePage';
import LocationCard from './components/LocationCard';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import EpisodeList from './components/EpisodeList';
import LocationsList from "./components/LocationsList.js";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <div>
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationsList} />
      <Route path='/episodes' component={EpisodeList} />
      {/* <Route path='/locationTest' component={LocationsList} /> */}
      </div>
    </main>
  );
}

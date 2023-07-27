import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

class App extends React.Component {
  // Add constructor & pull in props from React.Component class
  constructor(props) {
    super(props);
    // Set initial state of component with a SearchResults array
    this.state = {SearchResults: [
      {
        name: 'universe',
        artist: 'thuy',
        album: 'universe',
        id: 1
      },
      {
        name: 'Glue Song',
        artist: 'beabadoobee',
        album: 'Glue Song',
        id: 2
      },
      {
        name: 'LIMBO',
        artist: 'keshi',
        album: 'GABRIEL',
        id: 3
      }
    ]};
  }

  render() {
    return (
      <div>
        <h1>
          Playlist<span className="highlight">Pal</span>
        </h1>
        <h3>
          Create a custom playlist saved to your Spotify account.
        </h3>
        <div className="App">
          {/*  <!-- Add a SearchBar component --> */}
          <SearchBar />
          <div className="App-playlist">
            {/*  <!-- Add a SearchResults component --> */}
            <SearchResults />
            {/*  <!-- Add a Playlist component --> */}
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

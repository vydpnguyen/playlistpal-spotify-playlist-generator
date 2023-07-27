import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

class App extends React.Component {
  // Add constructor & pull in props from React.Component class
  constructor(props) {
    super(props);
    // Set initial state of component with a searchResults array
    this.state = {searchResults: [
      {
        name: 'song 1',
        artist: 'artist 1',
        album: 'album 1',
        id: 1,
        photo: '/public/background_photo.png'
      },
      {
        name: 'song 2',
        artist: 'artist 2',
        album: 'album 2',
        id: 2,
        photo: '/public/gluesong-bea.png'
      },
      {
        name: 'song 3',
        artist: 'artist 3',
        album: 'album 3',
        id: 3,
        photo: '/public/limbo-keshi.png'
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
            <SearchResults searchResults={this.state.searchResults} />
            {/*  <!-- Add a Playlist component --> */}
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

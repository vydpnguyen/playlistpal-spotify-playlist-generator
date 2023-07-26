import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';

class App extends React.Component {
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
            {/*  <!-- Add a Playlist component --> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

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
    this.state = {
      searchResults: [
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
          photo: '/public/background_photo.png'
        },
        {
          name: 'song 3',
          artist: 'artist 3',
          album: 'album 3',
          id: 3,
          photo: '/public/background_photo.png'
        }
      ],
      playlistName: 'example playlist name',
      playlistTracks: [
        {
          name: 'playlist track 4',
          artist: 'playlist artist 4',
          album: 'playlist album 4',
          id: 4,
          photo: '/public/background_photo.png'
        },
        {
          name: 'playlist track 5',
          artist: 'playlist artist 5',
          album: 'playlist album 5',
          id: 5,
          photo: '/public/background_photo.png'
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
  }

  
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (!tracks.find(trackIndex => trackIndex.id === track.id)) {
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }

/*
  addTrack(track) {
    const foundTrack = this.state.playlistTracks.find((playlistTrack) => playlistTrack.id === track.id);
    const newTrack = this.state.playlistTracks.concat(track);
    foundTrack ? console.log('Track already exists in playlist.') : this.setState({ playlistTracks: newTrack });
  }
*/

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
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>

            {/*  <!-- Add a Playlist component --> */}
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

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
          image: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228'
        },
        {
          name: 'song 2',
          artist: 'artist 2',
          album: 'album 2',
          id: 2,
          image: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228'
        },
        {
          name: 'song 3',
          artist: 'artist 3',
          album: 'album 3',
          id: 3,
          image: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228'
        }
      ],
      playlistName: 'example playlist name',
      playlistTracks: [
        {
          name: 'playlist track 4',
          artist: 'playlist artist 4',
          album: 'playlist album 4',
          id: 4,
          image: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228'
        },
        {
          name: 'playlist track 5',
          artist: 'playlist artist 5',
          album: 'playlist album 5',
          id: 5,
          image: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228'
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (!tracks.find(trackIndex => trackIndex.id === track.id)) {
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }

  removeTrack(track) {
    let updatedPlaylist = this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id);
    this.setState({ playlistTracks: updatedPlaylist });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    // Generate array of uri values playlistTRacks
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    // Pass trackURIs and playlistName to a method that will save user's playlist to their account
  }

  search(searchTerm) {
    Spotify.search(searchTerm)
      .then(results => {
        this.setState({ searchResults: results });
      })
    console.log(searchTerm);
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
          <SearchBar onSearch={this.search} />

          <div className="App-playlist">
            {/*  <!-- Add a SearchResults component --> */}
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>

            {/*  <!-- Add a Playlist component --> */}
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

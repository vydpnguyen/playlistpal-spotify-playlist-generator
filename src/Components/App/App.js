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
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylistName = this.savePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (!tracks.find(trackIndex => trackIndex.id === track.id)) {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
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

  savePlaylistName(name, trackURIs) {
    if (!name || !trackURIs) {
      return;
    }
    let accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userID = '';

    // 1. GET current user's ID
    // Make request to return user's Spotify username
    return fetch('https://api.spotify.com/v1/me', {
      headers: headers
    })
      .then(response => response.json())

      // 2. POST a new playlist with name to their account. Receive the playlist ID back from request
      .then(jsonResponse => {
        userID = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({ name: name })
        })
          .then(response => response.json())
          // 3. POST track URIs to the newly-created playlist, referencing user's account and new playlist
          .then(jsonResponse => {
            const playlistID = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
              headers: headers,
              method: 'POST',
              body: JSON.stringify({ uris: trackURIs })
            });
          });
      });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
    const name = this.state.playlistName;
    this.savePlaylistName(name, trackURIs).then(() => {
      // Reset playlist name
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
      //document.getElementById('Playlist-name').value = this.state.playlistName;
    });
  }

  render() {
    return (
      <div>
        <div className='App-header'>
          <div className='App-logo'>
            Playlist<span className="highlight">Pal</span>
          </div>
          <div className='Spotify'>
            <div>Made for</div>
            <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png' alt='Spotify logo'/>
          </div>
        </div>
        <div className="App">
          {/*  <!-- Add a SearchBar component --> */}
          <SearchBar onSearch={this.search} />

          <div className="App-playlist">
            {/*  <!-- Add a SearchResults component --> */}
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />

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
        <div className='Footer'>Copyright © 2023 All rights reserved<br />Website created by Vy Nguyen</div>
      </div>
    );
  }
}

export default App;

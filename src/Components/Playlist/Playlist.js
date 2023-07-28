import React from 'react';
import { TrackList } from '../TrackList/TrackList';
import './Playlist.css';

export class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    render() {
        return(
            <div className='Playlist'>
                <div className='Playlist-name'>
                <input
                    id='Playlist-name'
                    placeholder='New Playlist'
                    onChange={this.handleNameChange}
                    value={this.props.playlistName}
                    />
                </div>
                {/* <!-- Add TrackList Component-->*/}
                <TrackList
                    tracks={this.props.playlistTracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true}
                />
                <button className='Playlist-save' onClick={this.props.onSave}>Save to Spotify</button>
            </div>
        );
    }
}
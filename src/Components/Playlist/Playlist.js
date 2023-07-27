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
                <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
                {/* <!-- Add TrackList Component-->*/}
                <TrackList
                    tracks={this.props.playlistTracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true}
                />
                <button className='Playlist-save'>Save Playlist</button>
            </div>
        );
    }
}
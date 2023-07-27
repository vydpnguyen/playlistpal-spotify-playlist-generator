import React from 'react';
import './Playlist.css';

export class Playlist extends React.Component {
    render() {
        return(
            <div className='Playlist'>
                <input placeholder='New Playlist'/>
                {/* <!-- Add TrackList Component-->*/}
                <button class='Playlist-save'>Save Playlist</button>
            </div>
        );
    }
}
import React from 'react';
import './Playlist.css';

export class Playlist extends React.Component {
    render() {
        return(
            <div className='Playlist'>
                <input defaultValue={'New Playlist'}/>
                {/* <!-- Add TrackList Component-->*/}
                <button className='Playlist-save'>Save Playlist</button>
            </div>
        );
    }
}
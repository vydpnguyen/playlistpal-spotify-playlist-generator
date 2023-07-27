import React from 'react';
import { Track } from '../Track/Track';
import './TrackList.css';

export class TrackList extends React.Component {
    render() {
        return(
            <div className='TrackList'>
            {/* <!-- Add map method that renders Track components --> */}
            {this.props.tracks.map(song => {
                return <Track key={song.id} track={song}/>

            })}
            </div>
        );
    }
}
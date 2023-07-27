import React from 'react';
import './Track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
    }
    
    renderAction() {
        if (this.props.isRemoval) {
            return <button class='Track-action'>-</button>
        }
        else {
            return <button class='Track-action' onClick={this.addTrack}>+</button>
        }
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    render() {
        return(
            <div className='Track'>
                <div className='Track-cover'></div>
                <div className='Track-information'>
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                    {this.renderAction()}
            </div>
        );
    }
}
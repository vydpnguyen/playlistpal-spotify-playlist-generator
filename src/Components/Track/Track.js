import React from 'react';
import './Track.css';

export class Track extends React.Component {
    renderAction() {
        if (this.props.isRemoval) {
            return <button class='Track-action'>-</button>
        }
        else {
            return <button class='Track-action'>+</button>
        }
    }

    render() {
        return(
            <div className='Track'>
                <div className='Track-cover'></div>
                <div className='Track-information'>
                    {/* <!-- Add track name --> */}
                    <h3>{this.props.track.name}</h3>
                    {/* <!-- Add track artist --> */}
                    <p>
                        {this.props.track.artist} | {this.props.track.album}
                    </p>
                </div>
                    {this.renderAction()}
            </div>
        );
    }
}
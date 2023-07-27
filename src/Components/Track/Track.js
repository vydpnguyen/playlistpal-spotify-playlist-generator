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
                <div className='Track-information'>
                    {/* <!-- Add track name --> */}
                    {/* <!-- Add track artist --> */}
                </div>
                    {this.renderAction()}
            </div>
        );
    }
}
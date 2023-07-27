import React from 'react';
import { TrackList } from '../TrackList/TrackList';
import './SearchResults.css';

export class SearchResults extends React.Component {
    render() {
        //console.log('onAdd prop in SearchResults:', this.props.onAdd);
        return(
            <div className='SearchResults'>
                <h2>Results</h2>
                {/* <!-- Add TrackList Component --> */}
                <TrackList
                    tracks={this.props.searchResults}
                    onAdd={this.props.onAdd}
                    isRemoval={false}
                />
            </div>
        );
    }
}
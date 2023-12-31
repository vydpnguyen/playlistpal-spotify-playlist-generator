import React from 'react';
import './SearchBar.css'

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.state = { searchTerm: '' };
    }

    search() {
        this.props.onSearch(this.state.searchTerm);
    }

    handleTermChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        return (
            <div className='SearchBar'>
                <h1>Create your <span className='Ultimate'>ultimate</span> <br/>personal playlists.</h1>
                <input placeholder='Enter A Song, Album or Artist' onChange={this.handleTermChange}/>
                <button className='SearchButton' onClick={this.search}>Search</button>
            </div>
        );
    }
}

let accessToken = '';
const clientID = '78677958579b4304bdb7f846edca381d';
const redirectURI = 'http://localhost:3000/';
//const redirectURI = 'https://playlistpal.netlify.app';
const Spotify = {
    // Check if user's access token is already set & return value saved to access token
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        // If not set, check URL to see if it has just been obtained
        const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (urlAccessToken && urlExpiresIn) {
            // Set access token value
            accessToken = urlAccessToken[1];
            // Set variable for expiration time
            const expiresIn = Number(urlExpiresIn[1]);
            // Set access token to expire at value for expiration time
            window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
            // Clear parameters from URL so app doesn't grab after token has expired
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }
        // If access token is empty
        else {
            const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&show_dialog=true&redirect_uri=${redirectURI}`;
            window.location = redirect;
        }
    },

    search(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
        // Convert returned response to JSON
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed.');
        })
        .then((jsonResponse) => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(tracks => ({
                id: tracks.id,
                name: tracks.name,
                artist: tracks.artists[0].name,
                album: tracks.album.name,
                uri: tracks.uri,
                image: tracks.album.images[0].url
            }));
        });
    }
};

export default Spotify;
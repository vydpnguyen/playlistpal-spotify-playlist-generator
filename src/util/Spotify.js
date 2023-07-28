let accessToken = '';
const clientID = '78677958579b4304bdb7f846edca381d';
const redirectURI = 'http://localhost:3000/';
const Spotify = {
    // Check if user's access token is already set & return value saved to access token
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        // If not set, check URL to see if it has just been obtained
        const urlAccessToken = indow.location.href.match(/access_token=([^&]*)/);
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
        }
        // If access token is empty
        else {
            const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&show_dialog=true&redirect_uri=${redirectURI}`;
            window.location = redirect;
        }
    }
};

export default Spotify;
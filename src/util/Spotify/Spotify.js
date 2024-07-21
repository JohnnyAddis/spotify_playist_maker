let accessToken = "";
const clientID = "a71049e412a94e22bdf9e173de20f217";
const redirectUrl = "http://localhost:3000";
const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;
    const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenInURL && expiryTime) {
      accessToken = tokenInURL[1];
      const expiresIn = Number(expiryTime);

      window.setTimeout(() => (accessToken = ""), expiresIn + 1000);

      window.history.pushState("Access token", null, "/");
      return accessToken;
    }

    const redirect =
      "https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}";
    window.location = redirect;
  },
  
};

export default Spotify;

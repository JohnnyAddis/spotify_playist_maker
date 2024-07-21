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

    const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
    window.location = redirect;
  },
  search(term) {
    accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      method: "GET",
      header: { Authorization: `bearer ${accessToken}` },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse) {
          console.error("Response Error");
        }
        return jsonResponse.tracks.items.map(t => ({
          id: t.id,
          name: t.name,
          artist: t.artists[0].name, //just the first artist in the returned array
          album: t.album.name,
          uri: t.uri
        }));
      });
  },
};

export { Spotify };

import React, { useState } from "react";
import styles from "./App.module.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import { Spotify } from "../../util/Spotify/Spotify";
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("Example Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  function addTrack(track) {
    const isInPlaylist = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (isInPlaylist) {
      console.log("Track already exists");
      //add alert?
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  function removeTrack(track) {
    const existing = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existing);
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackURIs = playlistTracks.map((t) => t.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(()=>{
      setPlaylistName('New Playlist')
      setPlaylistTracks([])
    })
  }

  function search(term) {
    //handling empty search case (could clear serach results?)
    if(!term){
      setSearchResults([]);
      return;
    }
    Spotify.search(term).then((result) => setSearchResults(result));
    console.log(term);
  }
  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>dd</span>is
      </h1>
      <div className={styles.App}>
        <SearchBar onSearch={search} />
        <div className={styles["App-playlist"]}>
          <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

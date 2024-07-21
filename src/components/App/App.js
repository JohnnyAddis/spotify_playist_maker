import React, { useState } from "react";
import styles from "./App.module.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import {Spotify} from "../../util/Spotify/Spotify";
function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: "mock1",
      artist: "artist1",
      album: "album1",
      id: 1,
    },
    {
      name: "mock2",
      artist: "artist2",
      album: "album2",
      id: 2,
    },
  ]);
  const [playlistName, setPlaylistName] = useState("defaultName");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "exampleName1",
      artist: "playlistartist1",
      album: "playlistAlbum1",
      id: 3,
    },
    {
      name: "playlistName2",
      artist: "playlistartiest2",
      album: "playlitalbum2",
      id: 4,
    },
  ]);
  function addTrack(track) {
    const isInPlaylist = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (isInPlaylist) {
      console.log("Track already exists");
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
  }

  function search(term) {
    Spotify.search(term).then(result => setSearchResults(result));
    console.log(term);
  }
  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <!-- Add a SearchBar component --> */}
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

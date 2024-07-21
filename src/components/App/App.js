import React, {useState} from "react";
import styles from './App.module.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
function App () {
    const [searchResults,setSearchResults] = useState(
    [{
      name: 'mock1',
      artist: 'artist1',
      album: 'album1',
      id: 1
    },
    {
      name: 'mock2',
      artist: 'artist2',
      album: 'album2',
      id: 2
    }]);
    const [playlistName, setPlaylistName]  = useState('defaultName');
    const [playlistTracks, setPlaylistTracks] = useState([
      {
        name: 'exampleName1',
        artist: 'playlistartist1',
        album:'playlistAlbum1',
        id: 3
      },{
        name: 'playlistName2',
        artist: 'playlistartiest2',
        album: 'playlitalbum2',
        id: 4
      }
    ])
    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          {/* <!-- Add a SearchBar component --> */}
          
          <div className={styles['App-playlist']}>
            <SearchResults userSearchResults = {searchResults} />
            <Playlist playlistName = {playlistName} playlistTracks = {playlistTracks}/>
          </div>
        </div>
      </div>
        );
}

export default App;
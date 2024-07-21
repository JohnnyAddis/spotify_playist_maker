import React, {useState} from "react";
import styles from './App.module.css';
import SearchResults from '../SearchResults/SearchResults';
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
    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          {/* <!-- Add a SearchBar component --> */}
          
          <div className={styles['App-playlist']}>
            <SearchResults userSearchResults = {searchResults} />
            {/* <!-- Add a Playlist component --> */}
          </div>
        </div>
      </div>
        );
}

export default App;
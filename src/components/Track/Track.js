import React from "react";
import styles from './Track.module.css';
function Track (props) {
    function renderAction(){
      return <button classnName = {styles['Track-action']}>{props.isRemoval ? '-' : '+'}</button>
    }
    return (
      <div className={styles.Track}>
        <div className={styles['Track-information']}>
          {/* <h3><!-- track name will go here --></h3> */}
          <h3>{props.track.name}</h3>
          <p>{props.track.artist} | {props.track.album}</p>
          {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
        </div>
        <button className = {styles['Track-action']}>{renderAction}</button>
        {/* <button class="Track-action"><!-- + or - will go here --></button> */}
      </div>
    );
}

export default Track;
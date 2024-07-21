import React from "react";
import styles from './Tracklist.module.css';

function Tracklist () {
    return (
        <div className={styles.Tracklist}>
        {/* <!-- You will add a map method that renders a set of Track components  --> */}    
        <li>track 1</li>
        <li>track 2</li>
        <li>track 3</li>
      </div>
      
    );
}

export default Tracklist;
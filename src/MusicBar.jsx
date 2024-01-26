import React from "react";

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import IconButton from '@mui/material/IconButton';

function MusicBar(props) {

  return (
  <div className="music-bar">
    {/* Rewind 5 seconds if pressed */}
    <div>
      <IconButton onClick={props.onFastRewind}>
        <FastRewindIcon style={{color: 'gray'}} fontSize="large" />
      </IconButton>
    </div>

    <div  >
      <IconButton onClick={props.onPlaying}  size="large" >
        {/*Render pause or play conditionally.*/}
        {props.isPlaying ? <PauseCircleIcon style={{fontSize: 50, color:'white'}} /> : <PlayCircleIcon  style={{fontSize: 50, color:'white'}}/>}
      </IconButton>
    </div>

    {/* Fast Forward 5 seconds if pressed */}
    <div>
      <IconButton onClick={props.onFastForward}>
        <FastForwardIcon style={{color: 'gray'}} fontSize="large" />
      </IconButton>
    </div>
  </div>
    );
}

export default MusicBar;
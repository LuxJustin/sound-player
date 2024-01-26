import React, {useState} from "react";
import './styles/App.css';
import Cover from './Cover';
import MusicBar from "./MusicBar";
import sounds from "./sounds";

function App() {
  // Set initial state as first index of sounds array.
  const [sound, setSound] = useState({
    title: sounds[0].title,
    fileUrl: sounds[0].fileUrl
  });
  
  // State depending if sound is playing.
  const [isPlaying, setIsPlaying] = useState(false); 
  // State that will store our current selected audio.
  const [audio, setAudio] = useState(new Audio(sound.fileUrl)); 

  function playSong() {
    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    } 
    else {
      setIsPlaying(false);
      audio.pause();
    }
  }

  function loadSound(sound) {
    // Set current sound state to the parameter passed
    setSound(sound);
    audio.src = sound.fileUrl;
    // Autoplay when clicked.
    setIsPlaying(true); 
    audio.play();
  }

  function changeTime(seconds) {
    audio.currentTime += seconds;
  }

  return (
    
    <div className='App'>
      {/* Render all sounds from array */}
      {sounds.map(soundObj => 
        <Cover onPress={loadSound} key={soundObj.id} id={soundObj.id} title={soundObj.title} img={soundObj.imgURL} fileUrl={soundObj.fileUrl}/>
      )}

      <MusicBar onPlaying={() => playSong()} onFastRewind={() => changeTime(-5)}  onFastForward={() => changeTime(5)} isPlaying={isPlaying}/>
    </div>
  );
}

export default App;

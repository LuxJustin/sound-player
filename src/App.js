import React, {useState, useEffect} from "react";
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
  
  const [isPlaying, setIsPlaying] = useState(false);
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
    setSound(sound);
    audio.src = sound.fileUrl;
    setIsPlaying(true);
    audio.play();
  }

  return (
    // Render all songs from array.
    <div className='App'>
      {sounds.map(soundObj => 
        <Cover onPress={loadSound} key={soundObj.id} id={soundObj.id} title={soundObj.title} img={soundObj.imgURL} fileUrl={soundObj.fileUrl}/>
      )}

      <MusicBar onPlaying={() => playSong()} isPlaying={isPlaying}/>
    </div>
  );
}

export default App;

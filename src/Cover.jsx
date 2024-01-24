import React, {useState} from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconButton from '@mui/material/IconButton';

function Cover(props) {
  const [MouseOver, setMouseOver] = useState(false);

  const songObject = {
    title: props.title,
    img: props.img,
    fileUrl: props.fileUrl
  }

  return (

    <div onMouseOver={() => setMouseOver(true)} 
        onMouseOut={() => setMouseOver(false)} 
        className="cover">
      <img src={props.img} alt={props.title} />
      <div className="cover-text">
        <h3>{props.title}</h3>

      </div>

      {/* Render play button */}
      <div className="play-btn" style={{visibility: MouseOver ? "visible" : "hidden"}} >
        <IconButton onClick={() => props.onPress(songObject)}>
          <PlayCircleIcon color="success" fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default Cover;
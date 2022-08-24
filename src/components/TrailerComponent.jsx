import React from "react";

function TrailerComponent(props) {
    const {show, handleClose, trailerKey } = props
  return show ? (
    <div className="popup">
      <div className="popup-inner">
        <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={()=>{handleClose()}}></button>
        <iframe className="youtube-iframe"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  ) : (
    ""
  );
}

export default TrailerComponent;

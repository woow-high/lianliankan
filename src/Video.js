import React, { useState, useRef } from 'react';
import videoFile from './test.mp4';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <video ref={videoRef} src={videoFile} controls/>
      {/* <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button> */}
    </div>
  );
};

export default Video;

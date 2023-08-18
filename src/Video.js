import React from 'react';
import videoFile from './test.mp4';

const Video = () => {

  return (
    <>
      {/* <video ref={videoRef} src={videoFile}/> */}
      <video style={{ width: '100%', borderRadius: '15px' }} preload='auto' src={videoFile} controls/>
    </>
  );
};

export default Video;

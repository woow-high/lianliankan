import React, { useState } from 'react';

const VideoPlayer = ({ videoUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlay = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  return (
    <div style={styles.videoPlayer}>
      <h1 style={styles.title}>{title}</h1>
      <div style={styles.videoContainer}>
        <video
          controls
          src={videoUrl}
          style={styles.video}
        >
          抱歉，您的浏览器不支持视频播放。
        </video>
        <button onClick={togglePlay} style={styles.playButton}>
          {isPlaying ? '暂停' : '播放'}
        </button>
      </div>
    </div>
  );
};

const styles = {
  videoPlayer: {
    textAlign: 'center',
    marginTop: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  videoContainer: {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto',
  },
  video: {
    width: '100%',
    height: 'auto',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '18px',
    padding: '8px 16px',
    cursor: 'pointer',
  },
};

export default VideoPlayer;

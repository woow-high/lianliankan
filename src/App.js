import React from 'react';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div style={styles.app}>
      <VideoPlayer
        videoUrl="https://www.example.com/sample.mp4" // 替换为你的视频链接
        title="React Video Player"
      />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
};

export default App;

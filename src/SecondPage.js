import React, { useState } from 'react';
import Video from './Video';

const SecondPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Second Page</h2>
      
      {/* 文件上传区域 */}
      <div>
        <input type="file" onChange={handleFileChange} />
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{ border: '1px dashed #ccc', padding: '20px', marginTop: '10px' }}
        >
          {selectedFile ? (
            <p>Selected file: {selectedFile.name}</p>
          ) : (
            <p>Drag & drop a file here or click to select</p>
          )}
        </div>
      </div>

      {/* 视频区域 */}
      <div style={{ marginTop: '20px', backgroundColor: selectedFile ? 'white' : 'black', color: selectedFile ? 'black' : 'white', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {selectedFile ? <Video src={URL.createObjectURL(selectedFile)} /> : 'Upload a file to see the video'}
      </div>
    </div>
  );
};

export default SecondPage;

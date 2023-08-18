import React from 'react';
import Video from './Video';

const HomePage = () => {
  const navigateToSecondPage = () => {
    // 在这里执行路由切换
    window.location.href = '/second';
    // 或者使用 React Router 的 <Navigate> 组件
  };
  
  return (
    <div>
      <h1>My React App</h1>
      <Video />
      <button onClick={navigateToSecondPage}>Go to Second Page</button>
    </div>
  );
};

export default HomePage;

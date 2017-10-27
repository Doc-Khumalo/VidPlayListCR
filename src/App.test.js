import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayList from './VideoPlayList/VideoPlayList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoPlayList />, div);
});

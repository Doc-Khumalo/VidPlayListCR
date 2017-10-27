import React from 'react';
import ReactDOM from 'react-dom';
import Videoplaylist from './VideoPlayList/Videoplaylist';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Videoplaylist />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import Videocontainer from './VideoContainer/Videocontainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Videocontainer />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'contaners/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

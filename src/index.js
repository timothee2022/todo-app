import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
// import todoProvider from './components/Context/settings/index.js';

class Main extends React.Component {
  render() {
    return <App />;
    // <todoProvider></todoProvider>
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

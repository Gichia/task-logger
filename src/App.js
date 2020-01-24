import React, {useEffect} from 'react';

import SearchBar from './components/navbar/navbar.component';
import Logs from './components/logs-preview/logs-preview.component';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Initialize materilize JS
    M.AutoInit();
  });

  return (
    <React.Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </React.Fragment>
  );
}

export default App;

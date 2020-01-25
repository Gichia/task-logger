import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import SearchBar from './components/navbar/navbar.component';
import Logs from './components/logs-preview/logs-preview.component';
import AddButton from './components/add-button/add-button.component'; 
import AddLogModal from './components/add-log-modal/add-log-modal.component';
import EditLogModal from './components/edit-log-modal/edit-log-modal.component';
import AddTechModal from './components/add-tech-modal/add-tech-modal.component';
import TechListModal from './components/tech-list-modal/tech-list-modal.component';
import EditTechModal from './components/edit-tech-modal/edit-tech-modal.component';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Initialize materilize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <React.Fragment>
        <SearchBar />
        <AddButton />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <EditTechModal />
        <div className="container">
          <Logs />
        </div>
      </React.Fragment>
    </Provider>
  );
}

export default App;

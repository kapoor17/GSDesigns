import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import  {faUserCircle} from '@fortawesome/free-solid-svg-icons';

import './App.css';
import SideBar from './components/sidebar';
import AdminPanel from './AdminPanel';
import Base from './gsdesigns/base';
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
        <Switch>
          <Route path="/owner" >
            <AdminPanel />
          </Route>
          <Route path="/">
            <Base />
          </Route>
        </Switch>
  );
}

export default App;

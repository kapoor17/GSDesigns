import React from 'react';
import './App.css';
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

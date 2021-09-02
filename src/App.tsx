import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Browse from './pages/browse/Browse';
import Anteriores from './pages/anteriores/Anteriores';
import Header from './header/Header';

function App() {
  const [headerItemBold, setHeaderItemBold] = useState<number>(0);

  return (
    <Router>
      {Header(headerItemBold, setHeaderItemBold)}
      <div>
        <Switch>
          <Route path="/Anteriores" component={Anteriores} />
          <Route path="/" component={Browse} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

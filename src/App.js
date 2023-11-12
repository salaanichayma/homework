import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DataPage from './pages/firstpage';

function App() {
  return (
    <Router>
       <Switch>
          <Route path="/data" component={DataPage} />
        </Switch>
     
    </Router>
  );
}

export default App;

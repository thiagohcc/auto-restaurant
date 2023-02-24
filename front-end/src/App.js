import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginTable from './pages/Login/LoginTable';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login-table" component={ LoginTable } />
      </Switch>
    </div>
  );
}

export default App;

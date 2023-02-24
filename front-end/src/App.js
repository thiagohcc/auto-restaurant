import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginTable from './pages/Login/LoginTable';
import TableMenu from './pages/TableMenu';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login-table" component={ LoginTable } />
        <Route exact path="/table-menu" component={ TableMenu } />
      </Switch>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Index from './pages/Index';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/index" component={Index} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;

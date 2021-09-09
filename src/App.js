import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/header';
import Rockets from './components/Rockets';
// import Profile from './components/Profile/Profile';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>

        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Rockets />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

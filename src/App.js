import Navbar from './Navbar';
import Registration from './components/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login';
import Home from './components/Home/Home';
import CreateNewEvent from './components/Activities/CreateNewEvent';
import AllEvents from './components/Activities/AllEvents';
import CreateUpcomingEvent from './components/Activities/CreateUpcomingEvent';
import AboutUs from './components/AboutUs';
import Mathrubhasha from './components/Mathrubhasha';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/event-details">
            <CreateNewEvent />
          </Route>
          <Route path="/single-event/1">
            <Mathrubhasha />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/create-event">
            <CreateUpcomingEvent />
          </Route>
          <Route path="/events">
            <AllEvents />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Registration />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

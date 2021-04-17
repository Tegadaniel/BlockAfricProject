import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Notification from './components/notification/Notification';
import Profile from './components/profile/Profile';

function App() {
  return (
    <Router>
      <div>
      <Header/>
      <Switch>
        <Route exact path = "/">
        <Body/>
        </Route>
        <Route path= "/notification">
        <Notification/>
        </Route>
        <Route path= "/profile">
        <Profile/>
        </Route>
      </Switch>
     <Footer/>
    </div>
    </Router>

  );
}

export default App;

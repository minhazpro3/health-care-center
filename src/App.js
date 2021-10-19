import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

import Doctors from './components/Doctors/Doctors';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import ServicePay from './components/ServicePay/ServicePay';
import AuthProvider from './Hooks/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route  path="/home">
          <Header></Header>
          </Route>
          <Route path="/doctor">
          <Doctors></Doctors>
          </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <PrivateRoute path="/Booking/:orderId">
         <ServicePay></ServicePay>
          </PrivateRoute>

          <Route path="*">
          <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
     
    </div>
  );
}

export default App;

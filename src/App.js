import './App.css';
import React, {useState} from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Page imports below
import Homepage from './components/Homepage';
import Login from './components/Login';
import SignUp from './components/Signup';
import StudentPanel from './components/StudentPanel/StudentPanel';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import MobileHeader from './components/MobileHeader';
import Results from './components/Results';
import Results2 from './components/Results2';

import Report from './components/Report';

function App() {
  var [showSidebar, setShowSidebar] = useState(true);
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="OuterApp">
      <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <div className="App">
          <Switch>
          <Route path="/login" exact>
              <Login/>
            </Route>
            <Route path="/signup" exact>
              <SignUp/>
            </Route>
            <Route path="/" exact><Login /></Route>
            <div className="Content">
              <Route path="/s" exact><Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/><StudentPanel /></Route>
              <Route path="/dashboard" exact>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Dashboard />
              </Route>
              <Route path="/results" exact>
                <Results/>
              </Route>
              <Route path="/results2" exact>
                <Results2/>
              </Route>
              <Route path="/report" exact>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Report />
              </Route>
          </div>
        </Switch>
      </div>
    </div>
    </Router>      
    
  );
}

export default App;
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import TDirectory from './pages/TarotO/TDirectory'
import Auth from './hoc/auth'
import NavBar from "./components/views/NavBar/NavBar";
import Footer from "./components/views/Footer/Footer";
import TBoard from "./pages/TarotO/TBoard";
import Tspread from "./pages/TarotO/Tspread";
function App() {
  return (
    <Router>
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
            <NavBar />
            <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}></div>
      <Switch>
        <Route exact path="/" component={Auth(LandingPage,null)} />
        <Route exact path="/login"component={Auth(LoginPage,false)} />
        <Route exact path="/register" component={Auth(RegisterPage,false)} />

      {/* 타로 라우터 */}
        <Route exact path="/tarotdirectory" component={Auth(TDirectory,null)} />
        <Route exact path="/tarotspread" component={Auth(Tspread,null)} />
        <Route exact path="/tarotboard" component={Auth(TBoard,true)} />      
      </Switch>
    </div>
    <Footer />
  </Router>
);
}
  

export default App

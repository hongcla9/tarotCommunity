import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Auth from './hoc/auth'
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import NavBar from "./components/views/NavBar/NavBar";
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import TDirectory from './pages/TarotO/TDirectory/TDirectory';
import upload from "./pages/TarotO/TDirectory/Upload";
import Tspread from "./pages/TarotO/TSpreads/Tspreads";
import SpreadsUpload from "./pages/TarotO/TSpreads/SpreadsUpload";
import TarotBoard from "./pages/TarotO/TBoard/TarotBoard";
import TBoardUpload from "./pages/TarotO/TBoard/TBoardUpload";
import DetailProductPage from "./pages/TarotO/TDirectory/Sections/DetailProductPage";
import Update from './pages/TarotO/TDirectory/Sections/Update';
import DetailTboardPage from "./pages/TarotO/TBoard/Sections/DetailTboardPage";
function App() {
  return (
    <Router>
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
            <NavBar />
            <div style={{ paddingTop: '20px', minHeight: 'calc(80px)' }}></div>
      <Switch>
        <Route exact path="/" component={Auth(LandingPage,null)} />
        <Route exact path="/login"component={Auth(LoginPage,false)} />
        <Route exact path="/register" component={Auth(RegisterPage,false)} />

        {/* 타로 백과사전  */}
        <Route exact path="/tarotdirectory" component={Auth(TDirectory,null)} />
        <Route exact path="/product/upload" component={Auth(upload, true)} />
        <Route exact path="/product/:productInfoId" component={Auth(DetailProductPage, true)} />
        <Route exact path="/product/:productInfoId/update" component={Auth(Update, true)} />
        {/* 타로스프레드 라우터 */} 
        <Route exact path="/tarotspread" component={Auth(Tspread,null)} />
        <Route exact path="/spreads/upload" component={Auth(SpreadsUpload, true)} />
        {/*타로게시판 라우터 */}
        <Route exact path="/tarotboard" component={Auth(TarotBoard,true)} />      
        <Route exact path="/tarotboard/upload" component={Auth(TBoardUpload,true)} /> 
        <Route exact path="/tarotboard/:tboardInfoId" component={Auth(DetailTboardPage, true)} />     
      </Switch>
    </div>
  </Router>
);
}
  

export default App

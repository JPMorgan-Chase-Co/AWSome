import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import './App.css';

import Home from "./components/home/home";
import Header from "./components/header/header";
import Register from "./components/register/register";
import RiskAssessment from './components/riskAssessment/riskAssessment';
import RetirementForm from './components/retirementForm/retirementForm';
import Login from "./components/login/login";
import detailsForm from "./components/detailsForm/detailsForm";

function App() {
  return (


    <div className="App">

        <header className="App-header">
          <Header></Header>
        </header>


        <Router>
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/detailsForm" component={detailsForm}></Route>
            <Route exact path="/riskAssessment" component={RiskAssessment}></Route>
            <Route exact path="/retirementForm" component={RetirementForm}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Router>

    


    </div>

  );
}

export default App;
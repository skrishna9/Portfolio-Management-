
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import ListItem from './components/pages/ListItem';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddStocks from './components/users/AddStocks';
import EditUser from './components/users/Edituser';
import View from './components/users/View';
// import Switch from "react-switch";

function App() {
  return (
    <Router>
     <div className="App">

      <Navbar />
      <Switch>
        <Route exact path='/' component={ListItem} />
        <Route exact path='/addstocks' component={AddStocks} />
        <Route exact path='/stock/edit/:id' component={EditUser} />
        <Route exact path='/View/edit/:id' component={View} />
        <Route  component={NotFound} />
      </Switch>
    </div>
   </Router>
  );
}

export default App;

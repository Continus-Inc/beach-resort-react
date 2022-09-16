import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';
import NavBar from './Components/NavBar';
import {Route, Switch} from 'react-router-dom';



function App() {
  return (
       <>
       <NavBar/>
        <Switch>
      <Route exact path='/' component= {Home}/>
        <Route exact path='/rooms' component= {Rooms}/>
         <Route exact path='/rooms/:slug' component= {SingleRoom}/>
           <Route  component= {Error}/>
        </Switch>  
         
       </>
  );
}

export default App;

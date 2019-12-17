import React from 'react';
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";

/* import home test component */
import Home from "./home"

/* import the Details.js */
import Details from "./Details"

/* start using react router. 
we do the curley braces because we wanna import specific things from react router */

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom' 

function App() {
  return (
    <Router>
        <div className="App">
              <Nav />
              <Switch>
                  {/* using path only "/" */}
                  <Route path="/" exact component={Home} />

                  <Route path="/about" component={About} />

                  <Route path="/shop" exact component={Shop} />

                  <Route path="/shop/:id" component={Details} />
                  
              </Switch>
        </div>
   </Router>
  );
}

export default App;

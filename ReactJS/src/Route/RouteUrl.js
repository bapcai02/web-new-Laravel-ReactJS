import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link, NavLink} from "react-router-dom";
import Home from '../Components/home/Home';
import Category from '../Components/category/Category';
import Details from '../Components/Details/Details';
import Contact from '../Components/contact/Contact';
import About from '../Components/about/About';

function RouteUrl(){

    return (
        <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/post/category/:id"  >
                <Category />
              </Route>
              <Route exact path="/posts/:id" >
                <Details />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
        </div>
      );

}
export default RouteUrl;
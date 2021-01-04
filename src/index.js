import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Bookdetails from './component/bookdetails'
import {BrowserRouter, Link, Route} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
    <Route path="/" exact component={App}/>
    <Route path="/book/:id" exact component={Bookdetails}/>
    </div>
    </BrowserRouter>
  </React.StrictMode>
,document.getElementById('root'));
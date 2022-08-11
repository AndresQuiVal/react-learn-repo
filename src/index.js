import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();


/*
We use the <BrowserRouter> component whenever we want to add routing to our application
since the React library does not have integrated routing beacuse of being a library
we need to install the library 'react-router-dom' and use their components

DOC of react-router-dom:
https://v5.reactrouter.com/

Some important components:

<Router> : is the component that receives the url pattern and returns the 
corresponding component

<Switch> : what happens if we put the url '/products' and then put the url '/'
both components are going to be rendered, therefore we need to put a switch
in which whenever the url matches, it doesnt read other <Router> tags

<Link> : works for avoiding a complete reload of the webpage itself whenever 
a new Route is reached, only re-renders the component itself that matches the
route entered
*/
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ReactDOM from "react-dom";
import Container from "./Components/Container";


  ReactDOM.render(
    <Router>
        <Container />
      </Router>,
      document.querySelector('#target'),
    
  )



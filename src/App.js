import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

//code used to call API of the top 100 fccampers who had
//the most brownie points in the last 30 days.
function takeRes(res){
  console.log("we made it into takeRes")
  return res;
}

const httpRequest = new XMLHttpRequest();
(
function makeRequest() {
  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', 'https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  httpRequest.send();
}
)();

function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log("we made it");
        takeRes(httpRequest.responseText);
        //httpRequest.responseText
      } else {
        console.log('There was a problem with the request.');
      }
    }
  }

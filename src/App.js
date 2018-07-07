import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <HelloW />
          <SayFullName name="Denis" surname="Kiriliuk" link="https://vk.com/denkiril" />
          <SayFullName name="Name" surname="Surname" link="#" />
      </div>
    );
  }
}

function HelloW() {
  return (
      <div>
      <h1>Hello World</h1>
      </div>
  )
}

function SayFullName(props) {
  return (
      <div>
      <h3> Моё имя {props.name}, фамилия - {props.surname}</h3>
      <a href={props.link}> Ссылка на мой профиль </a>
      </div>
  )
}


export default App;

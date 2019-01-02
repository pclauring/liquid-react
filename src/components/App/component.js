import React, { Component } from 'react';
import axios from 'axios';
import bugicon from './bug-solid.svg';
import './App.css';
import './bootstrap.min.css';
import ProfileCard from '../ProfileCard';
import { Col, Jumbotron, Button, Row, Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <img width="50px" src={bugicon} className="App-logo" alt="logo" />
        </Jumbotron>
        <Container>
          <Row>
            <Col xs="3">.col-3</Col>
            <Col xs="6">
              <ProfileCard />
            </Col>
            <Col xs="3">.col-3</Col>
          </Row>
          <Button size="lg">Launch</Button>
        </Container>
      </div>
    );
  }
}

export default App;


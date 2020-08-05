import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1>Hello!!</h1>
          </Col>
          <Col xs={12} md={6}>
            <h1>World!!</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

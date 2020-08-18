import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import uno from "./assets/img/uno.jpeg";
import { Parallax } from "react-parallax";
// import Pages from './components/pages/pages'
// import Sidebar from './components/sidebar/sidebar'
import "./App.css";

function App() {
  return (
    // <>
    //   <Sidebar></Sidebar>
    //   <Pages></Pages>
    // </>

    <div className="App">
      <Parallax
        bgImage={require("./assets/img/uno.jpeg")}
        bgImageSizes={200}
        bgImageAlt="myself"
        strength={1000}
      >
        Put some text content here - even an empty div with fixed dimensions to
        have a height for the parallax.
        <div style={{ height: "100vh" }} />
      </Parallax>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1>Hello!!</h1>
            <img src={uno} alt="" />
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

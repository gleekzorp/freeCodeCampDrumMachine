import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import DrumPadContainer from "./drums/DrumPadContainer";
import ControlsContainer from "./controls/ControlsContainer";

const DrumMachine = () => {
  return (
    <Container>
      <Row>
        <Col>
          <DrumPadContainer />
        </Col>
        <Col>
          <ControlsContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default DrumMachine;

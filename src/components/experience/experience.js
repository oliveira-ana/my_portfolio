import React from "react";
import { Row, Col, Card } from 'react-materialize';
const Experience = (props) => (
  <Card>
      <Row>
        <Col s={3} m={3}>
          <img src={props.avatar} className="circle responsive-img" />
          { props.name }
        </Col>

        <Col s={8} s={8}>
          <p><b>{props.title} <span className="grey darken-2 white-text">{props.company}</span></b></p>
          <p>{props.description}</p>
          <p>{props.link}</p>
        </Col>
      </Row>
  </Card>
);

export default Experience;
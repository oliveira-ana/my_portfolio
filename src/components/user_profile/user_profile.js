import React from "react";
import { Row, Col, Card } from 'react-materialize';
import avatar from '../../images/ana-oliveira.jpeg';

const UserProfile = () => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >Ana Oliveira</h5>
        <p className="grey darken-2 white-text">Desenvolvedora Front-End</p>
      </Row>
  </Card>
);

export default UserProfile;
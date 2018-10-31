import React from "react";
import { Row, Col, Card, Input, Button } from 'react-materialize';
import UserProfile from '../user_profile/user_profile'

const Contact = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>Contato</h5>
        <Card>
         <p>Github : oliveira-ana</p>
         <p>Linkedin: oliveira-ana91</p>
         <p>Email: ana_oli@outlook.com</p>     
        </Card>
    </Col>
  </Row>
);

export default Contact;
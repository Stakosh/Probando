import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MyComponent = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>My React App with Bootstrap</h1>
          <p>Welcome to my app using Bootstrap for styling.</p>
          <Button variant="primary">Primary Button</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MyComponent;

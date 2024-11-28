import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

function Home() {
  return (
    <div className="bg-light vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow p-5">
              <Card.Body>
                <h2 className="text-center mb-4">Welcome to the Home Page!</h2>
                <p className="text-center">
                  This is a simple home page created with React and Bootstrap.
                </p>
                <p className="text-center">
                “We cannot solve problems with the kind of thinking we employed when we came up with them.” —Albert Einstein
                </p>
                <div className="text-center mt-4">
                  <Button variant="primary" className="me-2">
                    Explore Features
                  </Button>
                  <Button variant="outline-secondary">Contact Us</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

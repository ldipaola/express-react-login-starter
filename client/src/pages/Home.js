import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { logout } from "../utils/logout";

export default function Home() {
  let history = useHistory();

  async function handleClick(event) {
    event.preventDefault();
    try {
      await logout();
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
        <Container fluid>
          <Row>
            <Col className="d-flex justify-content-center">
              <p className="p-1">Welcome User!</p>
              <Button
                type="submit"
                className="btn btn-default"
                onClick={handleClick}
              >
                Logout
              </Button>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

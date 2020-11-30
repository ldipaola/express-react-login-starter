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
        <Row>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item style={{color: "#AFAFAF", border: "none"}}>Data Entry</ListGroup.Item>
              <ListGroup.Item style={{color: "#AFAFAF", border: "none"}}>Reports</ListGroup.Item>
              <ListGroup.Item style={{color: "#AFAFAF", border: "none"}}>TMU - Data Entry</ListGroup.Item>
              <ListGroup.Item style={{color: "#AFAFAF", border: "none"}}>RNS - Data Entry</ListGroup.Item>
              <ListGroup.Item style={{color: "#AFAFAF", border: "none"}}>Unit Email</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Button
              type="submit"
              className="btn btn-default float-right"
              onClick={handleClick}
            >
              Logout
            </Button>
          </Col>
        </Row>
    </div>
  );
}

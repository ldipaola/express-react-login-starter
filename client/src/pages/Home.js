import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
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
      <h1>Hello, User!</h1>
      <Button type="submit" className="btn btn-default" onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
}

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import ProggressPage from "./pages/ProggressPage";

const NavigationBar = () => {
  return (
    <div>
      <Router>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Flittz Blittz</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link href="/dish">New Dish</Nav.Link>
              <Nav.Link href="/progress">Progress</Nav.Link>
              <Nav.Link href="#pricing">Fit Planner</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dish" element={<RecipePage />} />
          <Route path="/progress" element={<ProggressPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default NavigationBar;

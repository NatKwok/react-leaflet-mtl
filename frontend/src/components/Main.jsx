import React from "react";
import "../App.css";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import "../pages/style.css";

function Main() {
  return (
    <motion.div
      className="homepagebackground"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 1, x: { duration: 1 } }}
    >
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            <h2>Welcome to the Montreal Web Map</h2>
            <span></span>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Main;

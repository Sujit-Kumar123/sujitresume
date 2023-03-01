import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ml from "./assets/machinelearning.jpg";
import dj from "./assets/django.png";
import selenium from "./assets/selenium.jpg";
import python from "./assets/python.png";
import c from "./assets/c.png";
import java from "./assets/java.png";
import oracle from "./assets/oracle.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import javascript from "./assets/javascript.png";
import reactImage from "./assets/react.png";
import github from "./assets/github.png";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export const Skill = () => {
  return (
    <>
      <Container className="skill_cont" fluid="md">
        <motion.div
          initial={{ opacity: 0, y: "-20vw" }}
          animate={{ opacity: 1, y: 0, delay: 5 }}
        >
          <h2 className="skill_head"><i>Skill</i></h2>
        </motion.div>
        <Row className="skill_row skill_row_last">
          <Col md={4}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={python} />
              <Card.Body>
                <Card.Title>PYTHON</Card.Title>
                <Card.Text>70%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col ms={4}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={dj} />
              <Card.Body>
                <Card.Title>Django</Card.Title>
                <Card.Text>60%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={ml} />
              <Card.Body>
                <Card.Title>ML</Card.Title>
                <Card.Text>30%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="skill_row skill_row_last">
          <Col ms={4}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={c} />
              <Card.Body>
                <Card.Title>C</Card.Title>
                <Card.Text>70%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={java} />
              <Card.Body>
                <Card.Title>JAVA</Card.Title>
                <Card.Text>40%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={oracle} />
              <Card.Body>
                <Card.Title>ORACLE</Card.Title>
                <Card.Text>60%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="skill_row  skill_row_last">
          <Col md={4}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={selenium} />
              <Card.Body>
                <Card.Title>SELENIUM</Card.Title>
                <Card.Text>40%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col ms={4}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={reactImage} />
              <Card.Body>
                <Card.Title>REACT JS</Card.Title>
                <Card.Text>60%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={javascript} />
              <Card.Body>
                <Card.Title>JSAVASCRIPT</Card.Title>
                <Card.Text>60%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="skill_row skill_row_last">
          <Col md={4}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={html} />
              <Card.Body>
                <Card.Title>HTML</Card.Title>
                <Card.Text>70%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={css} />
              <Card.Body>
                <Card.Title>CSS</Card.Title>
                <Card.Text>60%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={github} />
              <Card.Body>
                <Card.Title>GITHUB</Card.Title>
                <Card.Text>75%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

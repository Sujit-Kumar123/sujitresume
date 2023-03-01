import React from "react";
import suji from "./assets/Suji.jpeg";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Home = () => {
  return (
    <>
      <motion.div className="home">
        <Container flex="true" className="hom_con">
          <motion.div
            initial={{ opacity: 0, y: "-20vw" }}
            animate={{ opacity: 1, y: 0, delay: 5 }}
          >
            <h3 className="contact_head">
              <i>Hello</i>
            </h3>
          </motion.div>
          <Row className="home_row">
            <Col>
              <motion.div
                className="home_col"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.1 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 360,
                  damping: 20,
                  delay: 0.2,
                }}
              >
                <img src={suji} className="home_img"></img>
              </motion.div>
            </Col>
            <Col className="home_details">
              <motion.div
                className="home_name"
                initial={{ scale: 0 }}
                animate={{ scale: 1, opacity: 2 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h5 style={{ color: "white" }}>
                  <span style={{ color: "rgb(245, 46, 46)" }}>My </span>name is
                </h5>
                <h3>
                  <pre className="pre_n">Sujit Kumar Pradhan</pre>
                </h3>
                <br />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <i>
                  <h2 className="home_cot"> Let's build something greate..</h2>
                </i>
              </motion.div>
              <motion.div
                initial={{ y: "5vw", opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                animate={{ y: 0, delay: 4, opacity: 1 }}
              >
                <h3 className="developer">
                  I am a
                  <span style={{ color: "rgb(245, 46, 46)" }}> Developer</span>
                </h3>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  );
};

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import phone3d from "./assets/phone3d.jpg";
import linkedin3d from "./assets/linkdin3d.jpg";
import instagram from "./assets/instagram.png";
export const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [error, setErrror] = useState("");
  const [mess,setMess]=useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    if (error ==="" && email!=="") {
      emailjs
        .sendForm(
          "service_t3urp5e",
          "template_590jf08",
          form.current,
          "JhHxO_IdJXICs63np"
        )
        .then(
          (result) => {
            console.log(result.text);
            setMess("Thanks")
            setEmail("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Enter a valid Email");
    }
  };
  const checkEmail = (e) => {
    setEmail(e.target.value);

    if (!email) {
      setErrror("Required");
      return false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setErrror("Invalid email address");
      return false;
    } else {
      setErrror("");
      return true;
    }
  };
  return (
    <>
      <div className="contact">
        <Container className="contact_con">
          <motion.div
            initial={{ opacity: 0, y: "-20vw" }}
            animate={{ opacity: 1, y: 0, delay: 5 }}
          >
            <h2 className="contact_head">
              <i>Contact</i>
            </h2>
          </motion.div>
          <Row className="contact_row">
            <Col md={8}>
              <Row className="contact_innrow">
                <Col>
                  <motion.div
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
                    <a href="tel:9692646537" className="contact_numa">
                      <img src={phone3d} className="contact_icon phone"></img>
                      <p className="contact_num">+919692646537</p>
                    </a>
                  </motion.div>
                </Col>
                <Col>
                  <motion.div
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
                    <a href="https://www.linkedin.com/in/sujit-kumar-pradhan-7b6393217">
                      <img src={linkedin3d} className="contact_icon"></img>
                    </a>
                  </motion.div>
                </Col>
                <Col>
                  <motion.div
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
                    <a href="https://www.instagram.com/sujit_05_05/">
                      <img src={instagram} className="contact_icon"></img>
                    </a>
                  </motion.div>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <h4 style={{color:"rgb(121, 121, 5)"}}>
                <i>Send a message</i>
              </h4>
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className="contact_label">Name</Form.Label>
                  <Form.Control
                    type="text"
                    style={{ width: "270px" }}
                    placeholder="Enter Name"
                    name="user_name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label className="contact_label">Email</Form.Label>
                  <Form.Control
                    type="email"
                    style={{ width: "270px" }}
                    placeholder="Enter Email"
                    name="user_email"
                    onKeyUp={checkEmail}
                  />
                  <span style={{ color: "red" }}>{error}</span>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label className="contact_label" required>
                    Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{ height: "100px", width: "270px" }}
                    placeholder=""
                    name="message"
                  />
                </Form.Group>
                <Button variant="info" type="submit">
                  Submit
                </Button>
                <span className="message">{mess}</span>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

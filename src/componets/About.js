import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import about_img from "./assets/about_image.jpg";
import Button from 'react-bootstrap/Button';
import CV from "./assets/resume1.pdf";

export const About=() =>{
  return (
    <><div className='about'>
    <Container className='about_con'>
    <motion.div
            initial={{ opacity: 0, y: "-20vw" }}
            animate={{ opacity: 1, y: 0, delay: 5 }}
          >
            <h3 className="contact_head">
              <i>About</i>
            </h3>
          </motion.div>
      <Row className='about_row' >
        <Col md={6}><motion.div initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 , }}
    transition={{
      type: "spring",
      stiffness: 360,
      damping: 20,
      delay:0.2,
    }}>
        <img src={about_img} className="about_img"></img>
        </motion.div>
        </Col>
        <Col md={6} className="about_content">
          <p>Hello and wellcome ! I am studying Master of Computer Science at the Khallikote Unitary University,
             Berhampur. Concentrating in Machine Learning and web App Development.
          </p>
          <p>To enhance my professional skills, capabilities and knowledge in an organization which
  recognizes the value of hard work and trusts me with responsibilities and challenges.
</p><motion.div className='cv_down'
     initial={{y:'5vw' ,opacity:0}}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      animate={{y:0, delay:4,opacity:1}}
       ><p> <a href={CV} download>
          <Button variant="info" type='button'>Download CV</Button>
        </a></p>
                </motion.div>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  )
}

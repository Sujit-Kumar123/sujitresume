import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import mail from "./assets/mail.png";
import address from "./assets/address.png";
import linkedin from "./assets/linkedin.png";
import facebook from "./assets/facebook.png";
export default function Footers(){
    return(<><div className="footer_con">
    <Container >
        <Row>
            <Col sm={6} className="footer_one">
            <a href="mailto:pradhansujitkumar52@gmail.com">
            <img src={mail} className="img_icon"></img>
            <p>pradhansujitkumar52@gmail.com</p></a>
            </Col>
            <Col>
            <Row>
            <Col >
                <a href="https://www.linkedin.com/in/sujit-kumar-pradhan-7b6393217">
                <img src={linkedin} className="img_icons"></img>
                </a>
             </Col>
            <Col ><a href="https://www.facebook.com/profile.php?id=100009067695217">
                <img src={facebook} className="img_icons"></img>
                </a>
            </Col>
            <Col>
            <a href="https://maps.google.com/?cid=14194240875709170858&hl=en&gl=in">
                <img src={address} className="img_icons"></img>
                </a>
            </Col>  
            </Row>
            </Col>
        </Row>
    </Container>
    </div>
    </>)
}
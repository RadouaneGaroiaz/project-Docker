import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/ULTX.png";
import navIcon1 from "../assets/img/discord-icon-svgrepo-com.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import contactImg from "../assets/img/standard.gif";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <img src={contactImg} style={{width:"700px", marginLeft:"280px"}} alt="Contact Us"/>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://discord.gg/PppmB6fEBs"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright {(new Date().getFullYear())} All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

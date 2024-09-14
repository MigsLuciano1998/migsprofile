import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
const currentYear = new Date().getFullYear();

function FooterHome() {
  return (
    <div>
      <Container fluid className="footer">
        <Container>
          <Row className="align-items-center">
            <Col className="border-right mb-0 pb-0">
              <h1>Send me a message now!</h1>
            </Col>
            
            <Col className="ms-5">
              <div className="d-flex align-items-center">
                <div className="contact-info me-5">
                  <p className="contact-title">Email:</p>
                  <a href="mailto:pocyoymiguel@gmail.com">pocyoymiguel@gmail.com</a>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Phone:</p>
                  <a href="tel:+639107297739">+63 910 720 7739</a>
                </div>
              </div>
            </Col>
            
          </Row>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <p className="py-3 text-center mb-0">&copy; {currentYear} All Rights Reserved</p>
        </Container>
      </Container>
    </div>
    
  )
}

export default FooterHome
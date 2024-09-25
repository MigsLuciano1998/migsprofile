import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import emailjs from 'emailjs-com';
const currentYear = new Date().getFullYear();

function FooterHome() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_e80powl',   // Replace with your Service ID
      'template_cv9sq17',  // Replace with your Template ID
      e.target,
      'DH0EGrVQCrvXqkoI7'       // Replace with your User ID
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Message sent!');
    }, (error) => {
      console.log('Failed to send email:', error.text);
      alert('Failed to send message, please try again later.');
    });
  };

  return (
    <div>
      <Container fluid className="footer">
        <Container>
          <Row className="align-items-center">
            <Col md="5" sm="12" className="border-right mb-0 pb-0">
              <h1>Send me a message now!</h1>

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
            
            <Col md="6" sm="12" className='offset-md-1'>
              <form onSubmit={sendEmail}>
                <label className='form-label'>Name</label>
                <input className='form-control' type="text" placeholder='Please enter your name here' name="user_name" required />
                
                <label className='form-label'>Email</label>
                <input className='form-control' type="email" placeholder='Please enter your email here' name="user_email" required />
                
                <label className='form-label'>Message</label>
                <textarea className='form-control' name="message" placeholder='Please enter your message here' rows="10" required />
                
                <button className='btn btn-success mt-3' type="submit">Send</button>
              </form>
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
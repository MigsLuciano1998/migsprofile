import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import emailjs from 'emailjs-com';
import linkedin from './../assets/images/linkedin.png';
import upwork from './../assets/images/upwork.png';
const currentYear = new Date().getFullYear();

function FooterHome() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_e80powl',   // Service ID
      'template_cv9sq17',  // Template ID
      e.target,
      'DH0EGrVQCrvXqkoI7'  // User ID
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
      <Container fluid className="footer" id="contact-form">
        <Container>
          <Row className="align-items-start">
            <Col md="5" sm="12">
              <h1>Contact Information</h1>
              <hr></hr>
              <div className="d-flex align-items-center footer-contact-con mb-3">
                <div className="contact-info me-5">
                  <p className="contact-title">Email:</p>
                  <a href="mailto:pocyoymiguel@gmail.com">pocyoymiguel@gmail.com</a>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Phone:</p>
                  <a href="tel:+639107297739">+63 910 720 7739</a>
                </div>
              </div>

              <div className="d-flex align-items-center footer-contact-con mb-3">
                <div className="contact-info me-3 other-profile-link-logo">
                  <img className="w-100" src={linkedin}></img>
                </div>
                <div className="contact-info">
                  <a href="https://www.linkedin.com/in/miguel-luciano-001672298/" target='_blank'><b>Miguel Luciano</b></a><br></br>
                  <small>Full-Stack Web Developer</small>
                </div>
              </div>

              <div className="d-flex align-items-center footer-contact-con">
                <div className="contact-info other-profile-link-logo me-3">
                  <img className="w-100" src={upwork}></img>
                </div>
                <div className="contact-info">
                  <a href="https://www.upwork.com/freelancers/~014160aed9ecefbf7a" target='_blank'>
                    <b>MiguelJr L </b>
                  </a><br></br>
                  <small>Full-Stack Developer | Dev Ops | System Administrator | SEO Specialist</small>
                </div>
              </div>
            </Col>

            <Col md="1" className="border-right "></Col>
            
            <Col md="5" sm="12" className="offset-md-1">
              <h1>Send Message</h1>
              <hr></hr>
              <form onSubmit={sendEmail}>
                <label className='form-label'>Name</label>
                <input className='form-control' type="text" placeholder='Please enter your name here' name="user_name" required />
                
                <label className='form-label'>Email</label>
                <input className='form-control' type="email" placeholder='Please enter your email here' name="user_email" required />
                
                <label className='form-label'>Message</label>
                <textarea className='form-control' name="message" placeholder='Please enter your message here' rows="10" required />
                
                <button className='btn btn-neon mt-3' type="submit">Send</button>
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
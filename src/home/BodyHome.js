import React, { useEffect, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './../assets/home/desktopHome.css';
import './../assets/home/tabletHome.css';
import './../assets/home/mobileHome.css';
import logo from './../assets/images/migs.jpg';
import clubpainfree from './../assets/images/clubpainfree.png';
import spt from './../assets/images/spt.png';
import trumove from './../assets/images/trumove.png';
import elan from './../assets/images/elan.png';
import kineci from './../assets/images/kineci.png';
import znlrtc from './../assets/images/znlrtc.png';

function BodyHome() {
  useEffect(() => {
    AOS.init({
      duration: 3000, 
      once: false,
      mirror: true, 
    });
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [fadeDisabled, setFadeDisabled] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setFadeDisabled(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <div>
      <Container 
        fluid 
        data-aos={!fadeDisabled ? 'fade' : ''}
        className={`home-banner-container-fluid ${isHovered ? 'hovered' : 'parent'}`}>
        <Container className='home-banner-container'>
            <Row className='h-100 align-items-center justify-content-center'>
              <Col className="col-lg-4 d-lg-dblock d-md-dnone d-sm-none">
                <div className='text-white banner-text-left'>
                  <div className='text'>
                    I am a web developer specializing in both frontend and backend development.
                  </div>
                </div>
              </Col>

              <Col className="col-lg-4 col-md-6">
                <div className='banner-photo' 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className='rotating-border'></div>
                  <img className='static-image' src={logo} alt='Logo'/>
                </div>
              </Col>

              <Col className="col-lg-4 col-md-6">
                <div className='banner-name-container'>
                  <h1 className='text-white banner-name-text'>Migs Luciano</h1>
                </div>

                <div className='text-white d-md-block d-lg-none d-sm-block'>
                  <div className='text text-right'>
                    I am a web developer specializing in both frontend and backend development.
                  </div>
                </div>
              </Col>
            </Row>
        </Container>   
      </Container>

      <Container fluid data-aos="fade" className='home-banner-end-container-fluid'>
        <Container>
          <div>
            <h1>Turn pixels into perfection and code into magic.<br />Let's bring your digital dreams to life!</h1>
          </div>
        </Container>
      </Container>

      <Container fluid data-aos="fade" className='section-one'>
        <Container>
          <Row>
            <Col>
              <div>
                <h1>Design</h1>
                <p>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me. I'm committed to creating fluent user experiences while staying fashionable.</p>
              </div>
            </Col>

            <Col>
              <div>
                <h1>Development</h1>
                <p>When developing websites and web applications, I use the best tools available and am equally adept at working independently to deliver high-quality solutions tailored to your personal or professional needs.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid data-aos="fade" id='projects' className='section-two'>
        <Container>
          <Row className="py-5 align-items-center">
            <Col>
              <div className='w-80'>
                <h1>My Works</h1>
                <p>I have had the opportunity to contribute to a variety of projects as a key member of the development team. In these collaborative efforts, I worked alongside skilled professionals to build and refine diverse websites and web applications. Each project was a team endeavor, showcasing our collective expertise and dedication to delivering effective and innovative solutions. My role in these projects highlights my ability to collaborate successfully and contribute meaningfully to achieving project goals.</p>
              </div>
            </Col>

            <Col>
              <div className='ms-5 mb-3'>
                <div className='logo-container'>
                  <Row>
                    <Col md="4" sm="6">
                      <div className='logo'><img src={clubpainfree} alt="Club Pain Free Logo" /></div>
                    </Col>
                    <Col md="8" sm="6">
                      <div className='logo-name'>
                        <h5>Club Pain Free</h5>
                        <a href="https://clubpainfree.com/"><i>www.clubpainfree.com</i></a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className='ms-5 mb-3'>
                <div className='logo-container'>
                  <Row>
                    <Col md="4" sm="6">
                      <div className='logo'><img src={spt} alt="Superior Therapy Logo" /></div>
                    </Col>
                    <Col md="8" sm="6">
                      <div className='logo-name'>
                        <h5>Superior Physical Therapy</h5>
                        <a href="https://www.thesuperiortherapy.com/"><i>www.thesuperiortherapy.com/</i></a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className='ms-5 mb-3'>
                <div className='logo-container'>
                  <Row>
                    <Col md="4" sm="6">
                      <div className='logo'><img src={trumove} alt="TruMove KC Logo" /></div>
                    </Col>
                    <Col md="8" sm="6">
                      <div className='logo-name'>
                        <h5>TruMove KC</h5>
                        <a href="https://trumovekc.com/"><i>www.trumovekc.com</i></a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className='ms-5 mb-3'>
                <div className='logo-container'>
                  <Row>
                    <Col md="4" sm="6">
                      <div className='logo'><img src={elan} alt="Elan Logo" /></div>
                    </Col>
                    <Col md="8" sm="6">
                      <div className='logo-name'>
                        <h5>Elan</h5>
                        <a href="https://elanclinic.ca/"><i>www.elanclinic.ca</i></a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className='ms-5 mb-3'>
                <div className='logo-container'>
                  <Row>
                    <Col md="4" sm="6">
                      <div className='logo'><img src={kineci} alt="Kineci" /></div>
                    </Col>

                    <Col md="8" sm="6">
                      <div className='logo-name'>
                        <h5>Kineci</h5>
                        <a href="https://kineci.com/"><i>www.kineci.com</i></a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className='ms-5 mb-3'>
                <div className='logo-container'>
                  <Row>
                    <Col md="4" sm="6">
                      <div className='logo'><img src={znlrtc} alt="Zeldan Nordic Language Review & Training Center Logo" /></div>
                    </Col>
                    <Col md="8" sm="6">
                      <div className='logo-name'>
                        <h5>ZNLRTC</h5>
                        <a href="https://nlrc.ph/"><i>www.nlrc.ph</i></a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid data-aos="fade" className='section-three'>
        <Container>
          <Row className='justify-content-md-center'>
            <div className='text-center pt-5 mb-5'> 
              <h1>What my employers say</h1>
            </div>

            <Col className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 mb-5">
              <div className="testimonial-box">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <h3 className='text-warning me-2'><FontAwesomeIcon icon={faStar} /></h3>
                    <h3 className='text-warning me-2'><FontAwesomeIcon icon={faStar} /></h3>
                    <h3 className='text-warning me-2'><FontAwesomeIcon icon={faStar} /></h3>
                    <h3 className='text-warning me-2'><FontAwesomeIcon icon={faStar} /></h3>
                    <h3 className='text-warning'><FontAwesomeIcon icon={faStar} /></h3>
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-end text-end">
                    <small>Professional Solutions Philippines</small>
                  </div>
                </div>
                <hr />
                <div>
                  <p>Working with Migs was a fantastic experience. His commitment to delivering high-quality and reliable solutions truly stands out. Whether tackling complex challenges of meetings tight deadlines, he consistently demonstrated exceptional skill and professionalism. Highly recommended!</p>
                </div>
              </div>
            </Col>

            <Col className='col-md-2 col-lg-3 d-sm-none d-xl-block d-md-block'></Col>

            <Col className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 mb-5">
              <div className="testimonial-box">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <h3 className='text-warning me-2'><FontAwesomeIcon icon={faStar} /></h3>
                    <h3 className='text-warning me-2'><FontAwesomeIcon icon={faStar} /></h3>
                    <h3 className='text-warning me-2'><FontAwesomeIcon icon={faStar} /></h3>
                    <h3 className='text-warning me-2'><FontAwesomeIcon icon={faStar} /></h3>
                    <h3 className='text-warning'><FontAwesomeIcon icon={faStar} /></h3>
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-end text-end">
                    <small>Zeldan NLRC Co.</small>
                  </div>
                </div>
                <hr />
                <div>
                  <p>Migs is an exceptional professional whose development skills have made a significant impact. As the sole developer on our projects, he not only delivered high-quality, reliable web applications but also made complex tasks more manageable for everyone involved. His clear communication and positive attitude greatly enhanced the collaborative environment. The end-users are consistently happy with the results, which speaks volumes about Migs' expertise and dedication. It's truly a pleasure to work with him!!</p>
                </div>
              </div>
            </Col>

            <Col className='col-md-2 col-lg-3 d-sm-none d-xl-block d-md-block'></Col>
          </Row>
        </Container>
      </Container>
    </div>
    
  )
}

export default BodyHome;
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
import bannerPhoto from './../assets/images/banner-photo.png';
import clubpainfree from './../assets/images/clubpainfree.png';
import spt from './../assets/images/spt.png';
import trumove from './../assets/images/trumove.png';
import elan from './../assets/images/elan.png';
import kineci from './../assets/images/kineci.png';
import znlrtc from './../assets/images/znlrtc.png';
import ynw from './../assets/images/ynw.png';

import Illustrator from './../assets/images/illustrator.png';
import Photoshop from './../assets/images/photoshop.png';
import Xd from './../assets/images/xd.png';
import Html from './../assets/images/html-5.png';
import Css from './../assets/images/css-3.png';
import Javascript from './../assets/images/js.png';
import ReactLogo from './../assets/images/react.png';
import Jquery from './../assets/images/jquery.png';
import Php from './../assets/images/php.png';
import Ci from './../assets/images/codeigniter.png';
import Worpress from './../assets/images/wordpress.png';
import Mysql from './../assets/images/mysql.png';
import Seo from './../assets/images/seo.png';
import Git from './../assets/images/git.png';
import Github from './../assets/images/github.png';

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

  const websiteDescriptions = [
    [
      "You Need Work Now",
      "www.youneedworknow.com",
      ynw,
      "<b>Project Overview</b><br>This website was developed to connect employers and job seekers in the United States. It is built on WordPress and uses WP Job Portal as its main plugin.<br><br><b>My Role & Fixes</b><br>I worked on resolving multiple issues as per the client’s requests—covering everything from the registration process to Stripe payment integration, as well as improving both the jobseeker and employer dashboards. I also performed general site cleanup by removing unused plugins and pages. The primary goal was to ensure the website ran smoothly and efficiently.<br><br><b>Challenges & Solutions</b><br>Although the initial timeline was only a few days, the project extended to over a month. The main challenge was that WP Job Portal had several limitations and bugs that needed to be addressed first. I collaborated directly with the plugin’s customer support team to resolve these issues, which involved waiting for their fixes. Once the core plugin functions were stable, I implemented custom code to meet the client’s specific needs.<br><br>Throughout the process, I maintained clear communication with the client, ensuring we were aligned on progress and timelines. In the end, the website was fully functional, optimized, and met all requirements.",
    ],
    [
      "ZNLRTC",
      "www.nlrc.ph",
      znlrtc,
      "<b>Project Overview</b><br>Zeldan Nordic Languages Review and Training Center is a Finland-focused language training center with trainees from all over the world. They needed a custom system to streamline operations and improve communication between staff and trainees.<br><br><b>My Role</b><br>I took over the project from a previous freelancer and rebuilt major parts of the system. This included redesigning processes for trainee registration, trainee profiles, batch assignments, paper requirements, training milestones, and messaging between trainees and their assigned departments.<br><br>On the employee side, I developed role-based access so each department only sees the relevant parts of the system. I also created features for the marketing team to publish blogs, collect trainee reviews, and generate meta descriptions for social media sharing.<br><br><b>Challenges</b><br>One of the main challenges was working with an unfamiliar PHP framework used by the previous developer. Despite this, I was able to understand and rework the system efficiently.<br><br>Within two months, I successfully launched the website. The employees reported that the new system made their work much easier, improved communication with trainees, and enhanced overall efficiency.<br><br>",
    ],
    [
      "Clup Pain Free",
      "www.clubpainfree.com",
      clubpainfree,
      "This website is built using wordpress and is designed to help clients relieve pain in their bodies. It offers videos and books that teach you how to treat pain naturally. To make it easier, users can select the specific body part they want to focus on. Once selected, you’ll get access to all the relevant resources—whether videos or books—to help relieve your pain. Books can be downloaded and videos can be watched after subscribing to the website."
    ],
    [
      "Superior Physical Therapy",
      "www.thesuperiortherapy.com",
      spt,
      "This website was built using WordPress for the frontend and CodeIgniter 3 for the backend system. I contributed to both sides of the development. The platform allows clinic staff and clients to interact seamlessly, with features such as online communication and record management. Client records are securely stored on the site, making it easier for the clinic to maintain and access important information. The system includes several tools that enhance the online experience for both staff and clients.",
    ],
    [
      "TruMove KC",
      "www.trumovekc.com",
      trumove,
      "This website was built using WordPress for the frontend and CodeIgniter 3 for the backend system. I contributed to both sides of the development. The platform allows clinic staff and clients to interact seamlessly, with features such as online communication and record management. Client records are securely stored on the site, making it easier for the clinic to maintain and access important information. The system includes several tools that enhance the online experience for both staff and clients.",
    ],
    [
      "Elan",
      "wwww.elanclinic.ca",
      elan,
      "This website was built using WordPress for the frontend and CodeIgniter 3 for the backend system. I contributed to both sides of the development. The platform allows clinic staff and clients to interact seamlessly, with features such as online communication and record management. Client records are securely stored on the site, making it easier for the clinic to maintain and access important information. The system includes several tools that enhance the online experience for both staff and clients.",
    ],
    [
      "Kineci",
      "www.kineci.com",
      kineci,
      "This website was built using WordPress for the frontend and CodeIgniter 3 for the backend system. I contributed to both sides of the development. The platform allows clinic staff and clients to interact seamlessly, with features such as online communication and record management. Client records are securely stored on the site, making it easier for the clinic to maintain and access important information. The system includes several tools that enhance the online experience for both staff and clients.",
    ],
  ];

  const [expanded, setExpanded] = useState([]);

  const toggleExpand = (index) => {
    setExpanded((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };
  
  return (
    <div>
      <Container 
        fluid 
        data-aos={!fadeDisabled ? 'fade' : ''}
        className={`home-banner-container-fluid ${isHovered ? 'hovered' : 'parent'}`}>
        <Container className='home-banner-container'>
            <Row className='h-100 align-items-center justify-content-center'>
              <Col className="col-lg-4 d-xl-block d-lg-dblock d-md-dnone d-sm-none">
                <div className='text-white banner-text-left'>
                  <div className='text'>
                    <ul className='mb-0'>
                      <li>Full-stack Web Developer</li>
                      <li>DevOps Engineer</li>
                      <li>System Administrator</li>
                      <li>SEO Specialist</li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col className="col-lg-4 col-md-6">
                <div className='banner-photo' 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img className='static-image' src={bannerPhoto} alt='Logo'/>
                </div>
              </Col>

              <Col className="col-lg-4 col-md-6">
                <div className='banner-name-container'>
                  <h1 className='text-white banner-name-text'>Migs Luciano</h1>
                </div>

                <div className='text-white d-md-block d-lg-none d-sm-block'>
                  <div className='text text-right'>
                    Full-stack Web Developer | DevOps Engineer | System Administrator | SEO Specialist
                  </div>
                </div>
              </Col>
            </Row>
        </Container>   
      </Container>

      <Container fluid data-aos="fade" className='home-banner-end-container-fluid'>
        <Container>
          <div>
            <h1 className='text-neon'>Turn pixels into perfection and code into magic.<br />Let's bring your digital dreams to life!</h1>
          </div>
        </Container>
      </Container>

      <Container fluid data-aos="fade" className='section-one'>
        <Container>
          <Row>
            <Col md="6">
              <div className="mb-5">
                <h1 className='text-neon'>Design</h1>
                <p className='text-white'>I'm not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me. I'm committed to creating fluent user experiences while staying fashionable.</p>
              </div>

              <div className="position-relative d-block">
                <span className="overlay-title"><b>Tools</b></span>
                <Row className="tools-container pt-5 pb-3 d-flex justify-content-center w-100">
                  <Col className="tools-image-container">
                    <img className="tools-image" src={Illustrator} alt="Adobe Illustrator"></img>
                    <small><b>Adobe<br />Illustrator</b></small>
                  </Col>
                  <Col className="tools-image-container">
                    <img className="tools-image" src={Photoshop} alt="Adobe Photoshop"></img>
                    <small><b>Adobe<br />Photoshop</b></small>
                  </Col>
                  <Col className="tools-image-container">
                    <img className="tools-image" src={Xd} alt="Adobe XD"></img>
                    <small><b>Adobe<br />XD</b></small>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md="6">
              <div className="mb-5">
                <h1 className='text-neon'>Development</h1>
                <p className='text-white'>I use the best tools available in developing websites and web applications, and I am equally adept at working independently to deliver high-quality solutions tailored to your personal or professional needs.</p>
              </div>

              <div className="position-relative d-block">
                <span className="overlay-title"><b>Tools</b></span>
                <Row className="tools-container pt-5 pb-3 d-flex justify-content-center w-100">
                  <Col className="tools-image-container">
                    <img className="tools-image" src={Html} alt="HTML"></img>
                    <small><b>HTML</b></small>
                  </Col>
                  <Col className="tools-image-container">
                    <img className="tools-image" src={Css} alt="CSS"></img>
                    <small><b>CSS</b></small>
                  </Col>
                  <Col className="tools-image-container">
                    <img className="tools-image" src={Javascript} alt="Java Script"></img>
                    <small><b>Java Script</b></small>
                  </Col>
                  <Col className="tools-image-container">
                    <img className="tools-image" src={ReactLogo} alt="React"></img>
                    <small><b>React</b></small>
                  </Col>
                  <Col className="tools-image-container">
                    <img className="tools-image" src={Jquery} alt="jQuery"></img>
                    <small><b>jQuery</b></small>
                  </Col>
                  <Col className="tools-image-container">
                    <img className="tools-image" src={Php} alt="PHP"></img>
                    <small><b>PHP</b></small>
                  </Col>
                  <Col className="tools-image-container">
                    <img className="tools-image" src={Ci} alt="CodeIgniter"></img>
                    <small><b>HTML</b></small>
                  </Col>
                  <Col className="tools-image-container">
                    <img className="tools-image" src={Worpress} alt="Wordpress"></img>
                    <small><b>Wordpress</b></small>
                  </Col>
                  <Col className="tools-image-container">
                    <img className="tools-image" src={Mysql} alt="MySQL"></img>
                    <small><b>MySQL</b></small>
                  </Col>
                  <Col className="tools-image-container">
                    <img className="tools-image" src={Seo} alt="Search Engine Optimization"></img>
                    <small><b>SEO</b></small>
                  </Col>
                  <Col className="tools-image-container">
                    <img className="tools-image" src={Git} alt="Git"></img>
                    <small><b>Git</b></small>
                  </Col>
                  <Col className="tools-image-container">
                    <img className="tools-image" src={Github} alt="GitHub"></img>
                    <small><b>GitHub</b></small>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid data-aos="fade" id='projects' className='section-two-beta'>
        <Container>
          <Row className="py-5 align-items-center">

              <div className='w-80'>
                <h1 className='text-neon'>My Works</h1>
                <p className='text-white'>I have had the opportunity to contribute to a variety of projects as a key member of the development team. In these collaborative efforts, I worked alongside skilled professionals to build and refine diverse websites and web applications. Each project was a team endeavor, showcasing our collective expertise and dedication to delivering effective and innovative solutions. My role in these projects highlights my ability to collaborate successfully and contribute meaningfully to achieving project goals.</p>
              </div>

              {websiteDescriptions.map(([title, link, logo, description], index) => (
                <Col md="4" key={index}>
                  <div className="website-container">
                    <div className="logo">
                      <img src={logo} alt={`${title} Logo`} />
                    </div>
                    <div className="logo-name">
                      <h5>{title}</h5>
                      <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
                        <i>{link.replace("https://", "")}</i>
                      </a>
                    </div>
                    <div className="pt-3">
                      <p
                        className={`clamp-text website-description ${
                          expanded.includes(index) ? "expanded" : ""
                        }`}
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                      <button
                        className="btn btn-neon show-more-btn"
                        onClick={() => toggleExpand(index)}
                      >
                        <small>
                          <i className='text-neon'>{expanded.includes(index) ? "- Show Less" : "+ Show More"}</i>
                        </small>
                      </button>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </Container>

      <Container fluid data-aos="fade" className='section-three'>
        <Container>
          <Row className='justify-content-md-center'>
            <div className='text-center pt-5 mb-5'> 
              <h1 className='text-neon'>What my employers say</h1>
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
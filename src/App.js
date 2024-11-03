
import './App.css';
import { Container, Row, Col, Carousel, Modal, Button } from 'react-bootstrap';
// import javascript from './static/javascript.png'
// import html from './static/Html 5.png'
// import css from './static/CSS.png'
// import bootstrap from './static/bootstrap.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import react from './static/React.png'
import ansible from './static/ansible.png'
import terraform from './static/terraform.png'
import kubernetes from './static/kubernetes.png'
import azure from './static/azure.jpg'
import prometheus from './static/prometheus1.webp'
import grafana from './static/grafana.svg'
// import redux from './static/Redux.png'
// import enzyme from './static/enzyme.png'
// import jest from './static/jest.png'
import image from './static/GM.jpg'
import github from './static/github.png'
import linkedin from './static/linkedin.png'
import email from './static/email.png'
import craze1 from './static/craze1.png'
import craze2 from './static/craze2.png'
import craze3 from './static/craze3.png'
import craze4 from './static/Craze4.png'
import Gmatch1 from './static/Gmatch1.png'
import Gmatch2 from './static/Gmatch2.png'
import Gmatch3 from './static/Gmatch3.png'
import Gmatch4 from './static/Gmatch4.png'
import Score1 from './static/Score1.png'
import Score2 from './static/Score2.png'
import Score3 from './static/Score3.png'
import Score4 from './static/Score4.png'

import React, { useState } from "react"
import resume from './static/GopiResume1.pdf'
import resumeimage from './static/resume.png'

function App() {
  const [Gmatchshow, setGmatch] = useState(false)
  const [Oncrazeshow, setOncraze] = useState(false)
  function handleShow(project) {
    if (project === 'Gmatch') {
      setGmatch(true)
    }
    else if (project === 'Oncraze') {
      setOncraze(true)
    }

  }
  function handleClose(project) {
    if (project === 'Gmatch') {
      setGmatch(false)
    }
    else if (project === 'Oncraze') {
      setOncraze(false)
    }
  }
  return (
    <div className="App">
      <div className="home-section">
        <div className="intro">
          <h1 style={{ color: '#fff' }}>Hellow ! I'm GOPI MACHA</h1>
          <div className="letter-changer"></div>
        </div>
        <Container>
          <Row>
            <Col md={3} xs={6} className="newcol">
              <img alt="Ansible" src={ansible} style={{ width: "5vw" }}></img>
              <h6 className="logo-text">Ansible</h6>
            </Col>
            <Col md={3} xs={6} className="newcol">
              <img alt="Terraform" src={terraform} style={{ width: "5vw" }}></img>
              <h6 className="logo-text">Terraform</h6>
            </Col>
            <Col md={3} xs={6} className="newcol">
              <img alt="Kubernetes" src={kubernetes} style={{ width: "5vw" }}></img>
              <h6 className="logo-text">Kubernetes</h6>
            </Col>
            <Col md={3} xs={6} className="newcol">
              <img alt="Azure" src={azure} style={{ width: "5vw" }}></img>
              <h6 className="logo-text">Azure</h6>
            </Col>
          </Row>
          <Row>
            {/*<Col md={3} xs={6} className="newcol">
              <img alt="Javascript" src={javascript} style={{ width: "5vw" }}></img>
              <h6 className="logo-text">Javascript</h6>
            </Col> 
            <Col md={3} xs={6} className="newcol">
              <img alt="Html5" src={html} style={{ width: "5vw" }}></img>
              <h6 className="logo-text">Html5</h6>
            </Col>
            <Col md={3} xs={6} className="newcol">
              <img alt="Css3" src={css} style={{ width: "5vw" }}></img>
              <h6 className="logo-text">Css3</h6>
            </Col>
            <Col md={3} xs={6} className="newcol">
              <img alt="Bootstrap" src={bootstrap} style={{ width: "5vw" }}></img>
              <h6 className="logo-text">Bootstrap</h6>
            </Col> */}

          </Row>
          <Row style={{ marginTop: '5px' }}>
            <Col md={3} xs={6} className="newcol">
              <img alt="Prometheus" src={prometheus} style={{ width: "5vw" }}></img>
              <h6 className="logo-text">Prometheus</h6>
            </Col>
            <Col md={3} xs={6} className="newcol">
              <img alt="Grafana" src={grafana} style={{ width: "5vw" }}></img>
              <h6 className="logo-text">Grafana</h6>
            </Col>
            <Col md={3} xs={6} className="newcol">
              <img alt="React" src={react} style={{ width: "5vw" }}></img>
              <h6 className="logo-text">React</h6>
            </Col>
          </Row>
        </Container>

      </div>
      <div className="about-session">
        <div className="about-left">
          <p className="ABOUT_ME">ABOUT ME</p>
          <p className="about-me-p"> Hello, and welcome to my page! I am a results-driven Site Reliability Engineer (SRE) with a strong background in end-to-end software development processes and designing complex, scalable solutions. I specialize in building resilient systems, automating infrastructure, and ensuring high availability for critical services. With proven expertise in designing software, analyzing data, and resolving technical issues, I have a track record of successfully delivering key projects on time.

            I thrive in environments that demand collaboration across cross-functional teams to enhance product reliability and performance. My experience spans curating technical roadmaps, improving operational efficiencies, and implementing proactive monitoring strategies to prevent downtime. I am passionate about working with modern tools and technologies to ensure that applications run smoothly and efficiently, focusing on both performance and scalability.   </p>
        </div>
        <div className="about-right">
          <img alt="pic" src={image} className="portfolio-pic"></img>
          <div className="contact-icons">
            <a target="_blank" rel="noreferrer" className="trans" href="https://github.com/GopiMacha?tab=repositories">
              <img className="email-pic" alt="git" src={github}></img>
            </a>
            <a target="_blank" rel="noreferrer" className="trans" href="https://www.linkedin.com/in/gopi-macha-09b45a152/">
              <img className="email-pic" alt="Linkedin" src={linkedin}></img>
            </a>
            <a className="trans" href="mailto:gopimacha95@gmail.com">
              <img className="email-pic" alt="Email" src={email}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="project-section">
        <h1 id="my-projects">My Projects</h1>
        <div className="all-Projects-Card">
          <div className="Projects-Card">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={craze1}
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={craze2}
                  alt="Second slide"
                />


              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={craze3}
                  alt="Third slide"
                />


              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={craze4}
                  alt="Third slide"
                />


              </Carousel.Item>
            </Carousel>
            <h4 style={{ color: '#007bff', fontFamily: 'cursive', marginBottom: '0px', marginTop: '2px' }}>ONCRAZE</h4>
            <p className="exp-parag">Craze was designed for those who love to travel, try different foods and learn about the latest fitness trends</p>
            <div className="project-but">
              <Button variant="primary" onClick={(event) => handleShow('Oncraze')}>
                More Info
              </Button>
              <a target="_blank" rel="noreferrer" href="https://www.oncraze.com/" className="btn btn-primary">Live Site</a>
              <Modal show={Oncrazeshow} onClick={(event) => handleClose('Oncraze')}>
                <Modal.Header closeButton>
                  <Modal.Title>ONCRAZE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>JavaScript | Angular| JQuery | Css | Html </p>
                  <ul>
                    <li>Added some extra functionality to the application like Cards functionality</li>
                    <li>Applied Bootstrap for developing responsive and mobile-first website and CSS keyframes for animation</li>
                    <li>Used the Postman tool to analyze the data</li>

                  </ul>
                </Modal.Body>

              </Modal>
            </div>
          </div>
          {/* second one */}
          <div className="Projects-Card">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Gmatch1}
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Gmatch2}
                  alt="Second slide"
                />


              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Gmatch3}
                  alt="Third slide"
                />


              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Gmatch4}
                  alt="Third slide"
                />


              </Carousel.Item>
            </Carousel>
            <h4 style={{ color: '#007bff', fontFamily: 'cursive', marginBottom: '0px', marginTop: '2px' }}>GMATCH</h4>
            <p className="exp-parag">Use GMatch to find players who are in search of teammates with similar skill sets, tendencies, and attitudes. Our team wants to help you find your team.</p>
            <div className="project-but">
              <Button variant="primary" onClick={(event) => handleShow('Gmatch')} >
                More Info
              </Button>
              <a target="_blank" rel="noreferrer" href="https://ksuletsgame.azurewebsites.net/" className="btn btn-primary">Live Site</a>
              <Modal show={Gmatchshow} onClick={(event) => handleClose('Gmatch')}>
                <Modal.Header closeButton>
                  <Modal.Title>GMATCH</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>JavaScript | React| Css | Rest API | Bootstrap | CI/CD </p>
                  <ul>
                    <li>Implemented the tabular functionality to the application</li>
                    <li>Used the Rest Api to get Call of Duty Players data</li>
                    <li>Added CI/CD functionality with the help of Azure Devops</li>

                  </ul>
                </Modal.Body>

              </Modal>
            </div>
          </div>
          {/* third one */}
          <div className="Projects-Card">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Score1}
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Score2}
                  alt="Second slide"
                />


              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Score3}
                  alt="Third slide"
                />


              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Score4}
                  alt="Fourth slide"
                />


              </Carousel.Item>
            </Carousel>
            <h4 style={{ color: '#007bff', fontFamily: 'cursive', marginBottom: '0px', marginTop: '2px' }}>SCOREBIRD</h4>
            <p className="exp-parag">Real-time scoring is available on apps, web pages, and broadcasts to keep your fans up to date regardless of their location.</p>
            <div className="project-but">
              <Button variant="primary" onClick={(event) => handleShow('Gmatch')} >
                More Info
              </Button>
              <a target="_blank" rel="noreferrer" href="http://www.scorebird.com/" className="btn btn-primary">Live Site</a>
              <Modal show={Gmatchshow} onClick={(event) => handleClose('Gmatch')}>
                <Modal.Header closeButton>
                  <Modal.Title>SCOREBIRD</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>JavaScript | React| Css | Bootstrap | Manual Testing </p>
                  <ul>
                    <li>Implemented some page layouts at the beginning of the project when i am under training in Enterpi Software Solutions</li>
                    <li>Created the test cases based on user stories</li>
                    <li>Followed Agile methodology</li>

                  </ul>
                </Modal.Body>

              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-session">
        <h1 id="my-projects">Download Resume</h1>
        <a href={resume} download>
          <img className="Resume" alt="Resume" src={resumeimage} ></img>
        </a>



      </div>




    </div>
  );
}

export default App;

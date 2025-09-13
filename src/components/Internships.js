import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proImg from "../assets/img/proImg.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Internships = () => {

  const internships1 = [
    {
      title: "Web Developer Intern",
      description: "CoreCom",
      imgUrl: proImg,
    },
  ]

  const internships2 = [
    {
      title: "Research Assistant",
      description: "University of Guelph",
      imgUrl: proImg,
    },
  ];

  return (
    <section className="internships" id="internships">
      <Container>
        <Row>
          <Col size={16}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Internships</h2>
                <p>I have completed several exciting tech internships that showcase my skills and enthusiasm for software development. These internships include developing dynamic web applications using modern frameworks and libraries, implementing machine learning models for predictive analytics, and creating interactive user interfaces that enhance user experience. My portfolio also features contributions to open-source internships, where I’ve collaborated with diverse teams to build and improve tools and applications. Each project has not only deepened my technical expertise but also honed my problem-solving abilities and passion for innovation in technology.</p>
                <p className="skip-lines"> </p>
                
                <Tab.Container id="internships-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Developer Intern</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Research Assistant</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  
                  <Tab.Content id="slideInUp">
                    
                    {/* First Internship */}
                    <Tab.Pane eventKey="first" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        {
                          internships1.map((internship, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...internship}
                              />
                            )
                          })
                        }
                        <p>
                        As an Intern in CoreCom General Trading and Contracting Est. in the Web Development Internship, September to December 2024. I did hands-on practical training in web development regarding PHP, WordPress, and database management. My freelancing work involved building and maintaining WordPress sites, themes, and plugins, CSS, and JavaScript in conjunction with frameworks like Laravel, then managing databases using MySQL. I also engaged in automatic testing with PHPUnit, Behat, and Selenium tools and played a part in team activity using version controls like SVN and Git.
                        <br /><br />
                        This has augmented my technical abilities, particularly in PHP development, iterative tests, and collaborative workflows. Most targets were achieved, yet there were still gaps, especially concerning advanced Laravel use. This internship also proved to be informative, and it will motivate me for future roles in web development. I am deeply grateful to the CoreCom team for their mentorship and support throughout my time with the company.
                        </p>
                      </Row>
                    </Tab.Pane>

                    {/* Second Internship */}
                    <Tab.Pane eventKey="second" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        {
                          internships2.map((internship, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...internship}
                              />
                            )
                          })
                        }
                        <p>
                        I worked as a Research Assistant at the University of Guelph, where I explored how wearable sensors and machine learning can be used for emotion recognition. I calibrated and operated Empatica EmbracePlus devices and portable EEG sensors, designed data collection protocols, and synchronized multimodal signals to capture physiological and brainwave activity. Using frameworks like PyTorch and Scikit-learn, I built and optimized machine learning models, comparing unimodal and multimodal approaches for applications in mental health and adaptive interfaces.
                        <br /><br />
                        This experience strengthened my skills in data preprocessing, signal processing, and model training, while also giving me the opportunity to present findings to an interdisciplinary research team.
                        </p>
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proImg from "../assets/img/proImg.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Internships = () => {
  return (
    <section className="internships" id="internships">
      <Container>
        <Row>
          <Col size={16}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Internships</h2>
                  <p>
                    I have completed several exciting tech internships that
                    showcase my skills and enthusiasm for software development
                    and research.
                  </p>
                  <p className="skip-lines"> </p>

                  <Tab.Container id="internships-tabs" defaultActiveKey="first">
                    {/* Tab navigation */}
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Developer Intern</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Research Assistant</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    {/* Tab contents */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      {/* CoreCom Internship */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          <ProjectCard
                            title="Web Developer Intern"
                            description="CoreCom General Trading and Contracting Est."
                            imgUrl={proImg}
                          />
                          <Col>
                            <p1>
                              As an Intern in CoreCom General Trading and
                              Contracting Est. in the Web Development Internship,
                              September to December 2024. I did hands-on
                              practical training in web development regarding
                              PHP, WordPress, and database management. My
                              freelancing work involved building and maintaining
                              WordPress sites, themes, and plugins, CSS, and
                              JavaScript in conjunction with frameworks like
                              Laravel, then managing databases using MySQL. I
                              also engaged in automatic testing with PHPUnit,
                              Behat, and Selenium tools and played a part in team
                              activity using version controls like SVN and Git.
                              <br />
                              <br />
                              This augmented my technical abilities, particularly
                              in PHP development, iterative tests, and
                              collaborative workflows. Most targets were
                              achieved, yet there were still gaps, especially
                              concerning advanced Laravel use. This internship
                              proved informative and motivating for future roles
                              in web development. I am deeply grateful to the
                              CoreCom team for their mentorship and support.
                            </p1>
                          </Col>
                        </Row>
                      </Tab.Pane>

                      {/* Research Assistant Internship */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard
                            title="Research Assistant"
                            description="University of Guelph"
                            imgUrl={proImg}
                          />
                          <Col>
                            <p1>
                              I worked as a Research Assistant where I explored
                              how wearable sensors and machine learning can be
                              used for emotion recognition. I calibrated and
                              operated Empatica EmbracePlus devices and portable
                              EEG sensors, designed data collection protocols,
                              and synchronized multimodal signals to capture
                              physiological and brainwave activity. Using
                              frameworks like PyTorch and Scikit-learn, I built
                              and optimized machine learning models, comparing
                              unimodal and multimodal approaches for applications
                              in mental health and adaptive interfaces.
                              <br />
                              <br />
                              This experience strengthened my skills in data
                              preprocessing, signal processing, and model
                              training, while also giving me the opportunity to
                              present findings to an interdisciplinary research
                              team.
                            </p1>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

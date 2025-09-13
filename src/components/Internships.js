import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proImg from "../assets/img/proImg.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Internships = () => {
  const internships = [
    {
      key: "first",
      tabTitle: "Web Developer Intern",
      title: "Web Developer Intern",
      description: "CoreCom General Trading and Contracting Est.",
      details: `As an Intern in CoreCom from September to December 2024, I did hands-on practical training in web development regarding PHP, WordPress, and database management. My freelancing work involved building and maintaining WordPress sites, themes, and plugins, CSS, and JavaScript in conjunction with frameworks like Laravel, then managing databases using MySQL. I also engaged in automatic testing with PHPUnit, Behat, and Selenium tools and played a part in team activity using version controls like SVN and Git.

This augmented my technical abilities, particularly in PHP development, iterative tests, and collaborative workflows. Most targets were achieved, yet there were still gaps, especially concerning advanced Laravel use. This internship proved informative and motivating for future roles in web development. I am deeply grateful to the CoreCom team for their mentorship and support.`,
      imgUrl: proImg,
    },
    {
      key: "second",
      tabTitle: "Research Assistant",
      title: "Research Assistant",
      description: "University of Guelph",
      details: `I worked as a Research Assistant where I explored how wearable sensors and machine learning can be used for emotion recognition. I calibrated and operated Empatica EmbracePlus devices and portable EEG sensors, designed data collection protocols, and synchronized multimodal signals to capture physiological and brainwave activity. Using frameworks like PyTorch and Scikit-learn, I built and optimized machine learning models, comparing unimodal and multimodal approaches for applications in mental health and adaptive interfaces.

This experience strengthened my skills in data preprocessing, signal processing, and model training, while also giving me the opportunity to present findings to an interdisciplinary research team.`,
      imgUrl: proImg,
    },
  ];

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

                  <Tab.Container id="internships-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      {internships.map((intern) => (
                        <Nav.Item key={intern.key}>
                          <Nav.Link eventKey={intern.key}>
                            {intern.tabTitle}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      {internships.map((intern) => (
                        <Tab.Pane key={intern.key} eventKey={intern.key}>
                          <Row className="mb-5">
                            {/* Short description inside ProjectCard */}
                            <ProjectCard
                              title={intern.title}
                              description={intern.description}
                              imgUrl={intern.imgUrl}
                            />
                            {/* Long details paragraph */}
                            <Col>
                              <p>{intern.details}</p>
                            </Col>
                          </Row>
                        </Tab.Pane>
                      ))}
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

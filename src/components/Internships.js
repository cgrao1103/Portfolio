import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proImg from "../assets/img/proImg.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Internships = () => {

  const internships = [
    {
      title: "Web Developer Intern",
      description: "CoreCom",
      imgUrl: proImg,
      details: `As an Intern in CoreCom General Trading and Contracting Est. (Sep-Dec 2024), I gained hands-on experience in PHP, WordPress, database management, and building/maintaining websites, themes, and plugins. I also used frameworks like Laravel, handled MySQL databases, conducted automated testing with PHPUnit, Behat, and Selenium, and collaborated using version control tools like SVN and Git. This internship strengthened my PHP development, iterative testing, and collaborative workflow skills.`
    },
    {
      title: "Research Assistant",
      description: "University of Guelph",
      imgUrl: proImg,
      details: `As a Research Assistant at the University of Guelph, I explored how wearable sensors and machine learning can be used for emotion recognition. I calibrated and operated Empatica EmbracePlus devices and portable EEG sensors, designed data collection protocols, and synchronized multimodal signals to capture physiological and brainwave activity. Using PyTorch and Scikit-learn, I built and optimized machine learning models, comparing unimodal and multimodal approaches for applications in mental health and adaptive interfaces. This experience strengthened my skills in data preprocessing, signal processing, and model training, and allowed me to present findings to an interdisciplinary research team.`
    }
  ];

  return (
    <section className="internships" id="internships">
      <Container>
        <Row>
          <Col size={16}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Internships</h2>
                  <p>
                    I have completed several exciting tech internships that showcase my skills and enthusiasm for software development and research. These experiences deepened my technical expertise, problem-solving abilities, and collaborative skills.
                  </p>
                  <Tab.Container id="internships-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="first">CoreCom</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">U of G Research</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          <ProjectCard {...internships[0]} />
                          <p className="internship-details">{internships[0].details}</p>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard {...internships[1]} />
                          <p className="internship-details">{internships[1].details}</p>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}

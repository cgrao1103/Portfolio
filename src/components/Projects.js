import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Mancala",
      description: "Mancala Game Development ",
      imgUrl: projImg1,
    },
    {
      title: "Billards",
      description: "8 Ball Pool Game Development",
      imgUrl: projImg2,
    },
    {
      title: "Spell Check",
      imgUrl: projImg3,
    },
    {
      title: "Histogram",
      
      imgUrl: projImg4,
    },
    {
      title: "Tourism",
      description: "Tourism Website Showcasing a state called GOA",
      imgUrl: projImg5,
    },
    {
      title: "ProFile",
      description: "Employees Management",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have completed several exciting tech projects that showcase my skills and enthusiasm for software development. These projects include developing dynamic web applications using modern frameworks and libraries, implementing machine learning models for predictive analytics, and creating interactive user interfaces that enhance user experience. My portfolio also features contributions to open-source projects, where I’ve collaborated with diverse teams to build and improve tools and applications. Each project has not only deepened my technical expertise but also honed my problem-solving abilities and passion for innovation in technology.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
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


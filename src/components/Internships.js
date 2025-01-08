import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proImg from "../assets/img/proImg.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Internships = () => {

  const internships = [
    {
      title: "Web Developer Intern",
      description: "CoreCom",
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
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          internships.map((internships, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...internships}
                                />

                                
                            )
                          })
                        }
                        <p1>
                        Experienced in PHP development with a focus on building and maintaining WordPress sites, themes, and plugins. Proficient in CSS, JavaScript, and familiar with frameworks like Laravel. Strong background in MySQL databases, iterative development, and test-driven development. Skilled in automated testing using PHPUnit, Behat, and Selenium, with expertise in version control systems such as SVN and Git.
</p1>
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


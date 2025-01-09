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
                        As an Intern in CoreCom General Trading and Contracting Est. in the Web Development Internship, September to December 2024. I did hands-on practical training in web development regarding PHP, WordPress, and database management. My freelancing work involved building and maintaining WordPress sites, themes, and plugins, CSS, and JavaScript in conjunction with frameworks like Laravel, then managing databases using MySQL. I also engaged in automatic testing with PHPUnit, Behat, and Selenium tools and played a part in team activity using version controls like SVN and Git.

This has augmented one's technical abilities, particularly in PHP development, iterative tests, and collaborative workflows. Most targets were achieved, yet there were still gaps, especially concerning advanced Laravel use. This internship also proved to be informative, and it will motivate me for future roles in web development. I am deeply grateful to the CoreCom team for their mentorship and support throughout my time with the company.
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


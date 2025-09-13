import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proImg from "../assets/img/proImg.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Internships = () => {

  const internships = [
    {
      title: "Research Asistant",
      description: "College of Computer Science - University of Guelph ",
      imgUrl: proImg,
    },
    
  ];

  return (
    <section className="internships" id="internships2">
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
                        I worked as a research assistant at the University of Guelph, where I explored how wearable sensors and machine learning can be used for emotion recognition. I calibrated and operated Empatica EmbracePlus devices and portable EEG sensors, designed data collection protocols, and synchronized multimodal signals to capture physiological and brainwave activity. Using frameworks like PyTorch and Scikit-learn, I built and optimized machine learning models, comparing unimodal and multimodal approaches for applications in mental health and adaptive interfaces. This experience strengthened my skills in data preprocessing, signal processing, and model training, while also giving me the opportunity to present findings to an interdisciplinary research team.
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


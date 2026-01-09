import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Wireframes = () => {
  return (
    <section className="wireframes" id="wireframes">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>UX Wireframes</h2>
                  <p>
                    Early-stage UX wireframes created using Figma, PowerPoint and Canva,
                    focusing on layout structure, user flows, and interaction
                    planning. Held with Sprints and User testing.
                  </p>

                  <Tab.Container defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills justify-content-center mb-5"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Wireframe Project 1
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Wireframe Project 2
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      {/* -------- PROJECT 1 -------- */}
                      <Tab.Pane eventKey="first">
                        <p className="wireframe-details">
                          <strong>Tool:</strong> Figma/PowerPoint <br />
                          <strong>Focus:</strong> Designing a user-centered food discovery experience that minimizes decision fatigue by prioritizing clear information hierarchy, simple navigation, and streamlined meal selection flows.
                        </p>

                        <a
                          href="https://uoguelphca-my.sharepoint.com/:p:/g/personal/cgrao_uoguelph_ca/IQDP4NkIne5fR7PddU4aSZBJATDxnVr9K3yuAv9CF2caO10"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="wireframe-link"
                        >
                          View Full Wireframe (PowerPoint)
                        </a>

                        <div className="wireframe-image">
                          <img
                            src="/wireframes/wireframe1.png"
                            alt="Wireframe Project 1 Preview"
                          />
                        </div>
                      </Tab.Pane>

                      {/* -------- PROJECT 2 -------- */}
                      <Tab.Pane eventKey="second">
                        <p className="wireframe-details">
                          <strong>Tool:</strong> Canva <br />
                          <strong>Focus:</strong> Degree Master - Designing a student-centered academic planning experience that reduces confusion by clearly presenting degree requirements, progress tracking, and next-step guidance.
                        </p>

                        <a
                          href="https://uoguelphca-my.sharepoint.com/:p:/g/personal/cgrao_uoguelph_ca/IQANGcErTy7qTI7Z61clgT48AdBqibbQISZT7N82KCFULR4"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="wireframe-link"
                        >
                          View Full Wireframe (PowerPoint)
                        </a>

                        <div className="wireframe-image">
                          <img
                            src="/wireframes/wireframe2.png"
                            alt="Wireframe Project 2 Preview"
                          />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

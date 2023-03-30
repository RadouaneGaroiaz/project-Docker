import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/vagos.jpg";
import projImg2 from "../assets/img/famillies.jpg";
import projImg3 from "../assets/img/image4.png";
//import projImg4 from "../assets/img/police.jpg";
import projImg5 from "../assets/img/police1.png";
import projImg6 from "../assets/img/gouv.jpg";
import projImg7 from "../assets/img/ems.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Vagos Gang",
      description: "Vagos Gang",
      imgUrl: projImg1,
    },
    {
      title: "Famillies Gang",
      description: "Famillies Gang",
      imgUrl: projImg2,
    },
    {
      title: "Sheriff Departement",
      description: "Sheriff Departement",
      imgUrl: projImg5,
    },
    {
      title: "Police Departement",
      description: "Police Departement",
      imgUrl: projImg3,
    },
    {
      title: "Government and loyers",
      description: "Government and loyers",
      imgUrl: projImg6,
    },
    {
      title: "EMS Departement",
      description: "EMS Departement",
      imgUrl: projImg7,
    },
  ];

  return (
    <section className="project" id="project" data-testid="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects Available</h2>
                <p>
project applications can be made up in groups or individually. the recruiting team processes all requests and chooses the best after studying the file and interview.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
                    <Tab.Pane eventKey="section">
                    <p>More project are comming soon.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More project are comming soon.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="image0"></img>
    </section>
  )
}

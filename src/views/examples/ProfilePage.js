import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

//Tilt Component 
import Tilt from 'react-tilt'

//BookCard
import BookCard from "../../components/Books/BookCard.jsx"

//BookData
import BookData from "../../components/Books/BookData"

//Card Components
import {CertificateDataCol1, CertificateDataCol2} from "../../components/Certificates/certificateData"
import CertificateCard from "../../components/Certificates/certificateCard"

import {ProjectDataCol1, ProjectDataCol2} from "../../components/Projects/porjectData"
import ProjectCard from "../../components/Projects/projectCard"



function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button id="tooltip340339232"className="btn-round" color="info" size="lg"  href="https://www.linkedin.com/in/michalwanto/" >
                Connect
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339232">
                Connect on LinkedIn
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
                href="https://www.instagram.com/michalwnt/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Follow me on Instagram
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339233"
                size="lg"
                href="https://github.com/michalwanto"
              >
              <i class="fab fa-github"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339233">
                Check my Github repositories
              </UncontrolledTooltip>
            </div>
            <h3 className="title">About me</h3>
            <h5 className="description">
            A tech enthusiast. Love reading books and listening to audiobooks. Passionate in analyzing and solve complex problems. 
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">My Background</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                      <i className="fas fa-graduation-cap"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                      <i class="fas fa-briefcase"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                      <i class="far fa-folder-open"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                      <i class="fas fa-certificate"></i>
                      </NavLink>
                    </NavItem>
                    
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                  <h3 className="ml-auto mr-auto">Education</h3>
                  <hr style={{width:"70vw"}}></hr>
                  <Row style={{marginBottom:"50px"}} className="collections">
                  <Col md="5">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("/Users/michalwanto/Desktop/Resume/web-resume/src/assets/img/StanfordEngineering.jpeg")}
                          style={{aligntItems:"centre", width:"200px",maxHeight:"400px", marginLeft: "70px",marginBottom: "70px",marginTop: "30px"}}
                        ></img>
                      </Col>
                      <Col  md="6">
                        <h4 style={{marginBottom:"2px"}}>STANFORD UNIVERISTY </h4>
                        <h5 style={{marginBottom:"2px",color:"grey"}}>Artificial Intelligence Professional Program</h5>
                        <p style={{fontSize:"14px"}}>April 2021 - Present</p>
                        <span>Artificial Intelligence <br></br></span>
                        <ul >
                        <li>	Machine Learning (Supervised Learning, Unsupervised Learning, Deep Learning)</li>
                        <li>Natural Language Processing</li>
                      </ul>  
                      </Col>
                  <Col md="5">  
                  <img
                    alt="..."
                    className="img-raised"
                    src={require("assets/img/SPJAIN.png")}
                    style={{aligntItems:"centre", width:"200px",maxHeight:"400px", marginLeft: "70px",marginBottom: "70px",marginTop: "30px"}}
                  ></img>
                </Col>
                <Col md="6">
                  <h4 style={{marginBottom:"2px"}}>SP JAIN SCHOOL OF GLOBAL MANAGEMENT</h4>
                  <h5 style={{marginBottom:"4px",color:"grey"}}>Bachelor of Business Administration</h5>
                  <p style={{fontSize:"14px",marginBottom:"2px"}}>August 2017 - April 2021</p>
                  <p style={{fontSize:"14px"}}>Dean's List with GPA of 4.0/4.3 </p>
                  <span >Top 20 in The World : FORBES INTERNATIONAL B-SCHOOLS (2013-15). <br></br>Three cities program; one year in Singapore, one year in Dubai, and two years in Sydney. Coursework included Cost Accounting, Digital Marketing, Employability and Practitioner Skill, Financial Market and Institution, Financial Statement Analysis, Foundations of Entrepreneurship, Human Resource Management, Business Law, Decision Making, Project Management, Australia Business Environment, Branding and Communication, Strategic Management, Business Disruptive Technology, Business English Writing, Business Oral Communication, Computer Skills, Corporate Finance, Critical Thinking, Decision Science, Emotional Intelligence, Financial Accounting, Leadership, Macroeconomics, Marketing, Mathematics, Operations Management, Organisational Behaviour, Principles of Management, Regional Immersion Project, Research Methodology, Statistics, Sustainability & Corporate Social Responsibility, World Cultures. 
                  
                  </span>
                </Col>    
                  
                  <Col md="5">
                        <img
                          alt="..."
                          className="img-raised"
                          src="https://primarylibrary.sgiaedu.org/template/default/assets/images/Logo.png"
                          style={{aligntItems:"centre", width:"200px",maxHeight:"400px", marginLeft: "70px",marginBottom: "70px",marginTop: "70px"}}
                        ></img>
                      </Col>
                      <Col  md="6">
                        <h4 style={{marginBottom:"2px", marginTop: "70px"}}>SEKOLAH GLOBAL INDO-ASIA </h4>
                        <h5 style={{marginBottom:"2px",color:"grey"}}>High School</h5>
                        <p style={{fontSize:"14px"}}>2010-2016</p>
                        <span> General Certificate of Education (GCE): IGCSE and A-Level courses. Coursework included Mathematics, Business Studies, Economics, Global Perspective, Bahasa Indonesia, English. </span>
                      </Col>
                    </Row>
                    <Row className="collections">
        
                      
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                  <h3 className="ml-auto mr-auto">Experiences</h3>
                  <hr style={{width:"70vw"}}></hr>
                  <Row className="collections">
                    <Col md="5">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("/Users/michalwanto/Desktop/Resume/web-resume/src/assets/img/Dashdot.png")}
                          style={{aligntItems:"centre", width:"200px",maxHeight:"400px", marginLeft: "70px", paddingTop:"80px",paddingBottom:"80px",paddingLeft:"20px",paddingRight:"20px"}}
                        ></img>
                      </Col>
                      <Col style={{marginBottom:"50px"}} md="6">
                        <h4 style={{marginBottom:"2px"}}>Dashdot</h4>
                        <h5 style={{marginBottom:"2px",color:"grey"}}>Data and Software Engineer</h5>
                        <p style={{marginBottom:"2px",fontSize:"13px"}}>May 2021 – Present</p>
                        <p style={{fontSize:"12px"}}>Sydney, Australia</p>
                        <ul>
                        <li>(Delta Architecture in Databricks , Data Warehousing in Snowflake, AWS and Azure microservices)</li>
                        <li>Built End-to-end company’s data pipelines and Robotic Process Automations from scratch.</li>
                        <li>(Stream & Auto-ingest in Databricks and Power Automate for RPA).</li>
                        <li>Managed company’s data warehousing and governance through Snowflake and Databricks.</li>
                        <li>ETL (extract, transform and load data).</li>
                        <li>Designed, integrated, streamlined company’s fully customised Business Intelligence dashboards in Tableau. </li>
                        <li>Designed Company’s cross-platform UI/UX (Wireframe & UI Designs in Figma).</li>
                        <li>Developed Company’s End-to-end Web Application; Property Investment Platform (React,Redux, GraphQL, Azure Microservices; CosmosDB, App Services, Azure Repos,DevSecOps CI/CD, Funtion Apps, API Connections, Key Vaults, Traffic Manager, etc).</li>
                        </ul>
                      </Col>
                    </Row>
                    <hr></hr>
                  <Row className="collections">
                    <Col md="5">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("/Users/michalwanto/Desktop/Resume/web-resume/src/assets/img/aiventures.png")}
                          style={{aligntItems:"centre", width:"200px",maxHeight:"400px", marginLeft: "70px"}}
                        ></img>
                      </Col>
                      <Col style={{marginBottom:"50px"}} md="6">
                        <h4 style={{marginBottom:"2px"}}>AI VENTURES</h4>
                        <h5 style={{marginBottom:"2px",color:"grey"}}>Data Analyst Intern</h5>
                        <p style={{marginBottom:"2px",fontSize:"13px"}}>Feb 2021 – May 2021</p>
                        <p style={{fontSize:"12px"}}>Sydney, Australia</p>
                        <ul>
                        <li>Contributed to ETL processes (SQL Querying using Azure Data Studio).</li>
                        <li>Created data visualization, reports, and dashboards for Project and Program Managers.</li>
                        <li>Initiated Digital Transformation processes; streamlining repetitive tasks using Power.</li>
                        Automate, Phantom, Approval, and Power Apps
                        <li>Set up the company’s DevOps infrastructure (Microsoft Azure).</li>
                        </ul>
                      </Col>
                    </Row>
                    <hr></hr>
                  <Row className="collections">
                    <Col md="5">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("/Users/michalwanto/Desktop/Resume/web-resume/src/assets/img/AI_AU_LOGO.jpeg")}
                          style={{aligntItems:"centre", width:"200px",maxHeight:"400px", marginLeft: "70px"}}
                        ></img>
                      </Col>
                      <Col style={{marginBottom:"50px"}} md="6">
                        <h4 style={{marginBottom:"2px"}}>AI AUSTRALIA</h4>
                        <h5 style={{marginBottom:"2px",color:"grey"}}>Program Manager Intern</h5>
                        <p style={{marginBottom:"2px",fontSize:"13px"}}>Feb 2021 – May 2021</p>
                        <p style={{fontSize:"12px"}}>Sydney, Australia</p>
                        <ul>
                        <li>Worked closely with the Program Managers and Project Sponsors in designing and
                        managing in-house business analytics.</li>
                        <li>Planned, organized, and aligned project goals, resources, and deliverables through cascading KPIs.</li>
                        <li>Created In-house Mission Control business application – Integrating KPIs in Power BI,
                        Power Apps, Planner, Forms, and Project through Power Automate.</li>
                        <li>Conducted internal audits, identifying trends, determining system improvements, and restructuring business workflow processes.</li>
                        <li>Provide, communicate, and implement strategies and tactics to address competition,improvements in technology or marketing tools, and potential expansion opportunities
                        through M&A deals.</li>
                        </ul>
                        
                      </Col>
                      
                    </Row>
                    <hr></hr>
                  <Row className="collections">
                      
                    <Col md="5">
                    
                    <img
                      alt="..."
                      className="img-raised"
                      src={require("assets/img/GOFLEETINT.png")}
                      style={{aligntItems:"centre", width:"200px",maxHeight:"400px", marginLeft: "70px"}}
                    ></img>
                    <img
                      alt="..."
                      className="img-raised"
                      src={require("assets/img/with_gofleetteam.JPG")}
                      style={{aligntItems:"centre", width:"200px",maxHeight:"400px", marginLeft: "70px",marginBottom:"5px"}}
                    ></img>
                    <p style={{fontSize:"12px",marginLeft: "70px"}}>Sheraton Grand Hotel, Dubai, UAE</p>
                  </Col>
                  <Col md="6">
                  <h4 style={{marginBottom:"2px"}}>GOFLEET INTERNATIONAL</h4>
                  <h5 style={{marginBottom:"2px",color:"grey"}}>Management Trainee</h5>
                  <p style={{marginBottom:"2px",fontSize:"13px"}}>Jan 2019 – Sep 2019</p>
                  <p style={{fontSize:"12px"}}>Dubai, United Arab Emirates</p>
                  <ul>
                        <li>Worked closely with the CEO in preparing business presentations for its clients, Dnata,Emirates Group, and Dubai Airport.</li>
                        <li>Developed project plans and optimization strategies.</li>
                        <li>Monitor deliverables and ensuring timely completion of projects (meeting milestones), and performed weekly and monthly reviews, and analyzed project progress from operational metrics.</li>
                        <li> Conducted related research to support strategic and business planning within the various departments and discovering areas for improvement.</li>
                        <li> Conducted $1M worth of primary and secondary market research on the feasibility and viability of electric bikes in Dubai as a delivery mode of transportation in the F&B sector.</li>
                        <li>Redesigning the company's profile deck, website UI/UX, and brochures.</li>
                        </ul>
                        <h5 style={{marginTop:"40px",marginBottom:"2px",color:"grey"}}>Business and Data Analyst Intern</h5>
                        <p style={{marginBottom:"2px",fontSize:"13px"}}>Oct 2018 – Jan 2019</p>
                        <p style={{fontSize:"12px"}}>Dubai, United Arab Emirates</p>
                        <ul>
                        <li>Collaborated with Data Analysts and Senior Engineers in managing and analyzing $20M+ worth of the vast amount of telematics data.</li>
                        <li>Gathered and organized business requirements from clients.</li>
                        <li>Designed SPAP (Structured Pyramid Analysis Plan), SMART goals, and hypothesis.</li>
                        <li>Queried data from the data warehouse (SQL querying).</li>
                        <li>Applied data modeling techniques and designed workflow into a process map.</li>
                        <li>Analyzed data and created Data Visualizations (charts and dashboards) such as assets utilization matrix, fuel consumption matrix, vehicles idling time, ROI, etc. for the company's clients(Power BI & Tableau). </li>
                        <li>System Integration Testing, to ensure seamless integration and detect failures.</li>
                        <li>Data Quality Check</li>
                        <li>Engaged and maintained a relationship with internal and external stakeholders.</li>
                        <li>Business Intelligence Reporting</li>
                        <li>Performed as a bridge between technical and non-technical stakeholders</li>
                          </ul>
                  </Col>
                    </Row>
                    <hr></hr>
                    <Row className="collections">
                    <Col md="5">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/IFASHIONGROUP.png")}
                          style={{aligntItems:"centre", width:"200px",maxHeight:"400px", marginLeft: "70px"}}
                        ></img>
                      </Col>
                      <Col style={{marginBottom:"50px"}} md="6">
                        <h4 style={{marginBottom:"2px"}}>IFASHION GROUP </h4>
                        <h5 style={{marginBottom:"2px",color:"grey"}}>Financial Analyst Intern</h5>
                        <p style={{marginBottom:"2px",fontSize:"13px"}}>Sep 2017 - Aug 2018</p>
                        <p style={{fontSize:"12px"}}>15 Shaw Road, Singapore</p>
                        <ul>
                        <li>Worked closely with the CFO in managing and analyzing the newest and past financial data.</li>
                        <li>Managed $10M+ worth of Financial and Inventories Data of its subsidiary companies.</li>
                        <li>Built Financial Modeli, Dashboards, Periodic Reports on the company's Financial Performance.</li>
                        <li>Ensured accurate financial reporting through bank reconciliation, account receivables and payables reconciliations (using Xero accounting platform), G/L and B/S reconciliations.</li>
                        <li>Ad-hoc entries, FP&A. </li>
                        <li>Worked with the management team to develop a long-term commercial plan.</li>
                        <li>Tracked the company's financial performance against plan.</li>
                        <li>Performed capital budgeting and expenditure planning.</li>
                        <li>Provided analytical, forecasting, reporting and project support to senior management.</li>
                        <li>Conducted Comparable Company Analysis.</li>
                        <li>Assisted senior management make tactical and strategic decisions by providing periodic reports, which include financial key metrics and variance reporting.</li>
                        <li>Explored and suggested different investment opportunities.</li>
                        </ul>
                      </Col>
                      
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                <Col className="ml-auto mr-auto" md="10">
                <h3 className="ml-auto mr-auto">Projects</h3>
                <Row className="collections">
                      <Col md="6">
                      {ProjectDataCol1.map(project => 
                        (
                          <ProjectCard title={project.title} description={project.description} image={project.image} link={project.link} className= "img-raised" ></ProjectCard>
                        )
                        )}
                      
                        
                      </Col>
                      <Col md="6">
                      {ProjectDataCol2.map(project => 
                        (
                          <ProjectCard title={project.title} description={project.description} image={project.image} image2={project.image2} link={project.link} className= "img-raised" alt={project.alt}></ProjectCard>
                        )
                        )}

                      </Col>
                    </Row>
                </Col>
                </TabPane>
                <TabPane tabId="pills4">
                <Col className="ml-auto mr-auto" md="10">
                <h3 className="ml-auto mr-auto">Certificates</h3>
                  <Row className="collections">
                    <Col md="6">
                    {CertificateDataCol1.map(certificate => 
                    (
                      <CertificateCard imgSrc={certificate.imgSrc} className= "img-raised"></CertificateCard>
                    )
                    )}
                    </Col>
                    <Col md="6">
                    {CertificateDataCol2.map(certificate => 
                      (
                        <CertificateCard imgSrc={certificate.imgSrc} className= "img-raised"></CertificateCard>
                      )
                      )}
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/y5DWDTh/SME.png"
                      ></img>
                      
                      
                    </Col>
                  </Row>
                </Col>
                </TabPane>
                <TabPane tabId="pills5">
                <Col className="ml-auto mr-auto" md="10">
                <h3 className="ml-auto mr-auto">Books or Audiobooks</h3>
                  <Row className="collections">
                  {BookData.map(book => <BookCard src={book.src} description={book.description}></BookCard>)}
                    

                  </Row>
                </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;

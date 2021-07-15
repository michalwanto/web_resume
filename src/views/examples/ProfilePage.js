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
  const [pills, setPills] = React.useState("1");
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
                Follow me on LinkedIn
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
                          src="https://primarylibrary.sgiaedu.org/template/default/assets/images/Logo.png"
                          style={{aligntItems:"centre", width:"200px",maxHeight:"400px", marginLeft: "70px"}}
                        ></img>
                      </Col>
                      <Col  md="6">
                        <h4 style={{marginBottom:"2px"}}>SEKOLAH GLOBAL INDO-ASIA </h4>
                        <h5 style={{marginBottom:"2px",color:"grey"}}>High School</h5>
                        <p>2010-2016</p>
                        <span>O-Level and A-Level courses. Coursework included Mathematics, Business Studies, Economics, Global Perspective, Bahasa Indonesia, English. Average Transcript of 85.</span>
                      </Col>
                    </Row>
                    <Row className="collections">
                    <Col md="5">
                    
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/SPJAIN.png")}
                          style={{aligntItems:"centre", width:"200px",maxHeight:"400px", marginLeft: "70px"}}
                        ></img>
                      </Col>
                      <Col md="6">
                        <h4 style={{marginBottom:"2px"}}>SP JAIN SCHOOL OF GLOBAL MANAGEMENT</h4>
                        <h5 style={{marginBottom:"2px",color:"grey"}}>University</h5>
                        <h5 style={{marginBottom:"2px",color:"grey", fontSize:"14px"}}>Top 20 in The World : FORBES INTERNATIONAL B-SCHOOLS (2013-15)</h5>
                        <p style={{fontSize:"14px"}}>2017 - Present</p>
                        <span>Bachelor of Business Administration (Deans List) - Three cities program; one year in Singapore, one year in Dubai, and two years in Sydney. Coursework included Cost Accounting, Digital Marketing, Employability and Practitioner Skill, Financial Market and Institution, Financial Statement Analysis, Foundations of Entrepreneurship, Human Resource Management, Business Law, Decision Making, Project Management, Australia Business Environment, Branding and Communication, Strategic Management, Business Disruptive Technology, Business English Writing, Business Oral Communication, Computer Skills, Corporate Finance, Critical Thinking, Decision Science, Emotional Intelligence, Financial Accounting, Leadership, Macroeconomics, Marketing, Mathematics, Operations Management, Organisational Behaviour, Principles of Management, Regional Immersion Project, Research Methodology, Statistics, Sustainability & Corporate Social Responsibility, World Cultures. Average GPA of 4.0
                        </span>
                      </Col>
                      
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
                          src={require("assets/img/IFASHIONGROUP.png")}
                          style={{aligntItems:"centre", width:"200px",maxHeight:"400px", marginLeft: "70px"}}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src="https://i.ibb.co/8XSHc8Z/with-Leon.jpg"
                          style={{aligntItems:"centre", width:"200px",maxHeight:"400px", marginLeft: "70px",marginBottom:"5px"}}
                        ></img>
                        <p style={{fontSize:"12px",marginLeft: "70px"}}>15 Shaw Road, Singapore</p>
                      </Col>
                      <Col style={{marginBottom:"50px"}} md="6">
                        <h4 style={{marginBottom:"2px"}}>IFASHION GROUP </h4>
                        <h5 style={{marginBottom:"2px",color:"grey"}}>Finance Intern</h5>
                        <p style={{marginBottom:"2px",fontSize:"13px"}}>Sep 2017 - Aug 2018</p>
                        <p style={{fontSize:"12px"}}>Singapore</p>
                        <span>Worked closely with CFO in managing and analyzing the newest and past financial data. Interrogated the company's financial performance and identifying trends. Ensure accurate financial reporting through bank reconciliation, account receivables & payables reconciliation(through Xero accounting platform), ad-hoc entries, and finalizing the exported data in Excel using macros, pivot tables, V-lookup, conditional formatting, etc. 
                        </span>
                        <br></br>
                        <br></br>
                        <span >Worked closely with the finance team, forming FP&A, consulted with the management team to develop long-term commercial plan, evaluated financial performance by comparing and analyzing actual results with plans and forecasts, aided in the capital budgeting and expenditure planning processes. Suggested budgets and improvements based on insights acquired. Explored different investment opportunities. Performed market research, data mining, and valuation comps. Developed financial models and financial forecast. Developed initiatives and policies that may improve financial growth. Guided the cost analysis process by establishing and enforcing new policies and procedures. Conducted Comparable Company Analysis. Prepared reports which include key metrics, financial result , variance analysis.  Presented insights to the senior management of the company and its subsidiaries companies that are operating across Southeast Asian countries (Indonesia, Vietnam, Thailand, Malaysia, Laos, and Singapore). 
 
                        </span>
                        <br></br>
                        <br></br>
                        <span >Managed $10M+ worth of Financial and Inventories Data of company’s subsidiary companies, Dressabelle(Women Fashion), Invade(Office Space Provider), Red Republics(Event Organiser), and Megafash(Retail). Gathered missing data, cleansed and analyzed data. Designed models, charts, diagrams, dashboards(using Excel & Power BI), and presenting key metrics and recommendations to the CFO.
                        </span>
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
                      <h5 style={{marginBottom:"2px",color:"grey"}}>Business and Data Analyst Intern</h5>
                      <p style={{marginBottom:"2px",fontSize:"13px"}}>Oct 2018 - Sep 2019</p>
                      <p style={{fontSize:"12px"}}>Dubai, UAE</p>
                      <span>Worked closely with the CEO, conducted a firm's Target Operating Model(TOM)for its underground airport project, and prepared top management presentations for its clients, Dnata, Emirates Group, and Dubai Airport.
                      </span>
                      <br/><br/>
                      <span>
                      I have worked with data analysts, engineers, and project teams in managing $20M+ worth of the vast amount of telematics data. Gathered requirements from clients. Applied data modelling techniques and designed workflow into a process map (using Visio).  Investigated the data by assigning formulas, sorting, filtering, formatting, and transmuted them into charts, diagrams, and dashboards such as assets utilization matrix, fuel consumption matrix, vehicles idling time, ROI, etc. Follow by UAT(user acceptance testing) for the company's clients, Dnata and Emirates Group. 

                      </span>
                      <br/><br/>
                      <span>
                      Team up with senior engineers in scheduling project operational tasks by managing and assigning competing resources and priorities for a range of tasks to meet targeted dates and cost-efficiency benchmarks. Prepared controls and improved procedures, formulated charts, utilized management tools like Gantt chart to monitor deliverables and ensured timely completion of projects (meeting milestones), and performed weekly and monthly reviews of current processes. I have also conducted an insightful ad hoc analyses to investigate ongoing or one-time operational issues and inform project progress across stakeholders.
                      </span>
                      <br/><br/>
                      <span>
                      Worked together with the project manager to determine business objectives. Evaluated business processes. Performed requirements analysis. Designed workflow charts and diagrams of product integration and product introduction (Visio)processes. Conducted related research to support strategic and business planning within the various departments and programs of the client group. Discovering areas for improvement. Developed project plans, lead ongoing reviews of business processes and developed optimization strategies, ensuring solutions meet business needs and requirements. Present insights and plans to cross-functional team members, management and other stakeholders for the company's Dubai Airport Underground Project.
                      </span>
                      <br/><br/>
                      <span>
                      I have also conducted primary and secondary market research on the feasibility and viability of electric bikes in Dubai as a delivery mode of transportation in the F&B sector. Interpreted, evaluated and interrelated research data and developed integrated business analyses and projections for possibilities of incorporation into strategic decision-making; these include coming up with entry strategy, competitive market analysis, tactics, functional strategies, business strategies, and corporate strategies suggestions to the internal stakeholders.
                      </span>
                      <br/><br/>
                      <span>
                      Redesigned the company's profile deck, website UI/UX, and brochures. Arranged Excel and PowerPoint trainings for the junior team. Involved in hiring, preparing tests, and selecting new potential candidates alongside the HR manager and the CEO.</span>
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

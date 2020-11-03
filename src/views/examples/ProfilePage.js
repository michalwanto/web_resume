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
              <Button className="btn-round" color="info" size="lg"  href="https://www.linkedin.com/in/michalwanto/" >
                Connect
              </Button>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
                href="https://www.instagram.com/michalwnt/"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Follow me on Instagram
              </UncontrolledTooltip>
            </div>
            <h3 className="title">About me</h3>
            <h5 className="description">
            A Business, Finance, and Tech enthusiast. Love reading books and listening to audiobooks. Passionate about planning, analyzing,  strategizing and solve complex problems. 
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">My Portfolio</h4>
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
                      <i class="fas fa-book"></i>
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
                        <span>Bachelor of Business Administration (DEANS LIST) - Three cities program; one year in Singapore, one year in Dubai, and two years in Sydney. Coursework included Cost Accounting, Digital Marketing, Employability and Practitioner Skill, Financial Market and Institution, Financial Statement Analysis, Foundations of Entrepreneurship, Human Resource Management, Business Law, Decision Making, Project Management, Australia Business Environment, Branding and Communication, Strategic Management, Business Disruptive Technology, Business English Writing, Business Oral Communication, Computer Skills, Corporate Finance, Critical Thinking, Decision Science, Emotional Intelligence, Financial Accounting, Leadership, Macroeconomics, Marketing, Mathematics, Operations Management, Organisational Behaviour, Principles of Management, Regional Immersion Project, Research Methodology, Statistics, Sustainability & Corporate Social Responsibility, World Cultures. Average GPA of 4.0
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
                      </Col>
                      <Col style={{marginBottom:"50px"}} md="6">
                        <h4 style={{marginBottom:"2px"}}>IFASHION GROUP </h4>
                        <h5 style={{marginBottom:"2px",color:"grey"}}>Finance Intern</h5>
                        <p style={{marginBottom:"2px",fontSize:"13px"}}>May 2018 - Aug 2018</p>
                        <p style={{fontSize:"12px"}}>Singapore</p>
                        <span>Worked closely with CFO in managing financial data, ad-hoc entries, bank reconciliation, account receivables & payables reconciliation, and invoicing(through Xero accounting platform), this includes recording and data entry in Xero, analyzing exported data in excel using macros, pivot tables, V-lookup, conditional formatting, etc. Involved in preparing the company’s FP&A, credit risk management & modeling, margin analysis , fixing HR handbook in term of policies, regulations, and procedures for the company’s subsidiaries that operate across Southeast Asian countries from Indonesia, Vietnam, Thailand, Malaysia, Laos, to Singapore and present it to the internal stakeholders suggesting ways in improving its subsidiaries daily operations, protocols, documentation, financial control & management and HR coordination.</span>
                        <br></br>
                        <br></br>
                        <span >Managed $1M+ worth of Inventories Data of its four subsidiary companies (Dressabelle, Invade, Red Republics, and Megafash). Gathering missing data, cleansing of data, analyzing data, designing and formulating charts, diagrams, dashboards, and provide key metrics and recommendations to the CFO.</span>
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
                      </Col>
                      <Col md="6">
                      <h4 style={{marginBottom:"2px"}}>GOFLEET INTERNATIONAL</h4>
                      <h5 style={{marginBottom:"2px",color:"grey"}}>Management Trainee</h5>
                      <p style={{marginBottom:"2px",fontSize:"13px"}}>May 2019 - Aug 2019</p>
                      <p style={{fontSize:"12px"}}>Dubai, UAE</p>
                      <span>Worked closely with the CEO, conducted a firm’s Target Operating Model(TOM)for its underground airport project, and prepared top management presentations for its clients, Dnata, Emirates Group, and Dubai Airport.</span>
                      <br/><br/>
                      <span>
                      Collaborated with data analysts, engineers, and project teams in managing $20M+ worth of the vast amount of telematics data. Gathered and analyzed data & functionalities requirements from clients, applied data modeling techniques and designed workflow into a process map, investigated the data by assigning formulas, sorting, filtering, formatting, and transmuted them into charts, diagrams, and dashboards such as assets utilization matrix, fuel consumption matrix, vehicles idling time, ROI, etc. Followed by UAT(user acceptance testing) for big company’s clients, Dnata and Emirates Group.
                      </span>
                      <br/><br/>
                      <span>
                      Team up with senior engineers in scheduling project operational tasks by mapping and assigning resources for a range of tasks in meeting target dates. Formulated charts, Power BI and utilize management tools like Gantt chart to keep track and inform the project progress among stakeholders.
                      </span>
                      <br/><br/>
                      <span>
                      Worked together with project manager in mapping and designing workflow of product integration and product introduction to stakeholders for Dubai Airport Underground Project.
                      </span>
                      <br/><br/>
                      <span>
                      Conducted $300,000 worth of primary and secondary market research on the feasibility and viability of electric bikes in Dubai as a mode of delivery in the F&B sector. Coming up with entry strategy, competitive market analysis, and the possibility of the firm's diversification of its strategic breadth to the internal stakeholders.
                      </span>
                      <br/><br/>
                      <span>
                      Redesigning the company’s profile deck, website UI/UX, and brochures. Arranging Excel and PowerPoint training for the junior team. Involved in hiring, preparing tests, and selecting new potential candidates along with the HR manager and the CEO.</span>
                      </Col>
                      
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                  <h3 className="ml-auto mr-auto">Side Projects</h3>
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills4">
                  <Col className="ml-auto mr-auto" md="10">
                  <h3 className="ml-auto mr-auto">Certificates</h3>
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg11.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                      </Col>
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

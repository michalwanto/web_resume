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
                Follow me on LinkedIn
              </UncontrolledTooltip>
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
            A Business, Finance, and Tech enthusiast. Love reading books and listening to audiobooks. Passionate about planning, analyzing,  strategizing and solve complex problems. 
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
                    <NavItem>
                      <NavLink
                        className={pills === "5" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("5");
                        }}
                      >
                      <i class="fas fa-book"></i>
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
                        <p style={{marginBottom:"2px",fontSize:"13px"}}>May 2018 - Sep 2018</p>
                        <p style={{fontSize:"12px"}}>Singapore</p>
                        <span>Worked closely with CFO in managing and analyzing newest and past financial data, looking at financial performance and identifying trends, ensure accurate financial reporting through bank reconciliation, account receivables & payables reconciliation(through Xero accounting platform), ad-hoc entries, and finalizing the exported data in Excel using macros, pivot tables, V-lookup, conditional formatting, etc..</span>
                        <br></br>
                        <br></br>
                        <span >Worked closely with the finance team, forming FP&A, consulting with the management team to develop long-term commercial plan, evaluate financial performance by comparing and analyzing actual results with plans and forecasts, aid in the capital budgeting and expenditure planning processes, suggesting budgets and improvements based on insights gathered, exploring different investment opportunities, perform market research, data mining, business intelligence, and valuation comps, developing financial models and providing financial forecast, developing initiatives and policies that may improve financial growth, guide the cost analysis process by establishing and enforcing policies and procedures, conduct comparable company analysis to support internal financial analysis, preparing report which include key metrics, financial result , variance analysis and communicating insights to the senior management of the company and its subsidiaries companies that are operating across Southeast Asian countries (Indonesia, Vietnam, Thailand, Malaysia, Laos, and Singapore). 
                        </span>
                        <br></br>
                        <br></br>
                        <span >Managed $10M+ worth of Financial and Inventories Data of its four subsidiary companies, Dressabelle(Women Fashion), Invade(Office Space Provider), Red Republics(Event Organiser), and Megafash(Retail). Gathering missing data, cleansing of data, analyzing data, designing models and formulating charts, diagrams, dashboards(using Excel & Power BI), and present key metrics and recommendations to the CFO.
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
                      <h5 style={{marginBottom:"2px",color:"grey"}}>Management Trainee</h5>
                      <p style={{marginBottom:"2px",fontSize:"13px"}}>May 2019 - Sep 2019</p>
                      <p style={{fontSize:"12px"}}>Dubai, UAE</p>
                      <span>Worked closely with the CEO, conducted a firm’s Target Operating Model(TOM)for its underground airport project, and prepared top management presentations for its clients, Dnata, Emirates Group, and Dubai Airport.
                      </span>
                      <br/><br/>
                      <span>
                      Collaborated with data analysts, engineers, and project teams in managing $20M+ worth of the vast amount of telematics data. Gathered and analyzed data & functionalities requirements from clients, applied data modeling techniques and designed workflow into a process map (using Visio), investigated the data by assigning formulas, sorting, filtering, formatting, and transmuted them into charts, diagrams, and dashboards such as assets utilization matrix, fuel consumption matrix, vehicles idling time, ROI, etc. Followed by UAT(user acceptance testing) for the company’s clients, Dnata and Emirates Group. 
                      </span>
                      <br/><br/>
                      <span>
                      Team up with senior engineers in scheduling project operational tasks by managing and assigning competing resources and priorities for a range of tasks to meet targeted dates and cost efficiency benchmark. Prepared controls and improved procedures, formulated charts ( Power BI), utilize management tools like Gantt chart to monitor deliverables and ensure timely completion of projects (meeting milestones), perform weekly and monthly reviews and analyses of current processes using operational metrics and reports. Conducted insightful, ad hoc analyses to investigate ongoing or one-time operational issues, and inform project progress across stakeholders.
                      </span>
                      <br/><br/>
                      <span>
                      Worked together with project manager in determining business objectives, evaluating business processes, performing requirements analysis, mapping and designing workflow chart and diagrams of product integration and product introduction (Visio), conduct and coordinate financial, product, market, operational, and related research to support strategic and business planning within the various departments and programs of the client group, uncovering areas for improvement, developing project plans, leading ongoing reviews of business processes and developing optimization strategies, ensuring solutions meet business needs and requirements, communicating insights and plans to cross-functional team members, management and other stakeholders for the company’s Dubai Airport Underground Project.
                      </span>
                      <br/><br/>
                      <span>
                      Conducted primary and secondary market research on the feasibility and viability of electric bikes in Dubai as a mode of delivery in the F&B sector. Interpret, evaluate and interrelate research data and develop integrated business analyses and projections for incorporation into strategic decision-making, these include coming up with entry strategy, competitive market analysis, tactics, functional strategies, business strategies, and corporate strategies and present findings to the internal stakeholders.
                      </span>
                      <br/><br/>
                      <span>
                      Redesigning the company’s profile deck, website UI/UX, and brochures. Arranging Excel and PowerPoint training for the junior team. Involved in hiring, preparing tests, and selecting new potential candidates alongside the HR manager and the CEO.</span>
                      </Col>
                      
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                <Col className="ml-auto mr-auto" md="10">
                <h3 className="ml-auto mr-auto">Projects</h3>
                <Row className="collections">
                      <Col md="6">
                      <div style={{marginBottom:"20px"}}>
                      <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://i.ibb.co/WtZPZgM/PowerBI.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        </Tilt>
                        <span>Power BI dashboard that shows high-level picture of budget, sales, and variance across different correlations</span>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src="https://i.ibb.co/xSGhWdj/Modelling-DAX.png"
                          
                        ></img>
                        </Tilt>
                        <span>Data Modelling using Data Analysis Expressions(DAX) from Power BI - connecting different sources of data  - </span>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                       <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://i.ibb.co/s9GMsk0/Prediction-Model-of-Housing-Price.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        </Tilt>
                        <span>Predictive Model of Housing Price by finding association and correlations of MEDV - median value of owner-occupied homes and RM - Number of Rooms using sample of properties data in BOSTON (Using Python - Libraries: Pandas,  statsmodels.formula.api and matplot) </span>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://i.ibb.co/yYyK3B6/Markowitz-Portfolio-Optimization.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        </Tilt>
                        <span>Markowitz-Portfolio-Optimization, using Excel Data Solver to find the best portfolio combination of two stocks to achieve highest Sharpe Ratio</span>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://i.ibb.co/HxhQWpx/Percentage-of-Information-Gained.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        </Tilt>
                        <span>Enthropy Calculation (Credit Default Model) - Calculate how much uncertainty has reduced ( percentage of information gained) from using the model, and how much does this new information valued in term of $</span>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://i.ibb.co/3NqBykj/Linear-Regression-Predictive-Profitability-Model.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        </Tilt>
                        <span>Multivariate linear regression model - forecast profits and losses as continuous value by taking six input variables. Roughly estimate how much new potential customer will be worth in term of $$, for the bank to decide wether to accept or reject the new applicant. (by taking the customer Z-score * Standard Deviation + Mean of customers profitability)</span>
                        </div>
                        
                      </Col>
                      <Col md="6">
                      <div style={{marginBottom:"20px"}}>
                      <a href="https://smart-brain-front-end1.herokuapp.com/">
                      <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src="https://i.ibb.co/1r79nK2/Computer-Vision.png"
                          style={{marginBottom:"5px"}}
                        ></img>
                        </Tilt>
                        </a>
                        <span>Web App that uses Clarifai Computer Vision API, it detects faces in any picture uploaded (using React, NodeJs, postgreSQL)</span>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                        <a href="https://michalwanto.github.io/robofriends/">
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src="https://i.ibb.co/w4cpcj2/Robofriends.png"
                        ></img>
                        </Tilt>
                        </a>
                        <span> Basic web application the uses React, React Redux, Hooks, bootstrap card component, etc. </span>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src="https://i.ibb.co/KmC1rbZ/Python-Statistics-Financial-Model-Correlations.png"
                        ></img>
                        </Tilt>
                        <span> Generate Scatter Matrix of all stock markets and observe association</span>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://i.ibb.co/bzQd1F6/Credit-Default-Model-Linest-Function.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        </Tilt>
                        <span>Credit Default Model, using Linest Excel Function by taking several input variables like age, years at employer,	Income, Credit Card Debt, and Automobile Debt to predict the strongest determining factor that someone will default </span>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://i.ibb.co/jZ1PBqs/Credit-Default-Model-2-Data.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://i.ibb.co/qnvrqmH/Credit-Default-Model-1.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        </Tilt>
                        <span>Credit Default Model - taking historical related data of bank's credit defaulted customers. Using Binary Classification and AUC chart created predictive model that can predict the likelihood of someone defaulting in the future based on several variables like the amount of automobile debt, years at employer and age. Determined how much the bank could save from using the model and its ROI if the investment is made to gather the data.</span>
                        </div>
                        
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
                    src="https://i.ibb.co/DgtbnC1/Python-and-Statistics-for-Financial-Analysis.png"
                  ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/449zZ3q/Business-Strategy.png"
                      ></img>
                      <img
                      alt="..."
                      className="img-raised"
                      src="https://i.ibb.co/qjh2q47/Exploring-Data-for-Business-Decision.png"
                    ></img>
                    <img
                      alt="..."
                      className="img-raised"
                      src="https://i.ibb.co/FBVvtG1/Business-Metrics-For-Data-Driven-Business.png"
                    ></img>
                    
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/yyTKMTw/Web-Development-Bootcamp.png"
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/pKtPXdj/Three-Js-Web-Development.png"
                      ></img>
                      
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/vmvJYJQ/UI-UX.png"
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/bmkGLgp/R-Programming.png"
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/hMyDmGD/WASME.png"
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/JCCxrZr/RIP.png"
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/NtVHsz6/RIP2.png"
                      ></img>
                    </Col>
                    <Col md="6">
                    <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/syR73jy/AI-IBM.png"
                      ></img>
                    <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/Nng4WVz/Data-Analysis-and-Visualization.png"
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/2ZB84hQ/Future-Thinking.png"
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/nrYnqYh/Complete-React-Development.png"
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/t8kTNQg/Adobe-Photoshop-CC.png"
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/Z2YFG1m/Twinmotion-3-D.png"
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/8cHzfBQ/Figma-UI-UX.png"
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/MpsqgHg/Tableau.png"
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/rQk645z/Complete-junior-to-senior-developer-2020.png"
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/0sJMqGP/Pitch.png"
                      ></img>
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

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
                        <span>Bachelor of Business Administration (Dean's Lister) - Three cities program; one year in Singapore, one year in Dubai, and two years in Sydney. Coursework included Cost Accounting, Digital Marketing, Employability and Practitioner Skill, Financial Market and Institution, Financial Statement Analysis, Foundations of Entrepreneurship, Human Resource Management, Business Law, Decision Making, Project Management, Australia Business Environment, Branding and Communication, Strategic Management, Business Disruptive Technology, Business English Writing, Business Oral Communication, Computer Skills, Corporate Finance, Critical Thinking, Decision Science, Emotional Intelligence, Financial Accounting, Leadership, Macroeconomics, Marketing, Mathematics, Operations Management, Organisational Behaviour, Principles of Management, Regional Immersion Project, Research Methodology, Statistics, Sustainability & Corporate Social Responsibility, World Cultures. Average GPA of 4.0
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
                      <h5 style={{marginBottom:"2px",color:"grey"}}>Management Trainee</h5>
                      <p style={{marginBottom:"2px",fontSize:"13px"}}>May 2019 - Sep 2019</p>
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
                      <div style={{marginBottom:"20px"}}>
                      <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://i.ibb.co/WtZPZgM/PowerBI.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        </Tilt>
                        <span> Power BI dashboard that shows a high-level picture of Budgets, Sales, Top Products, Variance by Categories, etc.</span>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src="https://i.ibb.co/xSGhWdj/Modelling-DAX.png"
                          
                        ></img>
                        </Tilt>
                        <span> Data Modelling - Data Analysis Expressions(DAX) from Power BI - connect multiple sources of data. </span>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://content.screencast.com/users/Michalwnt/folders/Default/media/bf405d28-6d98-4944-bef3-f386170401ef/ERD%20Screenshot.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        </Tilt>
                        <span>Database Design - Entity Relationship Diagram using ERDplus.com </span>
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
                        <span>Predictive Model of Housing Price by finding association and correlations of MEDV - median value of owner-occupied homes and RM - Number of Rooms, using a sample of properties data in BOSTON (Using Python - Libraries: Pandas,  statsmodels.formula.api and Matplot) </span>
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
                        <span>Markowitz-Portfolio-Optimization used Excel Data Solver to find the best portfolio combination of two stocks to achieve the highest Sharpe Ratio.</span>
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
                        <span>Entropy Calculation (Credit Default Model) - Calculate how much uncertainty has reduced ( percentage of information gained) from using the model, and how much does this new information valued in term of $</span>
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
                        <span>Multivariate linear regression model - forecast profits and losses as continuous value by taking six input variables. Roughly estimate how much new potential customer will be worth in terms of $$, for the bank to decide whether to accept or reject a new applicant. (by taking the customer Z-score * Standard Deviation + Mean of customers profitability)</span>
                        </div>
                        
                        <div style={{marginBottom:"20px"}}>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://content.screencast.com/users/Michalwnt/folders/Default/media/06e79854-00ed-4d1b-b080-16f87119fbe8/Firebase%20Screenshot.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        </Tilt>
                        <span>Database Tool - basic users login database using Cloud Firestore</span>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://content.screencast.com/users/Michalwnt/folders/Default/media/9bd720a5-fa0f-4cc4-b063-88dd0489b356/IBM%20Watson%20Assistant%20Chat%20Bot.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        </Tilt>
                        <span>Created a Chatbot using IBM Watson Assistant</span>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://content.screencast.com/users/Michalwnt/folders/Default/media/4d3e1eee-7b65-404b-9058-451dc2bc2e28/IBM%20Chatbot.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        </Tilt>
                        <span>Chatbot Preview - <a href="https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=us-south&integrationID=f8ca556b-c8f8-4715-a74f-1be5b4b2d8f4&serviceInstanceID=4d2801be-a925-4bd7-8cc6-5caa33cecb34">Link</a></span>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://content.screencast.com/users/Michalwnt/folders/Default/media/658cba11-c98f-49fd-afce-2d768ac65276/IBM%20Watson%20Discovery%20SC.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        </Tilt>
                        <span>IBM Watson Discovery - exporing keywords and concepts in database</span>
                        </div>
                        
                        
                        
                        
                        
                      </Col>
                      <Col md="6">
                      <div style={{marginBottom:"20px"}}>
                      <Tilt className="Tilt" options={{ max : 25 }}  >
                      <img
                        alt="..."
                        className="img-raised"
                        src= "https://i.ibb.co/gmX9L0j/Tableau-Public-Screenshot.png"
                        style={{marginBottom:"10px"}}
                      ></img>
                      </Tilt>
                      <span>Personal Tableau Public - <a href="https://public.tableau.com/profile/michal4897#!/">https://public.tableau.com/profile/michal4897#!/</a>  </span>
                      </div>
                      <div style={{marginBottom:"20px"}}>
                      <Tilt className="Tilt" options={{ max : 25 }}  >
                      <img
                        alt="..."
                        className="img-raised"
                        src= "https://content.screencast.com/users/Michalwnt/folders/Default/media/14a66e44-43f7-4df7-934b-356eee5cbdc7/Teradata%20Screenshot.png"
                        style={{marginBottom:"10px"}}
                      ></img>
                      </Tilt>
                      <span>SQL Queries using Teradata</span>
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
                        <span>Credit Default Model, using Linest Excel Function by taking several input variables like age, years at an employer,  Income, Credit Card Debt, and Automobile Debt to predict the strongest determining factor that someone will default </span>
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
                        <span>Credit Default Model - taking historical data of bank's credit defaulted customers. Using Binary Classification and AUC chart created a predictive model that can predict the likelihood of someone defaulting in the future based on several variables like the amount of automobile debt, years at employer, and age. Determine how much money a bank could save from using the model and its ROI. </span>
                        </div>
                        
                        <div style={{marginBottom:"20px"}}>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://content.screencast.com/users/Michalwnt/folders/Default/media/5528a8c6-b223-4428-bb7e-7baebade9626/SQL%20-%20Queries%20SC2.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        </Tilt>
                        <span>SQL Queries 2</span>
                        </div>

                        <div style={{marginBottom:"20px"}}>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                        <img
                          alt="..."
                          className="img-raised"
                          src= "https://content.screencast.com/users/Michalwnt/folders/Default/media/c04fa3e4-9e80-475e-99aa-13201bc12d9f/Momentum%20Tilt%20Portfolio.png"
                          style={{marginBottom:"10px"}}
                        ></img>
                        </Tilt>
                        <span>Momentum Tilt Portfolio of Stocks in Restaurant Industry</span>
                        </div>

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
                        <span>Web App that uses Clarifai Computer Vision API, it detects faces in any picture uploaded (using React, NodeJs, PostgreSQL) <a href="https://smart-brain-front-end1.herokuapp.com/">https://smart-brain-front-end1.herokuapp.com/</a></span>
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
                        <span> Basic web application the uses React, React Redux, Hooks, bootstrap card component, etc. <a href="https://michalwanto.github.io/robofriends/">https://michalwanto.github.io/robofriends/</a> </span>
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
                      src="https://content.screencast.com/users/Michalwnt/folders/Default/media/2c5e63e9-e77c-4d5f-ba44-87cd463aa82f/Blockchain%20and%20Cryptocurrency%20Explained.png"
                    ></img>
                    <img
                      alt="..."
                      className="img-raised"
                      src="https://content.screencast.com/users/Michalwnt/folders/Default/media/cd2f9472-f629-4c95-bdf4-e62d77ee2fed/The%20Future%20of%20Payment%20Technologies%20from%20Michigan%20Uni.png"
                    ></img>
                    
                    <img
                      alt="..."
                      className="img-raised"
                      src="https://i.ibb.co/6PJQQKH/Data-Visualization-and-Communication-with-Tableau.png"
                    ></img>
                    <img
                      alt="..."
                      className="img-raised"
                      src="https://i.ibb.co/FBVvtG1/Business-Metrics-For-Data-Driven-Business.png"
                    ></img>
                    <img
                      alt="Getting Started With AI"
                      className="img-raised"
                      src="https://content.screencast.com/users/Michalwnt/folders/Default/media/281fee8a-676e-4bcf-bbf0-fb6abe976ae7/Getting%20Started%20with%20AI%20with%20IBM.png"
                    ></img>
                    <img
                      alt="Building AI-powered Chatbot wihtout programming"
                      className="img-raised"
                      src="https://content.screencast.com/users/Michalwnt/folders/Default/media/a52d0872-36e8-47cd-a201-a1f323f4ab28/Building%20AI%20powered%20chatbots%20without%20programming.png"
                    ></img>
                    <img
                      alt="Building AI application with Watson API"
                      className="img-raised"
                      src="https://content.screencast.com/users/Michalwnt/folders/Default/media/ecb4ca16-2b3e-42b4-abc6-89565b2c2c1e/BUilding%20AI%20applications%20with%20IBM%20Watson.png"
                    ></img>
                    
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
                    src="https://content.screencast.com/users/Michalwnt/folders/Default/media/cd2f9472-f629-4c95-bdf4-e62d77ee2fed/The%20Future%20of%20Payment%20Technologies%20from%20Michigan%20Uni.png"
                  ></img>
                  <img
                    alt="raising capital univeristy of michigan"
                    className="img-raised"
                    src="https://content.screencast.com/users/Michalwnt/folders/Default/media/da309386-b8b3-4aa4-a597-03b2356fe80b/Raising%20Capital-credit%20tech-coin%20offering-crowdfunding.png"
                  ></img>
                  
                    
                    <img
                        alt="..."
                        className="img-raised"
                        src="https://content.screencast.com/users/Michalwnt/folders/Default/media/5a8a9524-5195-404c-844e-4f4891cfb43a/Managing%20Big%20Data%20with%20MySQL.png"
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/LhNHjTh/Mastering-Data-Analysis-in-Excel.png"
                      ></img>
                    <img
                        alt="..."
                        className="img-raised"
                        src="https://i.ibb.co/syR73jy/AI-IBM.png"
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        title="Python for data science and AI"
                        src="https://content.screencast.com/users/Michalwnt/folders/Default/media/1a14984a-12f1-4052-a2fa-2251da53b0d2/Python%20for%20Data%20Science%20and%20AI.png"
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
                      src="https://i.ibb.co/qjh2q47/Exploring-Data-for-Business-Decision.png"
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

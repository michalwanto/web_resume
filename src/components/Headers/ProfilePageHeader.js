import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src="https://i.ibb.co/pL6P4t4/Visa-pict.jpg"></img>
          </div>
          <h3 className="title">Michal Wanto</h3>
          <p className="category">Financial, Bussiness and Data Analyst</p>
          <div className="content">
           
            <div className="social-description">
            
            <h2>5+</h2>
              <p>Companies Financial Data managed</p>
            </div>
            <div className="social-description">
              <h2>$20M+</h2>
              <p>Worth of Telematics Data handled</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;

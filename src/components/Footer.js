import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <p>
          Created by Hemant Soni. Powered by{" "}
          <img
            style={{ height: 50 }}
            src={require("../assets/img/moviedblogo.svg")}
            alt="moviedblogo"
          />
        </p>
      </div>
    );
  }
}

export default Footer;
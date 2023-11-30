import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Pedro</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
        <p>
          I am a dedicated cloud computing professional with a Post Graduate Certificate
          in Cloud Computing and AWS Certified Developer Associate Certification.
          Skilled in architecting scalable cloud solutions, I am passionate about leveraging
          cloud technologies to drive innovation. Eager to contribute my expertise to
          transformative projects in the cloud computing realm.
        </p>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          {/* Existing skills list remains unchanged */}
        </ol>
      </div>
    </div>
  );
}

export default Home;

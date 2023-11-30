import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h3> Hey there!I'm Shreyas.!</h3>
        <div className="prompt">
          <p>In the Realm of Code: Shreyas, the Architect of Innovation</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
        <p>
          I am a dedicated cloud computing professional with a Post Graduate Certificate
          in Cloud Computing and an AWS Certified Developer Associate Certification.
          Skilled in Python development and architecting scalable cloud solutions, I am passionate about leveraging
          cloud technologies to drive innovation. Eager to contribute my expertise to
          transformative projects in the cloud computing realm.
        </p>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, MySQL, MongoDB, DynamoDB, RDS, AWS S3, Postgres
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python</span>
          </li>
          <li className="item">
            <h2>Cloud Technologies</h2>
            <span>Amazon Web Services, Microsoft Azure, Google Cloud Platform, DevOps, Serverless Automation, Docker, CI/CD, EC2, EKS, Kubernetes, Terraform</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

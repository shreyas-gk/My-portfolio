import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hey there!I'm Shreyas. Welcome to my Portfolio!</h2>
        <div className="prompt">
          <p>Embarking on the Code Odyssey: Pedro, Crafting Digital Dreams with a Heart for Innovation.</p>
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
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

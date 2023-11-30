import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            VVS Sardar Patel High School, Bangalore, Karnataka
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            JSS Academy of Technical Education(VTU), Bangalore, India
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Student Intern - Inube Software Solutions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangalore, India
          </h4>
          <p>Crafted backend solutions for a project during a two-month internship, focusing on React frontend development.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 202 - July 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Student Intern - Exposys Data Labs
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangalore, India
          </h4>
          <p>
          Aspiring Python Developer with AI and ML skills, honed during a dynamic internship at Exposys Data Labs, specializing in regression, data modeling, and statistical analysis.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dec 2021 - Jan 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Client Serving Contractor for EY - Xpheno Data Labs Pvt. Ltd.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangalore, India
          </h4>
          <p>
          Automated diverse processes using Python, encompassing front-end development, Excel, SAP, and digital data extraction for efficient and streamlined operations.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2021 - May 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Analyst - Ernst & Young LLP
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangalore, India
          </h4>
          <p>
          Developed serverless Python applications, orchestrating front-end automation across browsers, SAP, Salesforce, Excel, and digital PDFs. Executed DevOps tasks and seamlessly integrated cloud-based solutions on AWS for enhanced efficiency.
          </p>
        </VerticalTimelineElement>       
      </VerticalTimeline>
    </div>
  );
}

export default Experience;

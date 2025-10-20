import React from "react";
import "./Experience.css";

const timeline = [
  {
    role: "Associate Analyst",
    company: "Wipro Ltd. (Client: Alight Solutions)",
    period: "Aug 2024 – Present",
    desc: "Contributing to the SmartBen health and welfare benefits platform. Developed front-end components with HTML, CSS, JavaScript, and integrated backend logic using Python and SQL. Improved UI responsiveness, data validation, and benefit plan configuration."
  },
  {
    role: "Packaged Application Development Associate",
    company: "Accenture Solutions Pvt. Ltd.",
    period: "Oct 2023 – Apr 2024",
    desc: "Worked on PeopleSoft Migration to Oracle Cloud Infrastructure. Utilized SQL, Python and PeopleCode for data migration and customization. Led ETL efforts ensuring accuracy and compatibility during database migration."
  }
];

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <p className="subtitle">Where I've worked</p>
      <div className="timeline">
        {timeline.map((item, i) => (
          <div className="timeline-item card" key={i}>
            <div className="meta">
              <div className="role">{item.role}</div>
              <div className="company">@ {item.company}</div>
            </div>
            <div className="period">{item.period}</div>
            <p className="desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Spring Boot",
  "Java",
  "Python",
  "MySQL",
  "MongoDB",
  "Docker",
  "Kafka",
];

const labelsSecond = [
  "AWS",
  "Azure",
  "Git",
  "GitHub Actions",
  "Jest",
  "Cypress",
  "Mockito",
  "JUnit",
  "Rest Assured",
];

const labelsThird = [
  "Data Structures",
  "Algorithms",
  "LeetCode",
  "Problem Solving",
  "Agile Methodologies",
  "Scrum",
  "UI/UX Design",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Development</h3>
            <p>
              I specialize in building scalable, high-performance web
              applications. At Coop Bank, I developed a shareholder management
              system handling <strong>200k+ shareholders</strong> and processing{" "}
              <strong>Kshs. 8 billion+ annually</strong>, achieving{" "}
              <strong>99% uptime</strong> through optimized Spring Boot
              microservices and Docker deployments. I also created intuitive
              React.js interfaces for <strong>10M+ users</strong> at Solana
              Labs, enhancing customer satisfaction by <strong>10%</strong>. My
              expertise spans{" "}
              <strong>React.js, Node.js, Spring Boot, and MySQL</strong>, with a
              focus on delivering seamless user experiences.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              I excel in setting up robust DevOps pipelines and automating
              workflows. At E&M Technologies, I reduced latency by{" "}
              <strong>30%</strong> by optimizing database queries and
              implementing automated testing frameworks like{" "}
              <strong>Jest, Cypress, and Mockito</strong>. I also deployed
              applications using <strong>Docker</strong> and{" "}
              <strong>AWS</strong>, ensuring consistent performance and
              scalability. My experience includes CI/CD pipelines,
              containerization, and cloud infrastructure management.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Problem Solving & Agile Practices</h3>
            <p>
              With a strong foundation in{" "}
              <strong>data structures and algorithms</strong>, I’ve solved{" "}
              <strong>300+ LeetCode problems</strong> and optimized backend
              systems for high throughput. I’m experienced in{" "}
              <strong>Agile methodologies</strong>, having worked in
              cross-functional teams to deliver projects on time. At Ersilia, I
              improved AI/ML model accuracy by <strong>5-15%</strong> and
              increased user engagement by <strong>7%</strong> through Docker
              workflows and React.js interfaces. I’m passionate about continuous
              learning and leveraging technology to solve real-world problems.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

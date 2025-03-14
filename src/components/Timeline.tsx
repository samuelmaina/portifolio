import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="09/2024 – Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Coop Bank through Symphony Consultancy, Nairobi, Kenya
            </h4>
            <p>
              • Developed a <strong>shareholder management system</strong>{" "}
              handling <strong>200k+ shareholders</strong> and processing{" "}
              <strong>Kshs. 8 billion+ annually</strong>.
              <br />• Built a highly efficient backend using{" "}
              <strong>Spring Boot</strong> and <strong>MySQL</strong>, achieving{" "}
              <strong>high throughput</strong> with fast queries (searching 5M+
              records per second).
              <br />• Integrated third-party APIs (e.g., <strong>CDSC</strong>)
              for seamless financial transactions, ensuring{" "}
              <strong>99% uptime</strong>.
              <br />• Designed and implemented <strong>
                payment services
              </strong>{" "}
              with detailed logging and accountability measures (maker/checker
              mechanism).
              <br />• Developed a responsive and user-friendly UI using{" "}
              <strong>React.js</strong>, <strong>Material-UI</strong>, and{" "}
              <strong>Bootstrap</strong>.
              <br />• Deployed and hosted the application using{" "}
              <strong>Docker</strong>, ensuring consistent performance and
              scalability.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="01/2024 – 09/2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              E&M Technologies, Nairobi, Kenya
            </h4>
            <p>
              • Collaborated with hardware engineers to build an{" "}
              <strong>energy management system</strong> using{" "}
              <strong>Spring Boot</strong>, <strong>MySQL</strong>,{" "}
              <strong>React.js</strong>, and <strong>MongoDB</strong> for IoT
              data storage.
              <br />• Implemented comprehensive automated testing frameworks (
              <strong>JUnit</strong>, <strong>Mockito</strong>,{" "}
              <strong>Rest Assured</strong>), achieving{" "}
              <strong>99.99% energy availability</strong>.
              <br />• Optimized database performance by creating indices for
              read-heavy tables, reducing latency by <strong>30%</strong>.
              <br />• Converted parts of the backend into{" "}
              <strong>microservices</strong> using <strong>Kafka</strong>,
              reducing latency by <strong>100ms</strong>.
              <br />• Developed responsive and theme-consistent UIs using{" "}
              <strong>Material-UI</strong> and <strong>Tailwind CSS</strong>.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="02/2023 – 01/2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI/ML Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ersilia, Barcelona, Spain (Remote)
            </h4>
            <p>
              • Improved AI/ML model accuracy by <strong>5-15%</strong> through
              troubleshooting, refactoring, and fine-tuning.
              <br />• Automated model deployment using <strong>
                Docker
              </strong>{" "}
              and <strong>GitHub workflows</strong>, improving model
              availability on <strong>Ersilia Hub</strong>,{" "}
              <strong>Docker Hub</strong>, and <strong>AWS S3</strong>.
              <br />• Contributed to the Ersilia website using{" "}
              <strong>React.js</strong>, increasing user engagement by{" "}
              <strong>7%</strong>.
              <br />• Trained and tested{" "}
              <strong>30+ machine learning models</strong> using{" "}
              <strong>Python</strong>, focusing on <strong>NLP</strong>,{" "}
              <strong>generative models</strong>, and{" "}
              <strong>multitask learning</strong>.
              <br />• Incorporated and monitored drug discovery ML models in{" "}
              <strong>Ersilia Hub</strong>.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="09/2022 – 12/2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend SWE Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Solana Labs, San Francisco, USA (Remote)
            </h4>
            <p>
              • Developed <strong>React components</strong> using{" "}
              <strong>TypeScript</strong> for Solana Explorer, a platform with{" "}
              <strong>10M+ daily users</strong>.
              <br />• Increased customer satisfaction by <strong>10%</strong> by
              improving UI/UX for cluster status and validator pages.
              <br />• Created <strong>React hooks</strong> for RPC API calls,
              reducing the need for Rust code in the blockchain.
              <br />• Worked in a team of 9 to extend Solana Explorer,
              contributing to its open-source ecosystem.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

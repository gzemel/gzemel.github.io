import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I'm <span className="purple">Graham Zemel </span>
            from <span className="purple"> Connecticut, USA</span>
            <br />I am a junior pursuing computer science in high school.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Designing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Experimenting with cybersecurity
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "...if he fails, at least [he] fails while daring greatly"{" "}
          </p>
          <footer className="blockquote-footer">Theodore Roosevelt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

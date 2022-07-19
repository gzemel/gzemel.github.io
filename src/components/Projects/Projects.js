import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bashbunny from "../../Assets/Projects/bashbunny.jpeg";
import uwf from "../../Assets/Projects/uwf.jpeg";
import algo from "../../Assets/Projects/algo.png";
import vault from "../../Assets/Projects/512.png";
import WRC from "../../Assets/Projects/WRC.png";
import QOP1 from "../../Assets/Projects/QOP1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bashbunny}
              isBlog={false}
              title="Bash Bunny Scripting"
              description="Created bash bunny scripts that can be used in hotplug attacks to gather data from computer systems. Using powershell scripting and the LaZagne password retriever, I was able to create a script that gathered the systems passwords while simultaniously getting basic information about the system."
              link="https://github.com/gzemel/Hotplug_Attacks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vault}
              isBlog={false}
              title="Creator of The Vault Collection"
              description="I created a game written in the Unity Framework that encapsulates multiple old style games like snake, pong, and brick breaker. I programmed this in about a month, and it uses multiple different libraries such as OneSignal and Playfab."
              link="https://apps.apple.com/us/app/the-vault-collection/id1604952747"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uwf}
              isBlog={false}
              title="Creator of the UWF Cryptocurrency"
              description="I created a cryptocurrency as a fun school project with some friends, and was able to list it on many popular sites including PancakeSwap and Poocoin. This token was created using Solidity, which is a programming language that many cryptocurrencies are written in."
              link="https://github.com/gzemel/UWF_Coin-Cryptocurrency"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algo}
              isBlog={false}
              title="Algorithms"
              description="A repo full of cool algorithms written in JavaScript and Java that demonstrate interesting patterns. Some algorithms include the fibbonaci sequence and the grid traveling problem."
              link="https://github.com/gzemel/Algorithms"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WRC}
              isBlog={false}
              title="We Recycle Computers"
              description="Creating the site WeRecycleComputers.com was the easy part, the hard part was SEO optimization and getting a consistent traffic flow."
              link="https://werecyclecomputers.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QOP1}
              isBlog={false}
              title="Queen Of Parts"
              description="Queen of Parts was a site I did following WRC, and it turned out to be a phenomenal solution to Ebay's atrocious seller fees."
              link="https://qop1.net"
            />
          </Col>


          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

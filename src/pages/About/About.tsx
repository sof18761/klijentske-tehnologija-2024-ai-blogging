import React, { Component } from "react";
import { AboutService } from "../../services/AboutService";
import { Founder } from "../../services/Founder";
import "./About.css";

interface AboutState {
  founders: Founder[];
}

class About extends Component<{}, AboutState> {
  private aboutService: AboutService;

  constructor(props: {}) {
    super(props);
    this.aboutService = new AboutService();
    this.state = {
      founders: this.aboutService.getFounders()
    };
  }

  render() {
    return (
      <div className="about" style={{ color: 'white' }}>
        <h1>About Our Founders</h1>
        <ul>
          {this.state.founders.map((founder, index) => (
            <li key={index}>
              <h2>{founder.firstName} {founder.lastName}</h2>
              <p>{founder.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default About;
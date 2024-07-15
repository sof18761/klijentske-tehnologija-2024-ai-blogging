import React, { Component, ChangeEvent } from "react";
import { AboutService } from "../../services/AboutService";
import { Founder as ServiceFounder } from "../../services/Founder"; // Preimenovali smo uvoz da izbegnemo sukob

import "./About.css";

interface Product {
  id: number;
  name: string;
  description: string;
}

interface LocalFounder {
  firstName: string;
  lastName: string;
  description: string;
  products: Product[];
}

interface AboutState {
  founders: LocalFounder[];
  filterText: string;
}

class About extends Component<{}, AboutState> {
  private aboutService: AboutService;

  constructor(props: {}) {
    super(props);
    this.aboutService = new AboutService();
    this.state = {
      founders: this.aboutService.getFounders(),
      filterText: ""
    };
  }

  handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ filterText: e.target.value });
  };

  render() {
    const { founders, filterText } = this.state;
    const filteredFounders = founders.filter((founder) =>
      `${founder.firstName} ${founder.lastName}`
        .toLowerCase()
        .includes(filterText.toLowerCase())
    );

    return (
      <div className="about" style={{ color: 'white' }}>
        <h1>About Our Founders</h1>
        <input
          type="text"
          placeholder="Filter founders..."
          value={filterText}
          onChange={this.handleFilterChange}
          style={{ marginBottom: '20px', padding: '10px', borderRadius: '5px' }}
        />
        <ul>
          {filteredFounders.map((founder, index) => (
            <li key={index}>
              <h2>{founder.firstName} {founder.lastName}</h2>
              <p>{founder.description}</p>
              <h3>diplome:</h3>
              <ul>
                {founder.products.map((product) => (
                  <li key={product.id}>
                    <strong>{product.name}</strong>: {product.description}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default About;



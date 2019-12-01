import React, { Component } from 'react';

class ReductionSuggestions extends Component {
    render() {
      return (
        <div>
        <h2>Reduce your Carbon Emissions (PLACEHOLDER COMPONENT)</h2>
        <p>
          {JSON.stringify(this.props.breakdown)}
        </p>
        <h4>Consider following these recommendations</h4>
        <ul>
            <li>Limit your air travel</li>
            <li>Eat less meat</li>
        </ul>
        </div>

      );
    }
  }

export default ReductionSuggestions;
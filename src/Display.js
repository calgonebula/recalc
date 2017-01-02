import React from 'react';
import './Display.css';

class Display extends React.Component {
  constructor() {
    super();
    this.state = {
      result: '0'
    };
  }

  render() {
    return (
      <div className="Display">
        {this.props.value}
      </div>
    );
  }
}

export default Display;

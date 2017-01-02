import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onClick(1);
  }

  render() {
    return <button className="number-button" onClick={this.handleClick}>1</button>
  }
}

export default Button;

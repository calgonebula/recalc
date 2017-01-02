import React from 'react';
import Button from './Button';
import './NumberContainer.css';

class NumberContainer extends React.Component {
  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(value) {
    this.props.onChange(value);
  }

  render() {
    return (
      <div className="number-container">
            <Button onClick={this.handleButtonClick} />
            </div>
    );
  }
}

export default NumberContainer;

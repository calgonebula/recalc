import React from 'react';
import Button from './Button';
import './ArithmeticButtons.css';

class ArithmeticButtons extends React.Component{
  constructor() {
    super();
    this.handleOperation = this.handleOperation.bind(this);
  }

  handleOperation(operation) {
    this.props.onChange(operation);
  }

  render() {
    return(
      <div className="arithmetic-buttons-container">
        <Button />
      </div>
    );
  }
}

export default ArithmeticButtons;

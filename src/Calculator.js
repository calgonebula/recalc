import React from 'react';
import Display from './Display';
import DeleteButton from './DeleteButton';
import NumberContainer from './NumberContainer';
import ArithmeticButtons from './ArithmeticButtons'

import './Calculator.css';


class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      currentValue: 0,
      calculating:false
    };
    this.clearDisplay = this.clearDisplay.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  clearDisplay() {
    this.setState({
      currentValue: 0
    });
  }

  updateValue(value) {
    let newValue;
    if (this.state.currentValue === 0 || this.state.calculating) {
      newValue = value;
    } else {
      newValue = this.state.currentValue + "" + value
    }
    this.setState({
      currentValue: newValue
    });
    console.log("Updated Value to: " + this.state.currentValue);
  }

  render() {
    return (
      <div id="container">
          <Display value={this.state.currentValue}/>
          <ArithmeticButtons />
          <DeleteButton onClick={this.clearDisplay}/>
          <NumberContainer onChange={this.updateValue} />
      </div>
    );
  }
}

export default Calculator;

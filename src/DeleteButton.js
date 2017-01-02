import React from 'react';
import './DeleteButton.css';

class DeleteButton extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return <button id="delete-button" onClick={this.handleClick}>C</button>;
  }
}

export default DeleteButton;

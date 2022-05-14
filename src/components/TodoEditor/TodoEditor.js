import React, { Component } from 'react';
import './TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  // перезаписывает свой state
  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // передает в родительский state
    this.props.onSubmit(this.state.message);

    // очищает e.currentTarget.value
    this.setState({ message: '' });
  };

  render() {
    return (
      <form className="TodoEditor" 
      onSubmit={this.handleSubmit} // при sumbit передает в родительский state
      >
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message} // читает input 
          onChange={this.handleChange} // перезаписывает свой state
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Сохранить
        </button>
      </form>
    );
  }
}

export default TodoEditor;

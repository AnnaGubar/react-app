import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

//? последовательность реализации динамики:
// статика - состояние(state) - методы state - render - разметка

class Counter extends Component {
  //* изначальное значение value
  // вариант записи 1
  static defaultProps = {
    initialValue: 0,
  };
  // вариант записи 2
  static propTypes = {
    //
  };

  //* динамическое свойство
  state = {
    value: this.props.initialValue,
  };

  // метод обработки динамического свойства
  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  // метод обработки динамического свойства
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  //* рендер динамиеского свойства
  render() {
    const { value } = this.state;

    return (
      <div className="Counter">
        <Value value={value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;

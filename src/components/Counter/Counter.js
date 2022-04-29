import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

//? последовательность реализации динамики:
// статика - состояние(state) - методы state - render(разметка)

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
  // если нужно по событию перезаписать ДС (с одного на другое)
  state = {
    value: this.props.initialValue,
  };

  // если нужно по событию изменять ДС
  // метод обработки динамического свойства (увеличение на 1)
  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  // метод обработки динамического свойства (уменьшение на 1)
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  //* рендер динамиеского свойства
  render() {
    const { value } = this.state; // передаем ДС в render

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

import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  // меняет индекс текущего динамического эл-та (activeOptionIdx)
  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  // присваивает класс к activeOptionIdx
  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    // console.log(this.state.activeOptionIdx); // текущий идекс activeOptionIdx

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props; // массив обьектов colorPickerOptions
    const { label } = options[activeOptionIdx]; // цвет активного индекса

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;

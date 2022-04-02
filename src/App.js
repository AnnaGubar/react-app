import React, { Component } from 'react';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  // удаление эл-та: todoId - Id эл-та, который нужно удалить
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    return (
      <>
        <h1>Состояние компонента</h1>

        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />

        <div class="fff">
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
          {/* 👉🏻 todos={todos} - изначальная отрисовка */}
          {/* 👉🏻 onDeleteTodo={this.deleteTodo} - обработка state */}
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        </div>
      </>
    );
  }
}

export default App;

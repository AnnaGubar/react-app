import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify'; // библиотека оповещений
const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  // запись значения инпута в свой state
  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    // alert на пустой поиск
    if (this.state.pokemonName.trim() === '') {
      toast.error('Введите имя покемона.');
      return;
    }

    // передает текущий state родительскому
    this.props.onSubmit(this.state.pokemonName);

    // очищает инпут поиска
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>
    );
  }
}

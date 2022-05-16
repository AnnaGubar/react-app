import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  // создаем слушатель события
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // удаляем слушатель события
  // здесь необходимо зачищать все методы(addEventListener, setTimeOut ...)
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose(); // родительский метод toggleModal
    }
  };

  handleBackdropClick = event => {
    //* всплытие событий
    // console.log('currentTarget: ', event.currentTarget);// слушатель
    // console.log('target: ', event.target); //вложенность слушателя

    if (event.currentTarget === event.target) {
      console.log('Кликнули в бекдроп');
      this.props.onClose(); // родительский метод toggleModal
    }
  };

  //*** {this.props.children} - для переиспользования модалки с другим контентом
  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

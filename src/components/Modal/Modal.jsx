import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modal } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');

class ModalPhoto extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscPress);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscPress);
  }

  onEscPress = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.onBackdropClick}>
        <Modal>
          <img src={this.props.largeImg} alt="largeImg" />
        </Modal>
      </Overlay>,
      modalRoot
    );
  }
}

export default ModalPhoto;

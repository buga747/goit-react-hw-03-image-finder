import { Component } from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
import ModalPhoto from 'components/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { url, tags, largeImg } = this.props;
    return (
      <GalleryItem>
        <Image src={url} alt={tags} onClick={this.toggleModal} />

        {this.state.showModal && (
          <ModalPhoto onClose={this.toggleModal} largeImg={largeImg} />
        )}
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;

import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { fetchImages } from '../../service/api-service';
import { toast } from 'react-toastify';
import { Gallery } from './ImageGallery.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
class ImageGallery extends Component {
  state = {
    status: Status.IDLE,
    page: 1,
    error: null,
    images: [],
    totalHits: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState(() => ({
        images: [],
        page: 1,
        status: Status.PENDING,
      }));

      fetchImages(1, this.props.query)
        .then(imageSet => {
          this.setState({
            images: imageSet.hits,
            page: this.state.page + 1,
            status: Status.RESOLVED,
            totalHits: imageSet.totalHits,
          });
          console.log(imageSet);
          if (imageSet.totalHits !== 0) {
            toast.success(
              `Hooray!!! ${imageSet.totalHits} images were found for your request.`
            );
          }
          if (imageSet.totalHits === 0) {
            toast.error(
              `UpsOops!!! We did not find any images for this request. Try changing the query.`
            );
          }
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  render() {
    return (
      <Gallery>
        {this.state.images.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              url={webformatURL}
              tags={tags}
              largeImg={largeImageURL}
            />
          );
        })}
      </Gallery>
    );
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};

export default ImageGallery;

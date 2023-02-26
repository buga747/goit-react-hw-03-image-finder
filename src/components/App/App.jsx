import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './App.styled';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

class App extends Component {
  state = {
    query: '',
  };

  searchResult = query => {
    this.setState(query);
  };

  render() {
    return (
      <Container>
        <ToastContainer />

        <Searchbar onSubmit={this.searchResult} />
        <ImageGallery query={this.state.query} />
        {/* глобальні стилі */}
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;

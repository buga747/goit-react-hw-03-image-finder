import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';
import Searchbar from './Searchbar';

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Searchbar />
      </Container>
    );
  }
}

export default App;

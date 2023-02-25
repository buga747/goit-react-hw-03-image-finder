import PropTypes from 'prop-types';

import {
  Header,
  SearchForm,
  Button,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm>
        <Button type="submit">
          <ButtonLabel></ButtonLabel>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

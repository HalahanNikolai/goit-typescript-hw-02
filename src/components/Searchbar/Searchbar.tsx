import Notiflix from 'notiflix';
import { useState } from 'react';
import {
  SearchbarWrap,
  SearchbarForm,
  SearchbarButton,
  SearchbarSpan,
  SearchbarInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleChange = event => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (!searchQuery.trim()) {
      return Notiflix.Report.failure(
        'PixQuery Failure',
        'Please enter a keyword or phrase to search for photos. We will do our best to find suitable images for you.',
        'Okay'
      );
    }
    onSubmit(searchQuery);
  };

  return (
    <SearchbarWrap>
      <SearchbarForm onSubmit={handleSubmit}>
        <SearchbarButton type="submit">
          <SearchbarSpan></SearchbarSpan>
        </SearchbarButton>

        <SearchbarInput
          id="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
      </SearchbarForm>
    </SearchbarWrap>
  );
};

export default Searchbar;

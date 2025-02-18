import React from 'react';
import { useState } from 'react';
import Section from '../Section/Section';
import Searchbar from '../Searchbar/Searchbar';
import Gallery from '../Gallery/Gallery';

// interface AppProps {

// }
const App= () => {
  const [searchQuery, setSearchQuery] = useState <string>('');

  const handleSubmit: (dataForm: string) => void = dataForm => {
    setSearchQuery(dataForm)};

  return (
    <>
      <Searchbar onSubmit={handleSubmit}></Searchbar>
      <Section  title="Search results">
        <Gallery searchQuery={searchQuery}></Gallery>
      </Section>
    </>
  );
};

export default App;

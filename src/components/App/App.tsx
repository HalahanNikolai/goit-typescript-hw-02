import { useState } from 'react';
import Section from '../Section/Section';
import Searchbar from '../Searchbar/Searchbar';
import Gallery from '../Gallery/Gallery';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');


  const handleSubmit = dataForm => {
    setSearchQuery(dataForm);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit}></Searchbar>
      <Section>
        <Gallery searchQuery={searchQuery}></Gallery>
      </Section>
    </>
  );
};

export default App;

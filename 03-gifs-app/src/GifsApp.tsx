import { useState } from 'react';
import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['goku']);

  const handleTermClick = (term: string) => {
    console.log({ term });
  };

  const handleOnSearch = (query: string) => {
    const term = query.toLocaleLowerCase().trim();
    if (!term) return;
    if (previousTerms.includes(term)) return;
    setPreviousTerms([term, ...previousTerms].slice(0, 8));
  };
  return (
    <>
      {/* HEADER */}
      <CustomHeader
        title='Buscador de Gifs'
        description='Encuentra los gifs que busques'
      />

      {/* SEARCH */}
      <SearchBar placeholder='Buscar gifs' onQuery={handleOnSearch} />
      {/* BUSQUEDAS PREVIAS */}
      <PreviousSearches
        title='Búsquedas previas'
        searches={previousTerms}
        onTermClick={handleTermClick}
      />
      {/* GIFS */}
      <GifList gifs={mockGifs} />
    </>
  );
};

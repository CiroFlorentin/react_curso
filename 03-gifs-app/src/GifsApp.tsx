import { useState } from 'react';

import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';

import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';
import type { Gif } from './gifs/interfaces/gif.interface';

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClick = (term: string) => {
    setGifs([]);

    handleOnSearch(term);
  };

  const handleOnSearch = async (query: string) => {
    const term = query.toLocaleLowerCase().trim();
    if (!term) return;
    if (!previousTerms.includes(term)) {
      setPreviousTerms([term, ...previousTerms].slice(0, 8));
    }

    const gif = await getGifsByQuery(query);
    setGifs(gif);
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
      <GifList gifs={gifs} />
    </>
  );
};

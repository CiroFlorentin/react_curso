import { useRef, useState } from 'react';
import type { Gif } from '../interfaces/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';

// const gifsCache: Record<string, Gif[]> = {}; //!UNA OPCIÓN

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClick = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleOnSearch = async (query: string) => {
    query = query.toLocaleLowerCase().trim();
    if (!query) return;
    if (!previousTerms.includes(query)) {
      setPreviousTerms([query, ...previousTerms].slice(0, 8));
    }

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);

    gifsCache.current[query] = gifs;
  };
  return {
    // props
    gifs,
    previousTerms,
    // methods
    handleTermClick,
    handleOnSearch,
  };
};

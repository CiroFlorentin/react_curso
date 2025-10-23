import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";

import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, previousTerms, handleTermClick, handleOnSearch } = useGifs();

  return (
    <>
      {/* HEADER */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Encuentra los gifs que busques"
      />

      {/* SEARCH */}
      <SearchBar placeholder="Buscar gifs" onQuery={handleOnSearch} />
      {/* BUSQUEDAS PREVIAS */}
      <PreviousSearches
        title="Búsquedas previas"
        searches={previousTerms}
        onTermClick={handleTermClick}
      />
      {/* GIFS */}
      <GifList gifs={gifs} />
    </>
  );
};

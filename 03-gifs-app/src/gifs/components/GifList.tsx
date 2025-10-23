import type { Gif } from "../interfaces/gif.interface";

interface MockGifs {
  gifs: Gif[];
}

export const GifList = ({ gifs }: MockGifs) => {
  return (
    <div className="gifs-container">
      {gifs.map(({ id, title, url, width, height }: Gif) => (
        <div key={id} className="gif-card">
          <img src={url} alt={title} />
          <h3>{title}</h3>
          <p>
            {width} x {height} (1.5Mb)
          </p>
        </div>
      ))}
    </div>
  );
};

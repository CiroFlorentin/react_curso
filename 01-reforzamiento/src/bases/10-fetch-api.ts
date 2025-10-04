import type { GiphyRandomResponse } from '../bases/data/giphy.response';

const API_KEY = 'PHiM8Jpb5jNJaUldLXbYtiEPKwIyi1qZ';

const request = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;
  document.body.append(imgElement);
};

request
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl);
  })
  .catch(console.warn);

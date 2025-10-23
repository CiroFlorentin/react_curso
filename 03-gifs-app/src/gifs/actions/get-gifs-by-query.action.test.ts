import { beforeEach, describe, expect, test, vi } from 'vitest';

import { giphyResponseMock } from './../../../tests/mock/giphy.response.data';
import { getGifsByQuery } from './get-gifs-by-query.action';

import axiosMockAdapter from 'axios-mock-adapter';
import { giphyApi } from '../api/giphy.api';

describe('Giphy API', () => {
  let mock = new axiosMockAdapter(giphyApi);

  beforeEach(() => {
    // mock.reset();
    mock = new axiosMockAdapter(giphyApi);
  });

  // test('should return a list of GIFs based on query', async () => {
  //   const gifs = await getGifsByQuery('funny cats');
  //   const [gif1] = gifs;
  //   expect(gif1).toStrictEqual({
  //     id: expect.any(String),
  //     title: expect.any(String),
  //     url: expect.any(String),
  //     width: expect.any(Number),
  //     height: expect.any(Number),
  //   });
  // });
  
  test('should return a list of gifs with the correct types', async () => {
    mock.onGet('/search').reply(200, giphyResponseMock);

    const gifs = await getGifsByQuery('funny cats');

    expect(gifs.length).toBe(25);

    gifs.forEach((gif) => {
      expect(typeof gif.id).toBe('string');
      expect(typeof gif.title).toBe('string');
      expect(typeof gif.url).toBe('string');
      expect(typeof gif.width).toBe('number');
      expect(typeof gif.height).toBe('number');
    });
  });

  test('should return an empty list of gifs if query is empty', async () => {
    // mock.onGet('/search').reply(200, { data: [] });
    mock.restore();

    const gifs = await getGifsByQuery('');

    expect(gifs.length).toBe(0);
  });

  test('should handle error when the API returns an error', async () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {
        console.log('Error al obtener los gifs');
      });

    mock.onGet('/search').reply(400, {
      data: {
        message: 'Bad Request',
      },
    });

    const gifs = await getGifsByQuery('funny cats');

    expect(gifs.length).toBe(0);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.any(Error));
  });
});

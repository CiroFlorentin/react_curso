import { act, renderHook } from '@testing-library/react';

import { describe, expect, test, vi } from 'vitest';
import { useGifs } from './useGifs';
import * as gifActions from '../actions/get-gifs-by-query.action';

describe('useGifs', () => {
  test('should return default values and methods', () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);
    expect(result.current.handleOnSearch).toBeDefined();
    expect(result.current.handleTermClick).toBeDefined();
  });

  test('should return a list of gifs', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleOnSearch('One Punch');
    });

    expect(result.current.gifs.length).toBe(25);
  });

  test('should return a list of list gifs when handleTermClick is called', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClick('One Punch');
    });

    expect(result.current.gifs.length).toBe(25);
  });
  test('should return a list of gifs from cache', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClick('One Punch');
    });

    expect(result.current.gifs.length).toBe(25);

    vi.spyOn(gifActions, 'getGifsByQuery').mockRejectedValue(
      new Error('Should not be called')
    );

    await act(async () => {
      await result.current.handleTermClick('One Punch');
    });

    expect(result.current.gifs.length).toBe(25);
  });

  test('should return previous search terms', async () => {
    const { result } = renderHook(() => useGifs());

    vi.spyOn(gifActions, 'getGifsByQuery').mockResolvedValue([]);

    await act(async () => {
      await result.current.handleOnSearch('One Punch1');
    });
    await act(async () => {
      await result.current.handleOnSearch('One Punch2');
    });
    await act(async () => {
      await result.current.handleOnSearch('One Punch3');
    });
    await act(async () => {
      await result.current.handleOnSearch('One Punch4');
    });
    await act(async () => {
      await result.current.handleOnSearch('One Punch5');
    });
    await act(async () => {
      await result.current.handleOnSearch('One Punch6');
    });
    await act(async () => {
      await result.current.handleOnSearch('One Punch7');
    });
    await act(async () => {
      await result.current.handleOnSearch('One Punch8');
    });
    await act(async () => {
      await result.current.handleOnSearch('One Punch9');
    });

    expect(result.current.previousTerms.length).toBe(8);
    expect(result.current.previousTerms).toStrictEqual([
      'one punch9',
      'one punch8',
      'one punch7',
      'one punch6',
      'one punch5',
      'one punch4',
      'one punch3',
      'one punch2',
    ]);
  });
});

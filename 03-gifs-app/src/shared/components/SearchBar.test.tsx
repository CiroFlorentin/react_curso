import { describe, expect, test, vi } from 'vitest';
import { SearchBar } from './SearchBar';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('SearchBar', () => {
  test('should render correctly', () => {
    const { container } = render(<SearchBar onQuery={() => {}} />);

    // screen.debug();

    expect(container).toMatchSnapshot();
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
  });

  test('should call onQuery with the correct value after 700ms', async () => {
    const onQuery = vi.fn();
    const value = 'test query';
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: value } });

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalled();
      expect(onQuery).toHaveBeenCalledWith(value);
    });
  });

  test('should call only once with the last value (debounce)', async () => {
    const onQuery = vi.fn();
    const value = 't';
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: value } });

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalledTimes(1);
      expect(onQuery).toHaveBeenCalledWith(value);
    });
  });

  test('should call onQuery when button clicked with the initial value', () => {
    const onQuery = vi.fn();
    const value = 't';
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    fireEvent.change(input, { target: { value: value } });

    fireEvent.click(button);

    expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith(value);
  });

  test('should the input has the correct placeholder', () => {
    const placeholder = 'BUSCA ESTA';
    render(<SearchBar onQuery={() => {}} placeholder={placeholder} />);

    expect(screen.getByPlaceholderText(placeholder)).toBeDefined();
  });
});

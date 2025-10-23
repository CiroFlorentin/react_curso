import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { MyCounterApp } from './MycounterApp';
// import { useCounter } from '../hooks/useCounter';

const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
  useCounter: () => ({
    counter: 20,
    handleAdd: handleAddMock,
    handleReset: handleResetMock,
    handleSubtract: handleSubtractMock,
  }),
}));

describe('MycounterApp', () => {
  test('should render the component', () => {
    render(<MyCounterApp />);

    screen.debug();

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      'Counter: 20'
    );
    expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
    expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
  });
  test('should call handleAdd if button +1 is clicked', () => {
    render(<MyCounterApp />);

    const btnAdd = screen.getByRole('button', { name: '+1' });

    fireEvent.click(btnAdd);

    expect(handleAddMock).toHaveBeenCalled();
  });

  test('should call handleSubtract if button -1 is clicked', () => {
    render(<MyCounterApp />);
    const btnSubtract = screen.getByRole('button', { name: '-1' });
    fireEvent.click(btnSubtract);
    expect(handleSubtractMock).toHaveBeenCalled();
  });

  test('should call handleReset if button Reset is clicked', () => {
    render(<MyCounterApp />);
    const btnReset = screen.getByRole('button', { name: 'Reset' });
    fireEvent.click(btnReset);
    expect(handleResetMock).toHaveBeenCalled();
  });
});

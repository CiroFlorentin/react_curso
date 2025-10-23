import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { MyCounterApp } from './MycounterApp';

describe('MycounterApp', () => {
  test('should render the component', () => {
    render(<MyCounterApp />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      'Counter: 10'
    );
    expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
    expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
  });
  test('should increment the counter', () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole('heading', { level: 1 });
    const btnAdd = screen.getByRole('button', { name: '+1' });

    fireEvent.click(btnAdd);

    expect(labelH1.innerHTML).toContain('Counter: 11');
  });
  test('should decrement the counter', () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole('heading', { level: 1 });
    const btnSubtract = screen.getByRole('button', { name: '-1' });

    fireEvent.click(btnSubtract);

    expect(labelH1.innerHTML).toContain('Counter: 9');
  });
  test('should reset the counter', () => {
    render(<MyCounterApp />);
    const labelH1 = screen.getByRole('heading', { level: 1 });
    const btnAdd = screen.getByRole('button', { name: '+1' });
    const btnReset = screen.getByRole('button', { name: 'Reset' });

    fireEvent.click(btnAdd);
    fireEvent.click(btnAdd);

    expect(labelH1.innerHTML).toContain('Counter: 12');

    fireEvent.click(btnReset);

    expect(labelH1.innerHTML).toContain('Counter: 10');
  });
});

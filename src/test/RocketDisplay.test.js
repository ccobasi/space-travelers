import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { ReserveBadge, ReserveButton } from '../components/RocketDisplay';

describe('Badge displays if reserved', () => {
  it('Badge displays Reserved when boolean is true', () => {
    render(<ReserveBadge reserved />);
    expect(screen.getByRole('textbox', { class: /Rocket-Reserve/i })).toHaveTextContent('Reserved');
  });
});

describe('Correct button is displayed based on boolean', () => {
  it('Button displays Cancel Reservation when boolean is true', () => {
    render(<ReserveButton reserved />);
    expect(screen.getByRole('textbox', { class: /Rocket-Button-Cancel/i })).toHaveTextContent('Cancel Reservations');
  });

  it('Button displays Reserve Rocket when boolean is false', () => {
    render(<ReserveButton reserved={false} />);
    expect(screen.getByRole('textbox', { class: /Rocket-Button/i })).toHaveTextContent('Reserve Rocket');
  });
});

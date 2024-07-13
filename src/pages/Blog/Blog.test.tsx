import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Uvoz jest-dom biblioteke
import Blog from './Blog'; // Uverite se da je ovo ispravna putanja do vaše Blog komponente

describe('Blog komponenta', () => {
  it('treba da prikaže naslov i input polja', () => {
    render(<Blog />);

    // Provera da li se naslov prikazuje
    const naslovElement = screen.getByText('AI Blog');
    expect(naslovElement).toBeInTheDocument();

    // Provera postojanja input polja za unos naslova i sadržaja
    const inputNaslov = screen.getByPlaceholderText('Post Title');
    const inputSadrzaj = screen.getByPlaceholderText('Post Content');
    expect(inputNaslov).toBeInTheDocument();
    expect(inputSadrzaj).toBeInTheDocument();
  });

  it('treba da omogući dodavanje i uklanjanje postova', () => {
    render(<Blog />);

    // Simulacija unosa novog posta
    const inputNaslov = screen.getByPlaceholderText('Post Title');
    const inputSadrzaj = screen.getByPlaceholderText('Post Content');
    fireEvent.change(inputNaslov, { target: { value: 'Naslov test posta' } });
    fireEvent.change(inputSadrzaj, { target: { value: 'Sadrzaj test posta' } });

    // Simulacija dodavanja novog posta
    const dodajButton = screen.getByText('Add Post');
    fireEvent.click(dodajButton);

    // Provera da li se novi post prikazuje u listi
    const naslovPosta = screen.getByText('Naslov test posta');
    const sadrzajPosta = screen.getByText('Sadrzaj test posta');
    expect(naslovPosta).toBeInTheDocument();
    expect(sadrzajPosta).toBeInTheDocument();

    // Simulacija uklanjanja posta
    const ukloniButton = screen.getByText('Remove');
    fireEvent.click(ukloniButton);

    // Provera da li se uklonjeni post više ne prikazuje
    expect(naslovPosta).not.toBeInTheDocument();
    expect(sadrzajPosta).not.toBeInTheDocument();
  });
});

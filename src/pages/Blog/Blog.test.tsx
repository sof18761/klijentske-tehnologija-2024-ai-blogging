import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Blog from './Blog'; 

describe('Blog komponenta', () => {
  it('treba da prikaže naslov i input polja', () => {
    render(<Blog />);

   
    const naslovElement = screen.getByText('AI Blog');
    expect(naslovElement).toBeInTheDocument();

  
    const inputNaslov = screen.getByPlaceholderText('Post Title');
    const inputSadrzaj = screen.getByPlaceholderText('Post Content');
    expect(inputNaslov).toBeInTheDocument();
    expect(inputSadrzaj).toBeInTheDocument();
  });

  it('treba da omogući dodavanje i uklanjanje postova', () => {
    render(<Blog />);

    
    const inputNaslov = screen.getByPlaceholderText('Post Title');
    const inputSadrzaj = screen.getByPlaceholderText('Post Content');
    fireEvent.change(inputNaslov, { target: { value: 'Naslov test posta' } });
    fireEvent.change(inputSadrzaj, { target: { value: 'Sadrzaj test posta' } });

   
    const dodajButton = screen.getByText('Add Post');
    fireEvent.click(dodajButton);

   
    const naslovPosta = screen.getByText('Naslov test posta');
    const sadrzajPosta = screen.getByText('Sadrzaj test posta');
    expect(naslovPosta).toBeInTheDocument();
    expect(sadrzajPosta).toBeInTheDocument();

   
    const ukloniButton = screen.getByText('Remove');
    fireEvent.click(ukloniButton);

   
    expect(naslovPosta).not.toBeInTheDocument();
    expect(sadrzajPosta).not.toBeInTheDocument();
  });
});

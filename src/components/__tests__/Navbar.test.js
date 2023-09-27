/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar Component', () => {
  it('should render the Navbar component', () => {
    render(<Navbar />);
    
    // Memeriksa apakah elemen-elemen yang diharapkan ada dalam Navbar
    const navbarElement = screen.getByTestId('navbar-1');
    const newsElement = screen.getByText('News');
    const apiElement = screen.getByText('API');
    const getStartedElement = screen.getByText('Get Started');
    const documentationElement = screen.getByText('Documentation');
    const pricingElement = screen.getByText('Pricing');
    const loginButton = screen.getByText('Login');
    const apiKeyButton = screen.getByText('Get API Key');

    expect(navbarElement).toBeInTheDocument();
    expect(newsElement).toBeInTheDocument();
    expect(apiElement).toBeInTheDocument();
    expect(getStartedElement).toBeInTheDocument();
    expect(documentationElement).toBeInTheDocument();
    expect(pricingElement).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(apiKeyButton).toBeInTheDocument();
  });

  it('should display an alert when Login button is clicked', () => {
    render(<Navbar />);
    
    const loginButton = screen.getByText('Login');

    // Mengeset spy pada fungsi window.alert
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Mengklik tombol Login
    loginButton.click();

    // Memeriksa apakah fungsi window.alert dipanggil dengan pesan yang sesuai
    expect(alertSpy).toHaveBeenCalledWith('Tombol ditekan!');

    // Mereset spy agar tidak memengaruhi pengujian lainnya
    alertSpy.mockRestore();
  });

  it('should display an alert when Get API Key button is clicked', () => {
    render(<Navbar />);
    
    const apiKeyButton = screen.getByText('Get API Key');

    // Mengeset spy pada fungsi window.alert
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Mengklik tombol Get API Key
    apiKeyButton.click();

    // Memeriksa apakah fungsi window.alert dipanggil dengan pesan yang sesuai
    expect(alertSpy).toHaveBeenCalledWith('Tombol ditekan!');

    // Mereset spy agar tidak memengaruhi pengujian lainnya
    alertSpy.mockRestore();
  });
});

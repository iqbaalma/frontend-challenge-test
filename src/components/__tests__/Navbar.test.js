/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar Component', () => {
  it('should render the Navbar component', () => {
    render(<Navbar />);
    
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


    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});


    loginButton.click();


    expect(alertSpy).toHaveBeenCalledWith('Tombol ditekan!');


    alertSpy.mockRestore();
  });

  it('should display an alert when Get API Key button is clicked', () => {
    render(<Navbar />);
    
    const apiKeyButton = screen.getByText('Get API Key');


    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});


    apiKeyButton.click();


    expect(alertSpy).toHaveBeenCalledWith('Tombol ditekan!');

    alertSpy.mockRestore();
  });
});

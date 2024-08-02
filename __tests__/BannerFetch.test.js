
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import BannerFetch from '../path/to/BannerFetch'; 


const mock = new MockAdapter(axios);

describe('BannerFetch Component', () => {
  afterEach(() => {
    mock.reset(); 
  });

  test('renders loading state initially', () => {
   
    render(<BannerFetch />);

    
    expect(screen.getByText('Loading banner...')).toBeInTheDocument();
  });

  test('renders banner image when API call is successful', async () => {
    
    mock.onGet('http://localhost:1337/api/banners/2').reply(200, {
      data: {
        attributes: {
          imageUrl: 'https://example.com/banner.jpg',
        },
      },
    });

    
    render(<BannerFetch />);

   
    await waitFor(() => {
      expect(screen.getByAltText('Banner')).toHaveAttribute('src', 'https://example.com/banner.jpg');
    });
  });

  test('renders error message when API call fails', async () => {
   
    mock.onGet('http://localhost:1337/api/banners/2').reply(500);

    
    render(<BannerFetch />);

    
    await waitFor(() => {
      expect(screen.getByText('Error loading banner')).toBeInTheDocument();
    });
  });
});

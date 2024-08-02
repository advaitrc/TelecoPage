'use client'; 
import Head from 'next/head';
import { useState } from 'react';
import WidgetFetcher from './components/WidgetFetcher'; 
import BannerFetcher from './components/BannerFetcher'; 
import BannerFetch from './components/Banner2';
import CarouselFetcher from './components/CarouselFetcher'; 
import AboutFetcher from './components/AboutFetcher'; 
import ImageCarouselFetcher from './components/ImageCarouselFetcher';

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`min-h-screen ${theme === "light" ? "bg-blue-100 text-blue-900" : "bg-gray-800 text-gray-100"} transition-colors duration-300`}>
      <Head>
        <title>Telecom Company Homepage</title>
        <meta name="description" content="Welcome to Telecom Company - Connecting You Globally" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <nav className={`p-4 ${theme === "light" ? "bg-blue-700" : "bg-gray-900"} transition-colors duration-300`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Telco</h1>
          <div className="space-x-4">
            <a href="#" className="text-white hover:underline">Home</a>
            <a href="http://localhost:3001/" className="text-white hover:underline">Services</a>
            <a href="/technologies " target="_blank" className="text-white hover:underline">Technologies</a>
            
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        
        <ImageCarouselFetcher />
        <br></br>
        
        
        <WidgetFetcher />
        
        
        <CarouselFetcher />
        
        
        <BannerFetcher />
        
        
        <AboutFetcher />
        
        
        <BannerFetch />
        
        
        <div className="get-in-touch bg-blue-200 p-6 rounded-lg shadow-md mt-8 mx-auto max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center">Get in Touch with Us</h2>
          <form>
            <div className="mb-4">
              <label className="block text-blue-900 font-bold mb-2" htmlFor="phone">Mobile Number</label>
              <input type="tel" id="phone" className="w-full p-2 border rounded-lg" placeholder="Your Mobile Number" />
            </div>
            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded-lg w-full sm:w-auto">Submit</button>
          </form>
        </div>
      </main>

      
      <footer className={`text-white text-center p-4 mt-8 ${theme === "light" ? "bg-blue-700" : "bg-gray-900"} transition-colors duration-300`}>
        <p>&copy; 2024 Telecom Company. All rights reserved.</p>
      </footer>

      
      <button
        onClick={toggleTheme}
        className={`fixed bottom-4 right-4 p-3 rounded-full shadow-lg ${theme === "light" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"} transition-colors duration-300`}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}

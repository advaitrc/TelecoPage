'use client';

import Layout from '../app/components/Layout';
import Head from 'next/head';
import { useState } from 'react';

export default function Technologies() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Layout>
      <div className={`flex flex-col min-h-screen ${theme === "light" ? "bg-blue-100 text-blue-900" : "bg-gray-800 text-gray-100"} transition-colors duration-300`}>
        <Head>
          <title>Technologies Used</title>
          <meta name="description" content="List of technologies used by Telecom Company" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        
        <nav className={`p-4 ${theme === "light" ? "bg-blue-700" : "bg-gray-900"} transition-colors duration-300`}>
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">Telco</h1>
            <div className="space-x-4">
              <a href="/" className="text-white hover:underline">Home</a>
              <a href="http://localhost:3001/" className="text-white hover:underline">Services</a>
              <a href="/technologies" className="text-white hover:underline">Technologies</a>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8 flex-grow">
          <h2 className="text-3xl font-bold mb-6">Technologies We Use</h2>

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Next.js</h3>
              <p>Next.js is a powerful React framework that enables server-side rendering and static site generation, providing an optimal experience for building modern web applications.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">React.js</h3>
              <p>React.js is a JavaScript library for building user interfaces, allowing us to create reusable UI components and manage the application state efficiently.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Tailwind CSS</h3>
              <p>Tailwind CSS is a utility-first CSS framework that provides low-level utility classes, enabling us to build custom designs quickly and efficiently without writing custom CSS.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">React Hooks</h3>
              <p>React Hooks like <code>useState</code> allow us to use state and other React features without writing a class, making our functional components more powerful and expressive.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Strapi</h3>
              <p>Strapi is an open-source headless CMS that allows us to manage and serve content through an API, providing a flexible and powerful content management solution for our application.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Theme Changing Functionality</h3>
              <p>We implemented a theme-changing functionality using React Hooks to switch between light and dark themes, enhancing the user experience with a dynamic and responsive design.</p>
            </div>
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
    </Layout>
  );
}

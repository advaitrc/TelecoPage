
'use client'; 
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AboutFetcher() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/abouts');
        setAboutData(response.data.data[0]); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching about data:', error);
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (loading) {
    return <p>Loading About Us...</p>;
  }

  if (!aboutData) {
    return <p>No data found.</p>;
  }

  return (
    <div className="flex flex-col md:flex-row mt-8">
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">About Us</h2>
        <p className="text-blue-800">{aboutData.attributes.description}</p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img 
          src={aboutData.attributes.imageUrl}  
          alt="About Us" 
          className="w-full rounded-lg shadow-md" 
          onLoad={handleImageLoad} 
        />
        {!imageLoaded && <p>Loading image...</p>}  
      </div>
    </div>
  );
}

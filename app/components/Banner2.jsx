'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BannerFetch() {
  const [bannerImage, setBannerImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/banners/2'); 
        console.log('API Response:', response.data);
        if (response.data && response.data.data) {
          setBannerImage(response.data.data.attributes.imageUrl); 
        }
      } catch (err) {
        setError(err);
      }
    };

    fetchBanner();
  }, []);

  if (error) {
    return <p>Error loading banner</p>;
  }

  if (!bannerImage) {
    return <p>Loading banner...</p>;
  }

  return (
    <div className="banner mt-8">
      <img src={bannerImage} alt="Banner" className="w-full rounded-lg shadow-md" />
    </div>
  );
}

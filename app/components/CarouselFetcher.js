"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function CarouselFetcher() {
  const [carouselItems, setCarouselItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCarouselData() {
      try {
        const res = await axios.get("http://localhost:1337/api/carousels");
        const data = res.data.data;
        setCarouselItems(data);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCarouselData();
  }, []);

  if (loading) {
    return <p>Loading carousel...</p>;
  }

  return (
    <div className="relative overflow-x-auto flex items-center space-x-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
      {carouselItems.map((item) => (
        <div key={item.id} className="flex-shrink-0 w-full md:w-1/2 p-4">
          <img
            src={item.attributes.imageUrl} 
            alt={item.attributes.caption}
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <p className="mt-2 text-center text-blue-900">{item.attributes.caption}</p>
        </div>
      ))}
    </div>
  );
}

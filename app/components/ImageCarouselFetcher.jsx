'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageCarouselFetcher() {
  const [carouselItems, setCarouselItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const fetchCarouselItems = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/carousel-items');
        setCarouselItems(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching carousel items:', error);
        setLoading(false);
      }
    };

    fetchCarouselItems();
  }, []);

  if (loading) {
    return <p>Loading carousel...</p>;
  }

  const handleVideoClick = (url) => {
    setVideoUrl(url);
  };

  const closeModal = () => {
    setVideoUrl('');
  };

  return (
    <div className="relative">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {carouselItems.map((item) => (
          <div key={item.id} className="relative rounded-lg overflow-hidden">
            <img 
              src={item.attributes.imageUrl} 
              alt="Carousel Item" 
              className="w-full h-80 object-cover" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4 pt-16">
              <div className="text-center text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: item.attributes.text }} />
              <div className="flex space-x-4 mt-4">
                <button 
                  onClick={() => handleVideoClick(item.attributes.videoLink)} 
                  className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                >
                  Watch a Video
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {videoUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-500 z-50"
            >
              &times;
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${new URL(videoUrl).searchParams.get('v')}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

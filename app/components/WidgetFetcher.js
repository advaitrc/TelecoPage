'use client'; 

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function WidgetFetcher() {
  const [widgetTexts, setWidgetTexts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:1337/api/widget-texts');
        setWidgetTexts(res.data.data);
      } catch (error) {
        console.error('Error fetching widget texts:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {widgetTexts.map((widget) => (
        <div key={widget.id} className="widget bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2 text-blue-900">{widget.attributes.title}</h2>
          <div className="text-blue-800" dangerouslySetInnerHTML={{ __html: widget.attributes.content }} />
        </div>
      ))}
    </div>
  );
}

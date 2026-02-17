import React, { useEffect, useState } from "react";
import "styles/hikes.css";

type Hike = {
  _id: string;
  name: string;
  distance: string;
  difficulty: string;
  elevation: string;
  description: string;
};

const Hikes: React.FC = () => {
  const [hikes, setHikes] = useState<Hike[]>([]);
  const [selectedHikes, setSelectedHikes] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/hikes")
      .then(res => res.json())
      .then(data => setHikes(data));
  }, []);

  const toggleHike = (id: string) => {
    setSelectedHikes(prev =>
      prev.includes(id) ? prev.filter(h => h !== id) : [...prev, id]
    );
  };

  return (
    <div className="hikes-page">
      <h1>Hikes in the Tetons</h1>

      <div className="hikes-list">
        {hikes.map(hike => (
          <div className="hike-card" key={hike._id}>
            <div className="hike-header">
              <h2>{hike.name}</h2>
              <input
                type="checkbox"
                checked={selectedHikes.includes(hike._id)}
                onChange={() => toggleHike(hike._id)}
              />
            </div>

            <p><strong>Distance:</strong> {hike.distance}</p>
            <p><strong>Difficulty:</strong> {hike.difficulty}</p>
            <p>{hike.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hikes;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "styles/camps.css";

type Camp = {
  _id: string;
  name: string;
  type: string;
  description: string;
  notes: string;
  link: string;
};

export default function Camps() {
  const [camps, setCamps] = useState<Camp[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/camps").then(res => setCamps(res.data));
  }, []);

  return (
    <div className="camps-page">
      {/* HERO */}
      <div className="camps-hero">
        <h1>Camping in the Tetons</h1>
        <p>Front country campgrounds and backcountry zones</p>
      </div>

      {/* CONTENT */}
      <div className="camps-section">
        <div className="camps-list">
          {camps.map(camp => (
            <div key={camp._id} className="camp-card">
              <h3>{camp.name}</h3>
              <span className="camp-type">{camp.type}</span>
              <p className="camp-description">{camp.description}</p>
              <p className="camp-notes">{camp.notes}</p>
              <a
                className="camp-link"
                href={camp.link}
                target="_blank"
                rel="noreferrer"
              >
                View details
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
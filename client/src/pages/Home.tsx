import React from "react";
import "styles/home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Tetons Itinerary Builder</h1>
        <p>Plan your perfect adventure in Grand Teton National Park</p>
        <button className="primary-btn">Build My Itinerary</button>
      </header>

      <section className="features">
        <div className="feature-card">
          <h3>🗺️ Smart Planning</h3>
          <p>Create day-by-day itineraries based on your interests.</p>
        </div>

        <div className="feature-card">
          <h3>🥾 Trails & Activities</h3>
          <p>Explore hikes, lakes, wildlife, and scenic routes.</p>
        </div>

        <div className="feature-card">
          <h3>📅 Save & Edit</h3>
          <p>Update your plan anytime and access it anywhere.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

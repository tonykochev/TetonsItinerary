import React from "react";
import "styles/home.css";
import meImg from "assets/me.jpg";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="hero">
        <h1>Tetons Itinerary Builder</h1>
        <p>Plan your perfect adventure in Grand Teton National Park</p>
        <button className="primary-btn" onClick={() => navigate("/hikes")}>
          Build My Itinerary
        </button>
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

      <section className="about">
        <div className="about-image">
            <img src={meImg} alt="Me" />
        </div>

        <div className="about-text">
            <h2>About Me</h2>
                <p>
                Hi! I’m Tony, a computer science and data science student who loves building
                useful apps and exploring national parks. I created the Tetons Itinerary
                Builder to help people plan unforgettable trips without the stress of
                figuring everything out themselves.
                </p>
            </div>
        </section>

    </div>

    
  );
};

export default Home;

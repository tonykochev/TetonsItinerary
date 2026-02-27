import React from "react";
import "styles/home.css";
import meImg from "src/assets/me.jpg";
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
        <div 
          className="feature-card clickable"
          onClick={() => navigate("/planning")}
          >
          <h3>🗺️ Smart Planning</h3>
          <p>Create day-by-day itineraries based on your interests.</p>
        </div>

        <div 
          className="feature-card clickable"
          onClick={() => navigate("/hikes")}
          >
          <h3>🥾 Trails</h3>
          <p>Explore hikes, lakes, wildlife, and scenic routes.</p>
        </div>

        <div className="feature-card clickable"
        onClick={() => navigate("/camping")}
        >
          <h3>🏕️ Camping</h3>
          <p>Explore the Tetons camping grounds.</p>
        </div>
      </section>

      <section className="about">
        <div className="about-image">
            <img src={meImg} alt="Me" />
        </div>

        <div className="about-text">
            <h2>About Me</h2>
                <p>
                Hey! I'm Tony. I created this site to share the kind of trip planning I’ve learned 
                through years of exploring national parks firsthand. I’ve spent a full week camping 
                and hiking in Grand Teton National Park after driving out from the Midwest, and I’m 
                returning this summer—this website is part of how I’m planning that trip. My experience 
                includes backpacking and camping in Zion National Park, hiking Angels Landing, and camping 
                and exploring trails throughout Yosemite National Park. I’ve also hiked sections of the 
                Appalachian Trail in Great Smoky Mountains National Park, climbed three 14ers in Colorado, 
                and spent time backcountry and public land camping in the Rockies. My love for the outdoors 
                started as a kid on family trips to places like the Grand Canyon, and it’s grown into 
                a passion for planning smart, realistic adventures. This site reflects real experience on 
                the trail and is designed to help others plan a trip to the Tetons with confidence.
                </p>
            </div>
        </section>

    </div>

    
  );
};

export default Home;

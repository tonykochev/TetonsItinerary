import React from "react";
import "styles/planning.css";

const Planning: React.FC = () => {
  return (
    <div className="planning-page">
      <section className="planning-hero">
        <h1>Plan Your Trip to the Tetons</h1>
        <p>Your adventure starts here.</p>
      </section>

      <section className="planning-section">
        <h2>Why Grand Teton National Park?</h2>
        <p>
          Grand Teton National Park is one of the most
          breathtaking places in the United States, with towering mountain peaks,
          bright-blue alpine lakes, and endless hiking opportunities. Whether you're
          here for wildlife, photography, or serious hiking, the Tetons have something
          for everyone.
        </p>
      </section>

      <section className="planning-section">
        <h2>Why Planning Is Hard</h2>
        <p>
          Planning a trip to the Tetons can be overwhelming. There are dozens of trails,
          multiple campgrounds, lodging options, restaurants, and gear considerations.
          You have to think about weather, trail difficulty, distance, elevation gain,
          and how to fit everything into just a few days.
        </p>
        <p>
          Most people end up jumping between Google, AllTrails, park maps, and random
          blogs trying to piece together a plan.
        </p>
      </section>

      <section className="planning-section">
        <h2>How This Website Helps</h2>
        <p>
          This website puts everything you need in one place:
        </p>
        <ul>
          <li>🥾 Hiking trails</li>
          <li>🍔 Restaurants and food stops</li>
          <li>🏕️ Campgrounds and lodging</li>
          <li>🎒 Gear recommendations</li>
          <li>📍 Scenic spots and activities</li>
        </ul>
      </section>

      <section className="planning-section">
        <h2>How To Use The Itinerary Builder</h2>
        <ol>
          <li>
            Browse through trails, food, camping, and activities.
          </li>
          <li>
            Select the things you want to do on your trip.
          </li>
          <li>
            Your selections get sent to the itinerary builder page.
          </li>
          <li>
            Organize them by day to create your personalized plan.
          </li>
          <li>
            Save your itinerary and edit it anytime.
          </li>
        </ol>
        <p>
          Instead of guessing what to do, you build a trip that fits your time,
          fitness level, and interests.
        </p>
      </section>
    </div>
  );
};

export default Planning;

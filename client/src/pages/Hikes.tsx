import React, {useState} from "react";
import "styles/hikes.css";

type Hike = {
  name: string;
  distance: string;
  difficulty: "Easy" | "Moderate" | "Hard";
  elevation: string;
  description: string;
};

const hikes: Hike[] = [
    
  {
    name: "Alaskin Basin Trail",
    distance: "16 miles, Loop",
    difficulty: "Hard",
    elevation: "3000 feet",
    description: "A harder hike from Death Canyon Trail to the Alaskin Basin used by climbers attempting ascents of Buck Mountain."
  },
  {
    name: "Amphitheater Lake Trail",
    distance: "10 miles Out and Back",
    difficulty: "Hard",
    elevation: "3150 feet",
    description: "Two Alpine Lakes in one hike, but you will pay for it!"
  },
  {
    name: "Berry Creek Trail",
    distance: "20 miles, Loop",
    difficulty: "Hard",
    elevation: "2132 feet",
    description: "Trail is closed, not connected to maintained trails, located in the remote northern backcountry."
  },
  {
    name: "Bradly Lake Trail",
    distance: "5 miles, Loop",
    difficulty: "Easy",
    elevation: "650 feet",
    description: "Great view of the Tetons when hiking counterclockwise, well marked and maintained. Great in the fall."
  },
  {
    name: "Cascade Canyon Trail",
    distance: "9.3 miles, Out & Back",
    difficulty: "Moderate",
    elevation: "1118 feet",
    description: "One of the best hikes in the park. Can make it shorter by taking the Jenny Lake shuttle boat."
  },
  {
    name: "Colter Bay Lakeshore Trail",
    distance: "2.6 miles, Loop",
    difficulty: "Easy",
    elevation: "85 feet",
    description: "This trail treats hikers to awe-inspiring views of Jackson Lake, complemented by the majestic Teton Range as a backdrop."
  },
  {
    name: "Death Canyon Trail",
    distance: "7.7 miles, Out and Back",
    difficulty: "Hard",
    elevation: "2400 feet",
    description: "Spectacular viws of Phelps Lake and surrounding peaks. Trail winds thorugh forests and rocky slopes!"
  },
  {
    name: "Emma Matilda Lake Trail",
    distance: "11 miles, Loop",
    difficulty: "Moderate",
    elevation: "1072 feet",
    description: "Popular trail for birding and hiking!"
  },
  {
    name: "Garnet Canyon Trail",
    distance: "8.2 miles, Out & Back",
    difficulty: "Hard",
    elevation: "2430 feet",
    description: "Difficult hike with crossing a boulder field but are surrounded by the most prominent peaks in the park."
  },
  {
    name: "Garnet Canyon Trail",
    distance: "8.2 miles, Out & Back",
    difficulty: "Hard",
    elevation: "2430 feet",
    description: "Difficult hike with crossing a boulder field but are surrounded by the most prominent peaks in the park."
  },
  
];

const Hikes: React.FC = () => {
    const [selectedHikes, setSelectedHikes] = useState<string[]>([]);

    const toggleHike = (name: string) => {
        setSelectedHikes(prev => 
            prev.includes(name)
            ? prev.filter(h => h !== name)
            : [...prev, name] 
        );
    };
  return (
    <div className="hikes-page">
      <h1>Hikes in the Tetons</h1>

      <div className="hikes-list">
        {hikes.map((hike, index) => (
          <div className="hike-card" key={index}>
            <div className="hike-header">
              <h2>{hike.name}</h2>

              {/* Selection box */}
              <input
                type="checkbox"
                checked={selectedHikes.includes(hike.name)}
                onChange={() => toggleHike(hike.name)}
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

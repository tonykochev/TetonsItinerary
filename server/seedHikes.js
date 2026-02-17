require("dotenv").config();
const mongoose = require("mongoose");
const Hike = require("./src/models/Hike");

mongoose.connect(process.env.MONGO_URI);

const hikes = [
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
    name: "Delta Lake via Lupine Meadows",
    distance: "7.6 miles, Out and Back",
    difficulty: "Hard",
    elevation: "2300 feet",
    description: "One of the most popular back country trails in the park with a beautiful end point"
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
    name: "Grand Teton via Owen-Splading Route",
    distance: "16.2 miles, Out and Back",
    difficulty: "Hard",
    elevation: "7100 feet",
    description: "The top of The Grand Teton National Park, 13,770 feet. Class 2/3 scrambling."
  },
  {
    name: "Hermitage Point Trail",
    distance: "10 miles, Loop",
    difficulty: "Easy",
    elevation: "816 feet",
    description: "Long forest trail with a great payoff at the end. Remote and peaceful"
  },
  {
    name: "Heron Pond Swan Lake Trail",
    distance: "3.2 miles, Loop",
    difficulty: "Easy",
    elevation: "236 feet",
    description: "Pleasant and quiet trail with beautiful views."
  },
  {
    name: "Jenny Lake Trail",
    distance: "7.5 miles, Loop",
    difficulty: "Moderate",
    elevation: "472 feet",
    description: "A scenic loop around Jenny Lake with mountain views."
  },
  {
    name: "Lake Solitude Trail",
    distance: "16.8 miles, Out & Back",
    difficulty: "Moderate",
    elevation: "2654 feet",
    description: "Easy trail to follow with amazing views throughout. Not technical just long."
  },
  {
    name: "Leigh Lake Trail",
    distance: "7.3 miles, Out & Back",
    difficulty: "Easy",
    elevation: "114 feet",
    description: "Trail follows Leigh Lake thorugh a beutiful wooded area."
  },
  {
    name: "Middle Teton and South Teton",
    distance: "14.9 miles, Out and Back",
    difficulty: "Hard",
    elevation: "7300 feet",
    description: "Standard Middel Teton route, Class 3 scrambling for long sections, requires alpine navigation."
  },
  {
    name: "Mount Teewinot",
    distance: "6.4 miles, Out and Back",
    difficulty: "Hard",
    elevation: "5524 feet",
    description: "Mountaineering route with a class 5 move, and multiple class 3/4 scrambling."
  },
  {
    name: "Open Canyon and Granit Canyon Loop",
    distance: "19.5 miles, Loop",
    difficulty: "Hard",
    elevation: "3795 feet",
    description: "Great trail for backpacking, camping, and hiking. Unlikely you'll encounter others."
  },
  {
    name: "Open Canyon to Marion Lake",
    distance: "27.8 miles, Out & Back",
    difficulty: "Hard",
    elevation: "6246 feet",
    description: "Mostly wooded, not many views, one waterfall, snow thoruhg July."
  },
  {
    name: "Paintbruch Canyon - Cascade Canyon Loop",
    distance: "19.3 miles, Loop",
    difficulty: "Hard",
    elevation: "4133 feet",
    description: "The route crosses scree slopes and a high alpine divide that retain snow late into summer."
  },
  {
    name: "The Grand Teton Loop Trail",
    distance: "36 miles, Loop",
    difficulty: "Hard",
    elevation: "6978 feet",
    description: "Gorgeous scenic trail, stunning views from high up."
  },
  {
    name: "String Lake Trail",
    distance: "3.7 miles, Loop",
    difficulty: "Easy",
    elevation: "262 feet",
    description: "This trail has it all and will give you many opportunities to see the area's beauty and wildlife."
  },
  {
    name: "Teton Crest Trail",
    distance: "40 miles, Point to Point",
    difficulty: "Hard",
    elevation: "9045 feet",
    description: "Magnificent hike offering beautiful mountain views and wildflowers along the route."
  },
  {
    name: "Webb Canyon Trail-Moose Basin Divide-Owl Creek Canyon",
    distance: "31.4 miles, Loop",
    difficulty: "Hard",
    elevation: "4917 feet",
    description: "Quiet and remote, overnighter, increadible scenery"
  },
];

async function seed() {
  await Hike.deleteMany();
  await Hike.insertMany(hikes);
  console.log("Hikes seeded!");
  mongoose.disconnect();
}

seed();

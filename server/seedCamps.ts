import mongoose from "mongoose";
import dotenv from "dotenv";
import Camp from "./src/models/Camp";

dotenv.config();

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error("MONGO_URI is not defined");
}

mongoose.connect(mongoUri);

const camps = [
  {
    name: "Jenny Lake Campground",
    type: "campground",
    description: "Popular campground near Jenny Lake with quick access to trails.",
    notes: "Tent only, first-come-first-served.",
    link: "https://www.nps.gov/grte/planyourvisit/jenny-lake-campground.htm"
  },
  {
    name: "Signal Mountain Campground",
    type: "campground",
    description: "Large campground with views of Jackson Lake.",
    notes: "Electric hookups available.",
    link: "https://www.nps.gov/grte/planyourvisit/signal-mountain-campground.htm"
  },
  {
    name: "Colter Bay Campground",
    type: "campground",
    description: "Big campground near Colter Bay Village and marina.",
    notes: "Reservations recommended.",
    link: "https://www.nps.gov/grte/planyourvisit/colter-bay-campground.htm"
  },
  {
    name: "Gros Ventre Campground",
    type: "campground",
    description: "Quiet campground near Moose with river access.",
    notes: "Good for wildlife viewing.",
    link: "https://www.nps.gov/grte/planyourvisit/gros-ventre-campground.htm"
  },
  {
    name: "Cascade Canyon South Fork",
    type: "backcountry",
    description: "Backcountry zone deep in Cascade Canyon.",
    notes: "Permit required.",
    link: "https://www.nps.gov/grte/planyourvisit/backcountry-camping.htm"
  },
  {
    name: "Death Canyon Shelf",
    type: "backcountry",
    description: "High alpine shelf above Death Canyon.",
    notes: "Spectacular views, tough climb.",
    link: "https://www.nps.gov/grte/planyourvisit/backcountry-camping.htm"
  },
  {
    name: "Paintbrush Canyon",
    type: "backcountry",
    description: "Popular zone on Paintbrush Divide route.",
    notes: "Bear canister required.",
    link: "https://www.nps.gov/grte/planyourvisit/backcountry-camping.htm"
  },
  {
    name: "Alaska Basin",
    type: "backcountry",
    description: "Remote zone on the west side of the Tetons.",
    notes: "Weather changes fast.",
    link: "https://www.nps.gov/grte/planyourvisit/backcountry-camping.htm"
  }
];

async function seed() {
  try {
    console.log(Camp);
    await Camp.deleteMany();
    await Camp.insertMany(camps);
    console.log("Camps seeded!");
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    mongoose.disconnect();
  }
}

seed();
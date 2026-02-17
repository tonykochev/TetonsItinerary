import mongoose, { Schema, Document } from "mongoose";

export interface IHike extends Document {
  name: string;
  distance: string;
  difficulty: string;
  elevation: string;
  description: string;
}

const hikeSchema: Schema<IHike> = new Schema({
  name: { type: String, required: true },
  distance: { type: String, required: true },
  difficulty: { type: String, required: true },
  elevation: { type: String, required: true },
  description: { type: String, required: true },
});

const Hike = mongoose.model<IHike>("Hike", hikeSchema);

export default Hike;

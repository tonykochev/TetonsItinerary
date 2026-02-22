import mongoose, { Schema, Document } from "mongoose";

export interface ICamp extends Document{
    name: String,
    type: String, // "campground" or "backcountry"
    description: String,
    notes: String,
    link: String
}

const campSchema: Schema<ICamp> = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    notes: { type: String, required: true },
    link: { type: String, required: true },
});

const Camp = mongoose.model<ICamp>("Camp", campSchema);

export default Camp;

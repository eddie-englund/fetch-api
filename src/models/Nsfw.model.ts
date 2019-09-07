import { Schema, model } from 'mongoose';
import timestamp = require('mongoose-timestamp');

const NsfwSchema: Schema = new Schema({
  title: { type: String, required: true },
  body: String,
  url: { type: String, required: true },
  image: { type: String, required: true },
  subreddit: String,
  timestamp: { type: Date, default: Date.now() },
});

NsfwSchema.plugin(timestamp);

export default model('Nsfw', NsfwSchema);

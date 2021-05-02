import * as mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  name: String,
  type: Number,
  rating: Number,
  address: String,
  email: String,
  phone: String,
  latitude: Number,
  longitude: Number
});

const Location = mongoose.model('Location', locationSchema);

export default Location;

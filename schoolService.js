
const Joi = require('joi');
const db = require('./db');

const schoolSchema = Joi.object({
  name: Joi.string().trim().min(2).max(255).required(),
  address: Joi.string().trim().min(2).max(255).required(),
  latitude: Joi.number().min(-90).max(90).required(),
  longitude: Joi.number().min(-180).max(180).required()
});

function addSchool({ name, address, latitude, longitude }, callback) {
  const { error } = schoolSchema.validate({ name, address, latitude, longitude });
  if (error) {
    return callback({ error: error.details[0].message });
  }
  const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) return callback({ error: 'Database error' });
    callback(null, { message: 'School added', id: result.insertId });
  });
}

function getDistance(lat1, lng1, lat2, lng2) {
  const toRad = deg => deg * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat/2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLng/2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return 6371 * c;
}

function listSchools(userLat, userLng, callback) {
  if (isNaN(userLat) || isNaN(userLng)) {
    return callback({ error: 'Invalid coordinates' });
  }
  db.query('SELECT * FROM schools', (err, results) => {
    if (err) return callback({ error: 'Database error' });
    const schools = results.map(school => ({
      ...school,
      distance: getDistance(userLat, userLng, school.latitude, school.longitude)
    }));
    schools.sort((a, b) => a.distance - b.distance);
    callback(null, schools);
  });
}

module.exports = { addSchool, listSchools };

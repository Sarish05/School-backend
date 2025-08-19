const db = require('./db');

const sampleSchools = [
  { name: 'Delhi Public School', address: 'Mathura Road, New Delhi', latitude: 28.5826, longitude: 77.2517 },
  { name: 'The Navodaya School', address: 'Mall Road, Dehradun', latitude: 30.3256, longitude: 78.0330 },
  { name: 'Ferguson College', address: 'FC road, Pune', latitude: 26.8467, longitude: 80.9462 },

];

sampleSchools.forEach((school) => {
  const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  db.query(sql, [school.name, school.address, school.latitude, school.longitude], (err, result) => {
    if (err) {
      console.error('Error inserting:', school.name, err);
    } else {
      console.log('Inserted:', school.name);
    }
  });
});


setTimeout(() => db.end(), 1000);

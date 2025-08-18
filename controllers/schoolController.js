const schoolService = require('../schoolService');

const addSchoolController = (req, res) => {
  schoolService.addSchool(req.body, (err, result) => {
    if (err) return res.status(400).json(err);
    res.json(result);
  });
};

const listSchoolsController = (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLng = parseFloat(req.query.longitude);
  schoolService.listSchools(userLat, userLng, (err, schools) => {
    if (err) return res.status(400).json(err);
    res.json(schools);
  });
};

module.exports = { addSchoolController, listSchoolsController };

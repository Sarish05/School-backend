const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const { addSchoolController, listSchoolsController } = require('./controllers/schoolController');

app.post('/addSchool', addSchoolController);
app.get('/listSchools', listSchoolsController);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

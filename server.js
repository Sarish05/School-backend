const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const { addSchoolController, listSchoolsController } = require('./controllers/schoolController');

app.post('/addSchool', addSchoolController);
app.get('/listSchools', listSchoolsController);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

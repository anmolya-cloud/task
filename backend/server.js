const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('backend\config\database.js');
const taskRoutes = require('backend\routes\taskRoutes.js')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', taskRoutes);

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('Unable to connect to the database:', err));

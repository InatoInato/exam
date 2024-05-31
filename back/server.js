const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/router.js');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors())
app.use(bodyParser.json());
app.use('/api/users', routes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

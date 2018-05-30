const express = require('express');
const cors = require('cors')({origin: true})
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 8080;

app.use(cors)
app.use(bodyParser())

require('./server/routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

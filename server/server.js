const express = require('express');
const cors = require('cors');

const db = require('./db');

const app = express();
const membersRouter = require('./routes/members-route');
const apiPort = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use('/', membersRouter);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
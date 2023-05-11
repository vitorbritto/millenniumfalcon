import express from 'express';
// import cors from 'cors';

import { getPeople, getPerson } from './repositories/people.repository';

const app = express();

// app.use(cors());

app.get('/api/people', (req, res) => {
  res.send(getPeople());
});

app.get('/api/people/:id', (req, res) => {
  res.send(getPerson(req.params.id));
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

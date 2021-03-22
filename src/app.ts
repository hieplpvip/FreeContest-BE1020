import express from 'express';
import cors from 'cors';
import { GeneralResponse, PostRegistrationRequest, GetRegistrationResponse } from './interface';
import { getTimestamp, hashPassword } from './utils';
import { newUser, getAllUsers } from './database';

const app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/timestamp', (req, res) => {
  res.json({ timestamp: getTimestamp() });
});

app.post('/registrations', (req, res) => {
  const data: PostRegistrationRequest = req.body;
  newUser(data.username, data.displayed_name, hashPassword(data.password))
    .then(() => res.json(<GeneralResponse>{ error: 0 }))
    .catch(() => res.json(<GeneralResponse>{ error: 1 }));
});

app.get('/registrations', (req, res) => {
  getAllUsers()
    .then((data) => res.json(<GetRegistrationResponse>{ error: 0, data }))
    .catch(() => res.json(<GeneralResponse>{ error: 1 }));
});

app.listen(app.get('port'), () => {
  console.log(`server running on port ${app.get('port')}`);
});

import * as bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import { notFoundErrorHandler,errorHandler } from '../middlewares/api-error-handler.middleware';
import indexRoute from '../routes/index.route';
import constants from '../constants';


const app = express();

app.use((req, res, next) => {
  const origin = req.get('origin');

  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE',
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma, Access-Control-Request-Method, Access-Control-Allow-Headers, Access-Control-Request-Headers',
  );

  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
});

const corsOption = {
  origin: [process.env.BASE_APP_URL],
  methods: 'GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE',
  credentials: true,
};

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(constants.APPLICATION.url.basePath, indexRoute);
app.use(notFoundErrorHandler);
app.use(errorHandler);
app.use(express.static(path.join(__dirname, 'public')));

export default app;

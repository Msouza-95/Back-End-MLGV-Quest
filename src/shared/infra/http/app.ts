import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';
import '@shared/infra/typeorm/index';
import '@shared/container/index';

import express, { NextFunction, Request, Response } from 'express';

import AppError from '../../errors/AppError';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// app.use(
//   (error: Error, request: Request, response: Response, _next: NextFunction) => {
//     if (error instanceof AppError) {
//       return response.status(error.statusCode).json({ message: error.message });
//     }
//     return response.status(500).json({
//       type: 'error',
//       message: 'Internal Server Error! ',
//       error: error.message,
//     });
//   },
// );

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888/%27%27');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type',
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Pass to next layer of middleware
  next();
});

export default app;

import { createConnection } from 'typeorm';

export default createConnection().then(async conn => {
  console.log('Connection established...');

  return conn;
});

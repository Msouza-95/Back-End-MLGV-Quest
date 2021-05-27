// import { createConnection, getConnectionOptions } from 'typeorm';

// interface IConnectionOptions {
//   host: string;
// }

// getConnectionOptions().then(options => {
//   const newOptions = options as IConnectionOptions;
//   newOptions.host = 'database'; // Esta opção deve estar exatamente com o mesmo nome definido no arquivo docker-compose.yml

//   createConnection({
//     ...options,
//   });
// });


import { createConnection } from 'typeorm';


export default createConnection().then(async conn => {
  console.log('Connection established...');
  
  return conn;
});
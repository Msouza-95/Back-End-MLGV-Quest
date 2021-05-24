import { Connection, createConnection, getConnectionOptions } from 'typeorm';

interface IConnectionOptions {
  host: string;
}

// export default async (): Promise<Connection> => {
//   const defaultOptions = await getConnectionOptions();

//   return createConnection(
//     Object.assign(defaultOptions, {
//       database:
//         process.env.NODE_ENV === 'test' ? 'mlgv_db' : defaultOptions.database,
//     }),
//   );
// };

getConnectionOptions().then(options => {
  const newOptions = options as IConnectionOptions;
  newOptions.host = 'database'; // Esta opção deve estar exatamente com o mesmo nome definido no arquivo docker-compose.yml

  createConnection({
    ...options,
  });
});

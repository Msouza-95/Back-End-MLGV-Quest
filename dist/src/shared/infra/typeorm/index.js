"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _default = async (name = 'default') => {
  const defaultOptions = await (0, _typeorm.getConnectionOptions)();
  return (0, _typeorm.createConnection)(Object.assign(defaultOptions, {
    name,
    database: process.env.NODE_ENV === 'test' ? 'app' : defaultOptions.database
  }));
}; // interface IConnectionOptions {
//   host: string;
// }
// export default async (): Promise<Connection> => {
//   const defaultOptions = await getConnectionOptions();
//   return createConnection(
//     Object.assign(defaultOptions, {
//       database: defaultOptions.database,
//     }),
//   );
// };
// getConnectionOptions().then(options => {
//   const newOptions = options as IConnectionOptions;
//   newOptions.host = 'database'; // Esta opção deve estar exatamente com o mesmo nome definido no arquivo docker-compose.yml
//   createConnection({
//     ...options,
//   });
// });


exports.default = _default;
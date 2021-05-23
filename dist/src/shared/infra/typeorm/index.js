"use strict";

var _typeorm = require("typeorm");

(0, _typeorm.getConnectionOptions)().then(options => {
  const newOptions = options;
  newOptions.host = 'database'; // Esta opção deve estar exatamente com o mesmo nome definido no arquivo docker-compose.yml

  (0, _typeorm.createConnection)({ ...options
  });
});
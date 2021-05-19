"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
typeorm_1.getConnectionOptions().then(options => {
    const newOptions = options;
    newOptions.host = 'database'; // Esta opção deve estar exatamente com o mesmo nome definido no arquivo docker-compose.yml
    typeorm_1.createConnection({
        ...options,
    });
});

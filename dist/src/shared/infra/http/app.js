"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("reflect-metadata");

require("express-async-errors");

require("dotenv/config");
<<<<<<< HEAD

require("../typeorm");

require("../../container");

var _express = _interopRequireDefault(require("express"));

var _AppError = _interopRequireDefault(require("../../errors/AppError"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_routes.default);
=======
//import '@shared/infra/typeorm';
require("@shared/container");
const express_1 = __importDefault(require("express"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.default);
>>>>>>> develop
app.use((error, request, response, _next) => {
  if (error instanceof _AppError.default) {
    return response.status(error.statusCode).json({
      message: error.message
    });
  }

  return response.status(500).json({
    type: 'error',
    message: 'Internal Server Error! ',
    error: error.message
  });
});
var _default = app;
exports.default = _default;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const auths_1 = __importDefault(require("@config/auths"));
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppError_1.default('Token missing', 401);
    }
    const [, token] = authHeader.split(' ');
    try {
        const { sub: user_id } = jsonwebtoken_1.verify(token, auths_1.default.jwt.secret);
        request.user = {
            id: user_id,
        };
        if (!request.user) {
            throw new AppError_1.default('user does not exists');
        }
        next();
    }
    catch {
        throw new AppError_1.default('Invalid token', 401);
    }
}
exports.default = ensureAuthenticated;

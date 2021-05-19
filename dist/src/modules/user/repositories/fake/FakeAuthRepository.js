"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FakeAuthRepository {
    constructor() {
        this.auths = [];
    }
    async findByUserID(user_id) {
        const findAuth = this.auths.find(auth => auth.user_id === user_id);
        return findAuth;
    }
    async create(user_id, password) {
        throw new Error('Method not implemented.');
    }
}
exports.default = FakeAuthRepository;

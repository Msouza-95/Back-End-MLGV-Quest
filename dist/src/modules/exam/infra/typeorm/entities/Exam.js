"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusEnum = void 0;
const typeorm_1 = require("typeorm");
const Period_1 = __importDefault(require("./Period"));
var statusEnum;
(function (statusEnum) {
    statusEnum["active"] = "active";
    statusEnum["inactive"] = "inactive";
})(statusEnum = exports.statusEnum || (exports.statusEnum = {}));
let Exam = class Exam {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Exam.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Exam.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Exam.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Exam.prototype, "started_at", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Exam.prototype, "ended_at", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Exam.prototype, "allow_anonymous", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: statusEnum, default: statusEnum.active }),
    __metadata("design:type", String)
], Exam.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Exam.prototype, "url", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Exam.prototype, "period_id", void 0);
__decorate([
    typeorm_1.OneToOne(() => Period_1.default),
    typeorm_1.JoinColumn({ name: 'period_id' }),
    __metadata("design:type", Period_1.default)
], Exam.prototype, "period", void 0);
Exam = __decorate([
    typeorm_1.Entity('exam')
], Exam);
exports.default = Exam;

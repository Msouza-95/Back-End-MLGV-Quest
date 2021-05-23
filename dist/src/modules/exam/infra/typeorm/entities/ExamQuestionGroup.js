"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Question = _interopRequireDefault(require("./Question"));

var _QuestionGroup = _interopRequireDefault(require("./QuestionGroup"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let ExamQuestionGroup = (_dec = (0, _typeorm.Entity)('examQuestionGroup'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)(), _dec3 = Reflect.metadata("design:type", Number), _dec4 = (0, _typeorm.Column)(), _dec5 = Reflect.metadata("design:type", Number), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", Number), _dec8 = (0, _typeorm.Column)(), _dec9 = Reflect.metadata("design:type", Number), _dec10 = (0, _typeorm.OneToMany)(() => _Question.default, question => question.examQuestionGroup), _dec11 = Reflect.metadata("design:type", Array), _dec12 = (0, _typeorm.ManyToOne)(() => _QuestionGroup.default, questionGroup => questionGroup.examQuestionGroups), _dec13 = (0, _typeorm.JoinColumn)({
  name: 'question_group_id'
}), _dec14 = Reflect.metadata("design:type", typeof _QuestionGroup.default === "undefined" ? Object : _QuestionGroup.default), _dec(_class = (_class2 = class ExamQuestionGroup {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "position", _descriptor2, this);

    _initializerDefineProperty(this, "exam_id", _descriptor3, this);

    _initializerDefineProperty(this, "question_group_id", _descriptor4, this);

    _initializerDefineProperty(this, "questions", _descriptor5, this);

    _initializerDefineProperty(this, "questionGroup", _descriptor6, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "position", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "exam_id", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "question_group_id", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "questions", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "questionGroup", [_dec12, _dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = ExamQuestionGroup;
exports.default = _default;
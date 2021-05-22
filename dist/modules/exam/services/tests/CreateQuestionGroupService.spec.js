"use strict";

var _FakeQuestionGroupRepository = _interopRequireDefault(require("../../repositories/fake/FakeQuestionGroupRepository"));

var _CreateQuestionGroupService = _interopRequireDefault(require("../CreateQuestionGroupService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeQuestionGroupRepository;
let createQuestionGroupService;
describe('CreateQuenstionGroup', () => {
  beforeEach(() => {
    fakeQuestionGroupRepository = new _FakeQuestionGroupRepository.default();
    createQuestionGroupService = new _CreateQuestionGroupService.default(fakeQuestionGroupRepository);
  });
  it(' should be albe to create a new Exam', async () => {
    const newQuestionGroup = await createQuestionGroupService.execute({
      title: 'title exemple',
      classs: 1
    });
    expect(newQuestionGroup).toHaveProperty('id');
  });
});
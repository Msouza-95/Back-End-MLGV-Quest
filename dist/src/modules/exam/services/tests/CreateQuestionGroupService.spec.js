"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FakeQuestionGroupRepository_1 = __importDefault(require("@modules/exam/repositories/fake/FakeQuestionGroupRepository"));
const CreateQuestionGroupService_1 = __importDefault(require("../CreateQuestionGroupService"));
let fakeQuestionGroupRepository;
let createQuestionGroupService;
describe('CreateQuenstionGroup', () => {
    beforeEach(() => {
        fakeQuestionGroupRepository = new FakeQuestionGroupRepository_1.default();
        createQuestionGroupService = new CreateQuestionGroupService_1.default(fakeQuestionGroupRepository);
    });
    it(' should be albe to create a new Exam', async () => {
        const newQuestionGroup = await createQuestionGroupService.execute({
            title: 'title exemple',
            classs: 1,
        });
        expect(newQuestionGroup).toHaveProperty('id');
    });
});

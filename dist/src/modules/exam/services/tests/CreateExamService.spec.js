"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FakeExamRepository_1 = __importDefault(require("@modules/exam/repositories/fake/FakeExamRepository"));
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const CreateExamService_1 = __importDefault(require("../CreateExamService"));
let fakeExamRepository;
let createExamService;
describe('CreateExam', () => {
    beforeEach(() => {
        fakeExamRepository = new FakeExamRepository_1.default();
        createExamService = new CreateExamService_1.default(fakeExamRepository);
    });
    it(' should be able to create a new Exam', async () => {
        const newExam = await createExamService.execute({
            title: 'TITULO',
            description: 'DESCRIÇÃO ',
            started_at: new Date(),
            ended_at: new Date(),
            allow_anonymous: 1,
            period_id: 1,
        });
        expect(newExam).toHaveProperty('id');
    });
    it('should not able  to create Exam exists', async () => {
        createExamService.execute({
            title: 'TITULO',
            description: 'DESCRIÇÃO ',
            started_at: new Date(),
            ended_at: new Date(),
            allow_anonymous: 1,
            period_id: 1,
        });
        expect(createExamService.execute({
            title: 'TITULO',
            description: 'DESCRIÇÃO ',
            started_at: new Date(),
            ended_at: new Date(),
            allow_anonymous: 1,
            period_id: 1,
        })).rejects.toBeInstanceOf(AppError_1.default);
    });
});

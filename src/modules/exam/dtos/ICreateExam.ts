export default interface ICreateExam {
  title: string;
  description: string;
  started_at: Date;
  ended_at: Date;
  allow_anonymous: boolean;
  period_id: number;
}

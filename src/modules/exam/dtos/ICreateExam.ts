export default interface ICreateExam {
  title: string;
  description: string;
  started_at: Date;
  ended_at: Date;
  allow_anonymous: number;
  period_id?: number;
}

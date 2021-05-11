export default interface IUpdateExam {
  title: string;
  description: string;
  started_at: Date;
  ended_at: Date;
  allow_anonymous: number;
}

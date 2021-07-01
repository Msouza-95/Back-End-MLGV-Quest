interface ICreateUserAnswer {
  question_id: number;
  user_agreement_id: number;
  score?: number;
  comment?: string;
}

export default ICreateUserAnswer;

export default interface ICreateQuestion {
  statement: string;
  image_url: string;
  image_alt: string;
  required: boolean;
  exam_question_group_id: number;
}

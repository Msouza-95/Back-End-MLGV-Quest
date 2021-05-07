export default interface ICreateQuestion {
  statement: string;
  image_ur: string;
  image_alt: string;
  required: boolean;
  exam_question_group_id: number;
}

export interface AnswerType {
  id?: number;
  question_id: number;
  user_id: string;
  answer: string;
  created_at?: string;
}

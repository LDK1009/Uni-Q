export interface Question {
    id?: number;
    major: string;
    category: string;
    question: string;
    gpt_answer: string;
    tags: string[];
    reference_links: string[];
    created_at?: string;
    owner_id?: string;
  }
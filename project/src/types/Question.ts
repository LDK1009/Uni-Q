export interface Question {
    id?: number;
    college:string;
    major: string;
    category: string;
    question: string;
    gpt_answer: string;
    tags: string[];
    reference_links: string[];
    created_at?: string;
    owner_id?: string;
  }
export interface Question {
    id?: number;
    major: string;
    category: string;
    question: string;
    gptAnswer: string;
    tags: string[];
    reference_links: string[];
    created_at?: string;
    owner_id?: string;
  }
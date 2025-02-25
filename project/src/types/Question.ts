export interface Question {
    id: number;
    category: string;
    content: string;
    tags: string[];
    scrapped_users: string[];
    reference_links: string[];
    created_at: string; // ISO 8601 형식의 날짜 문자열
    owner_id: string; // UUID 형식
} 
import React, { useState } from 'react';
import styled from 'styled-components';
import api from '@/lib/apiClient';

interface QuestionItemProps {
    question: {
        id: number;
        content: string;
        tags: string[];
    };
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question }) => {
    const [gptAnswer, setGptAnswer] = useState<string | null>(null); // GPT 답변 상태

    const handleGptResponse = async () => {
        try {
            const response = await api.post('gpt', { questionContent: question.content });
            const answer = response.data; // GPT API 호출
            setGptAnswer(answer); // 답변 상태 업데이트
        } catch (error) {
            console.error('Error fetching GPT response:', error);
        }
    };

    return (
        <ItemContainer>
            <h3>면접 질문 #{question.id}</h3>
            <p>{question.content}</p>
            <div className="tags">
                {question.tags.map((tag, index) => (
                    <Tag key={index}>#{tag}</Tag>
                ))}
            </div>
            <Button onClick={handleGptResponse}>GPT 모범답안 보기</Button>
            {gptAnswer && <AnswerContainer>{gptAnswer}</AnswerContainer>} {/* GPT 답변 표시 */}
        </ItemContainer>
    );
};

export default QuestionItem;

const ItemContainer = styled.div`
    border: 1px solid #ccc;
    padding: 16px;
    margin: 8px 0;
    border-radius: 8px;
    background-color: #f9f9f9;
`;

const Tag = styled.span`
    background-color: #e0e0e0;
    border-radius: 4px;
    padding: 4px 8px;
    margin-right: 4px;
`;

const Button = styled.button`
    margin-right: 8px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const AnswerContainer = styled.div`
    margin-top: 16px;
    padding: 12px;
    border: 1px solid #007bff;
    border-radius: 4px;
    background-color: #e7f3ff;
`;

import React from 'react';
import styled from 'styled-components';


interface QuestionItemProps {
    question: {
      id: number;
      content: string;
      tags: string[];
    };
  }
  
  
const QuestionItem: React.FC<QuestionItemProps> = ({ question }) => {
  return (
    <ItemContainer>
      <h3>면접 질문 #{question.id}</h3>
      <p>{question.content}</p>
      <div className="tags">
        {question.tags.map((tag, index) => (
          <Tag key={index}>#{tag}</Tag>
        ))}
      </div>
      <Button>답변하기 (60초)</Button>
      <Button>GPT 모범답안 보기</Button>
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

"use client";

import QuestionItem from './QuestionItem';
import styled from 'styled-components';
import { Question } from '@/types/Question';

interface QuestionListProps {
  questions: Question[];
}

const QuestionList = ({ questions } : QuestionListProps) => {

  if (questions.length === 0) {
    return <p>질문이 없습니다.</p>; // 질문이 없을 경우 메시지 표시
  }

  return (
    <ListContainer>
      {questions.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </ListContainer>
  );
};

export default QuestionList; 

const ListContainer = styled('div')`
  padding: 16px;
`;
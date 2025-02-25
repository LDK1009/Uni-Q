import React from 'react';
import { useQuestionsStore } from '../store';
import QuestionItem from './QuestionItem';
import styled from 'styled-components';



const QuestionList: React.FC = () => {
  const { questions, fetchQuestions } = useQuestionsStore();

  React.useEffect(() => {
    fetchQuestions(); // 데이터 패칭
  }, [fetchQuestions]);

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

const ListContainer = styled.div`
  padding: 16px;
`;
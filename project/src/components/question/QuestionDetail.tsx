"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/apiClient";
import QuestionItem from "./QuestionItem";

const QuestionDetail: React.FC<{ id: string }> = ({ id }) => {
  const [question, setQuestion] = useState();

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await api.get(`questions?id=${id}`);
        setQuestion(response.data);
      } catch (error) {
        console.error("질문을 가져오는 중 오류 발생:", error);
      }
    };

    fetchQuestion();
  }, [id]);

  if (!question) {
    return <p>질문을 로딩 중입니다...</p>;
  }

  return (
    <div>
      <QuestionItem itemData={question}/>
    </div>
  );
};

export default QuestionDetail;

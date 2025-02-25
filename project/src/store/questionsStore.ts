import { create } from 'zustand';
import { Question } from '../types/Question';
import api from '../lib/apiClient';

interface QuestionsState {
    questions: Question[];
    fetchQuestions: () => Promise<void>;
    addQuestion: (newQuestion: Question) => void;
    updateQuestion: (updatedQuestion: Question) => void;
    deleteQuestion: (id: number) => void;
}

export const useQuestionsStore = create<QuestionsState>((set) => ({
    questions: [],
    fetchQuestions: async () => {
        try {
            const response = await api.get('questions');
            console.log(response);
            set({ questions: response.data });
        } catch (error) {
            console.error('질문을 가져오는 중 오류 발생:', error);
        }
    },
    addQuestion: (newQuestion) => set((state) => ({
        questions: [...state.questions, newQuestion],
    })),
    updateQuestion: (updatedQuestion) => set((state) => ({
        questions: state.questions.map((q) => (q.id === updatedQuestion.id ? updatedQuestion : q)),
    })),
    deleteQuestion: (id) => set((state) => ({
        questions: state.questions.filter((q) => q.id !== id),
    })),
})); 
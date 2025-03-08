import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api', // 여기에 실제 API의 base URL을 입력하세요
});

export default api; 
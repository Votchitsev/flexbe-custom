import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const queryClient = new QueryClient();

export default axiosInstance;

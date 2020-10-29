import apiClient from './client';


const getChats = () => apiClient.get('/chats');

export default getChats;
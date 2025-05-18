import { Dispatch, SetStateAction } from 'react';
import api from '../services/api';
import { User } from '../types/User';

// 🔁 Função que carrega os usuários da API
export const fetchUsersAgain = async (
  setUsers: Dispatch<SetStateAction<User[]>>
) => {
  try {
    const response = await api.get('/users');
    setUsers(response.data);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
};

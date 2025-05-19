import { Dispatch, SetStateAction } from 'react';
import api from '../services/api';
import { User } from '../types/User';

/**
 * Função assíncrona para buscar a lista de usuários na API
 * e atualizar o estado de usuários no componente React.
 *
 * @param setUsers - Função para atualizar o estado dos usuários (React state setter)
 */
export const fetchUsersAgain = async (
  setUsers: Dispatch<SetStateAction<User[]>>
) => {
  try {
    // Realiza uma requisição GET para o endpoint '/users' da API
    const response = await api.get('/users');

    // Atualiza o estado com os dados recebidos da API
    setUsers(response.data);
  } catch (error) {
    // Loga qualquer erro que ocorrer durante a requisição
    console.error('Erro ao buscar usuários:', error);
  }
};

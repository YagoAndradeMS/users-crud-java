// Importa ícones da biblioteca FontAwesome
import {
  faCaretDown,
  faUser,
  faVoicemail,
} from '@fortawesome/free-solid-svg-icons';

// Importa o componente de Input customizado
import { Input } from './input';

// Importa o componente de botão customizado
import { Button } from '../ui/button';

// Tipos para controle de estado com React
import { Dispatch, SetStateAction } from 'react';

// Função para buscar usuários novamente (não está sendo usada aqui)
import { fetchUsersAgain } from '@/shared/functions/fetchUsers';

// Tipo de usuário usado na aplicação
import { User } from '@/shared/types/User';

// Interface que define as props esperadas pelo componente Filters
interface FiltersProps {
  setFilterName: Dispatch<SetStateAction<string>>;
  setFilterEmail: Dispatch<SetStateAction<string>>;
  setFilterUserId: Dispatch<SetStateAction<string>>;
  setUsers: Dispatch<SetStateAction<User[]>>;
  filterName: string;
  filterEmail: string;
  filterUserId: string;
  allUsers: User[]; // Lista completa de usuários
}

// Componente responsável pelos filtros de busca
export const Filters = ({
  filterEmail,
  filterName,
  filterUserId,
  setFilterEmail,
  setFilterName,
  setFilterUserId,
  setUsers,
  allUsers,
}: FiltersProps) => {
  // Função que reseta os filtros e restaura a lista original de usuários
  const resetFilter = () => {
    setFilterName('');
    setFilterEmail('');
    setFilterUserId('');
    setUsers(allUsers);
  };

  // Função que aplica os filtros preenchidos aos dados dos usuários
  const applyFilters = () => {
    const filtered = allUsers.filter(user => {
      // Verifica se o nome do usuário inclui o texto filtrado
      const matchName = user.nome
        ?.toLowerCase()
        .includes(filterName.toLowerCase());

      // Verifica se o email do usuário inclui o texto filtrado
      const matchEmail = user.email
        ?.toLowerCase()
        .includes(filterEmail.toLowerCase());

      // Verifica se o ID do usuário inclui o texto filtrado
      const matchId = user.id?.toString().includes(filterUserId);

      // Retorna apenas os usuários que correspondem a todos os filtros
      return matchName && matchEmail && matchId;
    });

    // Atualiza a lista de usuários exibida
    setUsers(filtered);
  };

  return (
    <div>
      {/* Título da seção de filtros */}
      <h1 className='text-xl font-bold'>Busca e Filtros</h1>

      {/* Inputs de filtro: nome, email e ID */}
      <div className='flex flex-col md:flex-row justify-between items-center mt-4 gap-5'>
        <Input
          filterValue={filterName}
          setFilter={setFilterName}
          icon={faUser}
          placeholder='Filtro por nome'
          title='Nome'
        />
        <Input
          filterValue={filterEmail}
          setFilter={setFilterEmail}
          icon={faVoicemail}
          placeholder='Filtro por email'
          title='Email'
        />
        <Input
          filterValue={filterUserId}
          setFilter={setFilterUserId}
          icon={faCaretDown}
          placeholder='Filtro por ID'
          title='ID do Usuario'
        />
      </div>

      {/* Botões de ação: resetar filtros ou aplicar filtros */}
      <div className='flex flex-row justify-end mt-5 gap-3'>
        <Button
          onClick={() => {
            console.log('Resetado');
          }}
          className='bg-zinc-300 text-black hover:cursor-pointer hover:bg-zinc-400'
        >
          Resetar
        </Button>
        <Button
          onClick={applyFilters}
          className='bg-blue-600 hover:cursor-pointer hover:bg-blue-700'
        >
          Procurar
        </Button>
      </div>
    </div>
  );
};

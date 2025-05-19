import {
  faCaretDown,
  faUser,
  faVoicemail,
} from '@fortawesome/free-solid-svg-icons';
import { Input } from './input';
import { Button } from '../ui/button';
import { Dispatch, SetStateAction } from 'react';
import { fetchUsersAgain } from '@/shared/functions/fetchUsers';
import { User } from '@/shared/types/User';

interface FiltersProps {
  setFilterName: Dispatch<SetStateAction<string>>;
  setFilterEmail: Dispatch<SetStateAction<string>>;
  setFilterUserId: Dispatch<SetStateAction<string>>;
  setUsers: Dispatch<SetStateAction<User[]>>;
  filterName: string;
  filterEmail: string;
  filterUserId: string;
  allUsers: User[];
}

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
  const resetFilter = () => {
    setFilterName('');
    setFilterEmail('');
    setFilterUserId('');
    setUsers(allUsers);
  };

  const applyFilters = () => {
    const filtered = allUsers.filter(user => {
      const matchName = user.nome
        ?.toLowerCase()
        .includes(filterName.toLowerCase());
      const matchEmail = user.email
        ?.toLowerCase()
        .includes(filterEmail.toLowerCase());
      const matchId = user.id?.toString().includes(filterUserId);
      return matchName && matchEmail && matchId;
    });

    setUsers(filtered);
  };

  return (
    <div>
      <h1 className='text-xl font-bold'>Busca e Filtros</h1>
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

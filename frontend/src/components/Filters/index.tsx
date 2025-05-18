import {
  faCaretDown,
  faUser,
  faVoicemail,
} from '@fortawesome/free-solid-svg-icons';
import { Input } from './input';
import { Button } from '../ui/button';
import { Dispatch, SetStateAction } from 'react';

interface FiltersProps {
  setFilterName: Dispatch<SetStateAction<string>>;
  setFilterEmail: Dispatch<SetStateAction<string>>;
  setFilterUserId: Dispatch<SetStateAction<string>>;
  filterName: string;
  filterEmail: string;
  filterUserId: string;
}

export const Filters = ({
  filterEmail,
  filterName,
  filterUserId,
  setFilterEmail,
  setFilterName,
  setFilterUserId,
}: FiltersProps) => {
  return (
    <div>
      <h1 className='text-xl font-bold'>Busca e Filtros</h1>
      <div className='flex flex-row justify-between items-center mt-4'>
        <Input
          filterValue={filterName}
          setFilter={setFilterName}
          icon={faUser}
          placeholder='Procurar pelo nome'
          title='Nome'
        />
        <Input
          filterValue={filterEmail}
          setFilter={setFilterEmail}
          icon={faVoicemail}
          placeholder='Procurar pelo email'
          title='Email'
        />
        <Input
          filterValue={filterUserId}
          setFilter={setFilterUserId}
          icon={faCaretDown}
          placeholder='Procurar pelo ID'
          title='ID do Usuario'
        />
      </div>

      <div className='flex flex-row justify-end mt-5 gap-3'>
        <Button className='bg-zinc-300 text-black hover:cursor-pointer hover:bg-zinc-400'>
          Resetar
        </Button>
        <Button className='bg-blue-600 hover:cursor-pointer hover:bg-zinc-400'>
          Procurar
        </Button>
      </div>
    </div>
  );
};

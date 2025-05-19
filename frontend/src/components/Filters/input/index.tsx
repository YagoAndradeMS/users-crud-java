import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction } from 'react';

interface InputProps {
  setFilter: Dispatch<SetStateAction<string>>; // Função para atualizar o estado do filtro
  filterValue: string; // Valor atual do filtro
  placeholder: string; // Texto placeholder do input
  title: string; // Título do campo
  icon: IconProp; // Ícone do FontAwesome a ser exibido
}

export const Input = ({
  placeholder,
  title,
  icon,
  filterValue,
  setFilter,
}: InputProps) => {
  return (
    <div className='flex-1'>
      {/* Título do campo */}
      <h1>{title}</h1>

      {/* Container do input com borda arredondada */}
      <div
        className={`has-[:focus]:border-blue flex items-center h-12 rounded-3xl border-2 border-gray-700`}
      >
        {/* Ícone do lado esquerdo, se fornecido */}
        {icon && <FontAwesomeIcon icon={icon} className='ml-4 size-6' />}

        {/* Input de texto controlado */}
        <input
          className='flex-1 outline-none bg-transparent h-full px-4'
          type='text'
          placeholder={placeholder}
          value={filterValue}
          onChange={e => setFilter(e.target.value)} // Atualiza o filtro no estado pai
        />
      </div>
    </div>
  );
};

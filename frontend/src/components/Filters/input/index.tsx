import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction } from 'react';

interface InputProps {
  setFilter: Dispatch<SetStateAction<string>>;
  filterValue: string;
  placeholder: string;
  title: string;
  icon: IconProp;
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
      <h1>{title}</h1>
      <div
        className={`has-[:focus]:border-blue flex items-center h-12 rounded-3xl border-2 border-gray-700`}
      >
        {icon && <FontAwesomeIcon icon={icon} className='ml-4 size-6' />}
        <input
          className='flex-1 outline-none bg-transparent h-full px-4'
          type='text'
          placeholder={placeholder}
          onChange={e => {
            setFilter(e.target.value);
          }}
          value={filterValue}
        />
      </div>
    </div>
  );
};

import { Button } from '@/components/ui/button';
import { FaUsers } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className='w-full flex flex-row justify-between items-center text-white px-20 h-24 bg-gradient-to-r from-emerald-300/90 to-blue-500'>
      {/* Logo  */}
      <div className='flex gap-3 flex-row text-4xl font-bold'>
        {' '}
        <FaUsers /> User Management
      </div>
      {/*  Botão para adicionar novo usuario */}
      <Button
        className='bg-white text-blue-500 text-xl px-6 py-3
    rounded-md shadow-md
    transition-transform duration-300 ease-in-out
     hover:cursor-pointer hover:scale-105 hover:bg-zinc-100 hover:text-blue-600'
      >
        + Add New User
      </Button>
    </div>
  );
};

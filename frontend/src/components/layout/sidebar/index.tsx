'use client';
import { CreateOrEditUserModal } from '@/components/modals/createOrEditUserModal';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { FaUsers } from 'react-icons/fa';

export const Sidebar = () => {
  const [modalCreateUser, setModalCreateUser] = useState<boolean>(false);

  return (
    <div className='w-full flex flex-col sm:flex-row justify-between items-center text-white px-6 sm:px-20 py-6 sm:h-24 bg-gradient-to-r from-emerald-300/90 to-blue-500 gap-4 sm:gap-0'>
      {/* Logo  */}
      <div className='flex gap-2 flex-row items-center text-2xl sm:text-4xl font-bold'>
        <FaUsers />
        <span>User Management</span>
      </div>

      {/*  Botão para adicionar novo usuário */}
      <Button
        className='bg-white text-blue-500 text-base sm:text-xl px-4 sm:px-6 py-2 sm:py-3
          rounded-md shadow-md
          transition-transform duration-300 ease-in-out
          hover:cursor-pointer hover:scale-105 hover:bg-zinc-100 hover:text-blue-600'
        onClick={() => setModalCreateUser(true)}
      >
        + Add New User
      </Button>

      {/* Modal */}
      {modalCreateUser && (
        <CreateOrEditUserModal onClose={() => setModalCreateUser(false)} />
      )}
    </div>
  );
};

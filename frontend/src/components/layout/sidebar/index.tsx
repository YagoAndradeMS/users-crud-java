'use client'; // Indica que este componente roda no cliente (Next.js App Router)

import { CreateOrEditUserModal } from '@/components/modals/createOrEditUserModal';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { FaUsers } from 'react-icons/fa';

// Componente de barra superior (header ou "sidebar" adaptado para mobile e desktop)
export const Sidebar = () => {
  // Estado que controla a exibição do modal de criação de usuário
  const [modalCreateUser, setModalCreateUser] = useState<boolean>(false);

  return (
    // Container principal com responsividade: vertical no mobile e horizontal no desktop
    <div className='w-full flex flex-col sm:flex-row justify-between items-center text-white px-6 sm:px-20 py-6 sm:h-24 bg-gradient-to-r from-emerald-300/90 to-blue-500 gap-4 sm:gap-0'>
      {/* Logo com ícone e título */}
      <div className='flex gap-2 flex-row items-center text-2xl sm:text-4xl font-bold'>
        <FaUsers />
        <span>User Management</span>
      </div>

      {/* Botão para abrir modal de criação de usuário */}
      <Button
        className='bg-white text-blue-500 text-base sm:text-xl px-4 sm:px-6 py-2 sm:py-3
          rounded-md shadow-md
          transition-transform duration-300 ease-in-out
          hover:cursor-pointer hover:scale-105 hover:bg-zinc-100 hover:text-blue-600'
        onClick={() => setModalCreateUser(true)}
      >
        + Add New User
      </Button>

      {/* Modal condicional - exibido somente se modalCreateUser for true */}
      {modalCreateUser && (
        <CreateOrEditUserModal onClose={() => setModalCreateUser(false)} />
      )}
    </div>
  );
};

'use client';

import { Filters } from '@/components/Filters';
import { UserTable } from '@/components/userTable';
import api from '@/shared/services/api';
import { User } from '@/shared/types/User';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [allUsers, setAllUsers] = useState<User[]>([]); // Todos os usuários
  const [users, setUsers] = useState<User[]>([]); // Usuários filtrados
  const [filterName, setFilterName] = useState('');
  const [filterEmail, setFilterEmail] = useState('');
  const [filterUserId, setFilterUserId] = useState('');

  return (
    <main className='p-8'>
      <Filters
        filterEmail={filterEmail}
        filterName={filterName}
        filterUserId={filterUserId}
        setFilterEmail={setFilterEmail}
        setFilterName={setFilterName}
        setFilterUserId={setFilterUserId}
        setUsers={setUsers}
        allUsers={allUsers} // novo
      />
      <UserTable users={users} setUsers={setUsers} />
    </main>
  );
}

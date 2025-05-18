'use client';

import { Filters } from '@/components/Filters';
import { UserTable } from '@/components/userTable';
import api from '@/shared/services/api';
import { User } from '@/shared/types/User';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterName, setFilterName] = useState<string>('');
  const [filterEmail, setFilterEmail] = useState<string>('');
  const [filterUserId, setFilterUserId] = useState<string>('');
  useEffect(() => {
    api
      .get('/users')
      .then(response => setUsers(response.data))
      .catch(err => console.error('Erro ao buscar usuários:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className='p-8'>
      {/*Busca e Filtros */}
      <div>
        <Filters
          filterEmail={filterEmail}
          filterName={filterName}
          filterUserId={filterUserId}
          setFilterEmail={setFilterEmail}
          setFilterName={setFilterName}
          setFilterUserId={setFilterUserId}
        />
      </div>
      <UserTable users={users} />
    </main>
  );
}

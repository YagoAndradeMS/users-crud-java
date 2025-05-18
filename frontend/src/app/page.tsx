'use client';

import { Filters } from '@/components/Filters';
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
      <h2 className='text-2xl font-bold mb-4'>Lista de Usuários</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul className='space-y-2'>
          {users.map(user => (
            <li key={user.id} className='border p-4 rounded bg-white shadow'>
              <p>
                <strong>Nome:</strong> {user.nome}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Cidade:</strong> {user.cidade}
              </p>
              <p>
                <strong>Idade:</strong> {user.idade}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

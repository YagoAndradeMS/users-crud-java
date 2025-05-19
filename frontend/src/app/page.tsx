'use client'; // Indica que este componente deve ser renderizado no lado do cliente (Next.js)

// Importa os componentes utilizados na página
import { Filters } from '@/components/Filters';
import { UserTable } from '@/components/userTable';
import { User } from '@/shared/types/User';
import { useState } from 'react';

// Componente principal da página inicial
export default function HomePage() {
  // Estado que armazena todos os usuários disponíveis (não filtrados)
  const [allUsers, setAllUsers] = useState<User[]>([]);

  // Estado que armazena a lista de usuários que será exibida (após filtros)
  const [users, setUsers] = useState<User[]>([]);

  // Filtros individuais controlados por input
  const [filterName, setFilterName] = useState(''); // Filtro por nome
  const [filterEmail, setFilterEmail] = useState(''); // Filtro por email
  const [filterUserId, setFilterUserId] = useState(''); // Filtro por ID

  return (
    <main className='p-8'>
      {/* Componente de filtros de busca */}
      <Filters
        filterEmail={filterEmail}
        filterName={filterName}
        filterUserId={filterUserId}
        setFilterEmail={setFilterEmail}
        setFilterName={setFilterName}
        setFilterUserId={setFilterUserId}
        setUsers={setUsers} // Atualiza a lista de usuários filtrados
        allUsers={allUsers} // Lista completa de usuários para aplicar os filtros
      />

      {/* Componente da tabela que exibe os usuários */}
      <UserTable users={users} setUsers={setUsers} />
    </main>
  );
}

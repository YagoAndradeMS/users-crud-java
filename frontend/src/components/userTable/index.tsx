// Importa o tipo de dado User
import { User } from '@/shared/types/User';

// Importa os componentes da tabela customizada
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// Importa o componente de ações (editar/excluir) por usuário
import { Actions } from './actions';

// Define as props esperadas pelo componente UserTable
interface UserTableProps {
  users: User[]; // Lista de usuários a serem exibidos
  setUsers: React.Dispatch<React.SetStateAction<User[]>>; // Função para atualizar a lista de usuários
}

// Componente que renderiza a tabela de usuários
export const UserTable = ({ users, setUsers }: UserTableProps) => {
  return (
    <div className='rounded-xl mt-8 border shadow-2xl p-4'>
      {/* Título da seção */}
      <h2 className='text-2xl font-semibold mb-4'>Lista de Usuários</h2>

      {/* Estrutura da tabela */}
      <Table>
        <TableHeader>
          <TableRow>
            {/* Cabeçalhos da tabela */}
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Cidade</TableHead>
            <TableHead>Idade</TableHead>
            <TableHead className='text-right w-[150px]'>Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {/* Itera sobre os usuários e renderiza cada linha da tabela */}
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.nome}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.cidade}</TableCell>
              <TableCell>{user.idade}</TableCell>

              {/* Coluna de ações (editar/excluir) */}
              <TableCell className='w-[150px]'>
                <Actions user={user} setUsers={setUsers} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

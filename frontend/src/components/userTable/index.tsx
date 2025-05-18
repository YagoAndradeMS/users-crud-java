import { User } from '@/shared/types/User';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Actions } from './actions';

interface UserTableProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const UserTable = ({ users, setUsers }: UserTableProps) => {
  return (
    <div className='rounded-xl mt-8 border shadow-2xl p-4'>
      <h2 className='text-2xl font-semibold mb-4'>Lista de Usuários</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Cidade</TableHead>
            <TableHead>Idade</TableHead>
            <TableHead className='text-right w-[150px]'>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.nome}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.cidade}</TableCell>
              <TableCell>{user.idade}</TableCell>
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

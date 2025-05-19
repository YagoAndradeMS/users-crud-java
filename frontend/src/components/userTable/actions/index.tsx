// Importa o tipo User
import { User } from '@/shared/types/User';

// Importa ícone de lixeira (excluir)
import { FaTrash } from 'react-icons/fa';

// Componente reutilizável de botão com ícone
import { Icon } from './icon';

// Importa ícone de lápis (editar)
import { FaPencil } from 'react-icons/fa6';

// Hooks do React e tipos para gerenciamento de estado
import { Dispatch, SetStateAction, useState } from 'react';

// Importa modal para criação ou edição de usuário
import { CreateOrEditUserModal } from '@/components/modals/createOrEditUserModal';

// Importa modal de exclusão de usuário
import { DeleteUserModal } from '@/components/modals/deleteUserModal';

// Função para buscar novamente os usuários após alterações
import { fetchUsersAgain } from '@/shared/functions/fetchUsers';

// Define as props esperadas pelo componente Actions
interface ActionsProps {
  user: User; // Usuário atual para edição ou exclusão
  setUsers: Dispatch<SetStateAction<User[]>>; // Função para atualizar a lista de usuários
}

// Componente que renderiza os botões de ações (editar e excluir) para cada usuário
export const Actions = ({ user, setUsers }: ActionsProps) => {
  // Estado para controlar a exibição do modal de edição
  const [openEditModalUser, setOpenEditModalUser] = useState<boolean>(false);

  // Estado para controlar a exibição do modal de exclusão
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  return (
    <div className='flex flex-row justify-end items-center gap-4'>
      {/* Botão de edição com ícone de lápis */}
      <Icon
        classname='bg-green-200 hover:bg-green-300'
        execute={() => {
          console.log(openEditModalUser), setOpenEditModalUser(true); // Abre o modal de edição
        }}
        icon={<FaPencil className='text-green-600 hover:text-green-700' />}
      />

      {/* Botão de exclusão com ícone de lixeira */}
      <Icon
        classname='bg-red-200 hover:bg-red-300'
        execute={() => setShowDeleteModal(true)} // Abre o modal de exclusão
        icon={<FaTrash className='text-red-600 hover:text-red-700' />}
      />

      {/* Modal de edição, renderizado condicionalmente */}
      {openEditModalUser && (
        <CreateOrEditUserModal
          userToEdit={user} // Passa o usuário atual para edição
          onClose={() => setOpenEditModalUser(false)} // Fecha o modal ao concluir ou cancelar
        />
      )}

      {/* Modal de exclusão, renderizado condicionalmente */}
      {showDeleteModal && (
        <DeleteUserModal
          userId={user.id} // Passa o ID do usuário para exclusão
          onClose={() => setShowDeleteModal(false)} // Fecha o modal ao cancelar
        />
      )}
    </div>
  );
};

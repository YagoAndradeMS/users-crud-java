import { User } from '@/shared/types/User';
import { FaTrash } from 'react-icons/fa';
import { Icon } from './icon';
import { FaPencil } from 'react-icons/fa6';
import { useState } from 'react';
import { CreateUserModal } from '@/components/modals/createOrEditUserModal';
import { DeleteUserModal } from '@/components/modals/deleteUserModal';

interface ActionsProps {
  user: User;
}

export const Actions = ({ user }: ActionsProps) => {
  const [openEditModalUser, setOpenEditModalUser] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  return (
    <div className='flex flex-row justify-end items-center gap-4'>
      {/* <Icon
        classname='bg-blue-200 hover:bg-blue-300'
        execute={() => console.log()}
        icon={<FaEye className='text-blue-600 hover:text-blue-700' />}
      /> */}
      <Icon
        classname='bg-green-200 hover:bg-green-300'
        execute={() => {
          console.log(openEditModalUser), setOpenEditModalUser(true);
        }}
        icon={<FaPencil className='text-green-600 hover:text-green-700' />}
      />
      <Icon
        classname='bg-red-200 hover:bg-red-300'
        execute={() => setShowDeleteModal(true)}
        icon={<FaTrash className='text-red-600 hover:text-red-700' />}
      />

      {openEditModalUser && (
        <CreateUserModal
          userToEdit={user}
          onClose={() => setOpenEditModalUser(false)}
        />
      )}

      {showDeleteModal && (
        <DeleteUserModal
          userId={user.id}
          onClose={() => setShowDeleteModal(false)}
          // onDeleteSuccess={() => fetchUsersAgain()} // Exemplo de callback para atualizar a lista
        />
      )}
    </div>
  );
};

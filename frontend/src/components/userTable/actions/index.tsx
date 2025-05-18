import { User } from '@/shared/types/User';
import { FaEye, FaTrash } from 'react-icons/fa';
import { Icon } from './icon';
import { FaPencil } from 'react-icons/fa6';

interface ActionsProps {
  user: User;
}

export const Actions = ({ user }: ActionsProps) => {
  return (
    <div className='flex flex-row justify-end items-center gap-4'>
      <Icon
        classname='bg-blue-200 hover:bg-blue-300'
        execute={() => console.log()}
        icon={<FaEye className='text-blue-600 hover:text-blue-700' />}
      />
      <Icon
        classname='bg-green-200 hover:bg-green-300'
        execute={() => console.log()}
        icon={<FaPencil className='text-green-600 hover:text-green-700' />}
      />
      <Icon
        classname='bg-red-200 hover:bg-red-300'
        execute={() => console.log()}
        icon={<FaTrash className='text-red-600 hover:text-red-700' />}
      />
    </div>
  );
};

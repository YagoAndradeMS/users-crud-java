import { X } from 'lucide-react';
import api from '@/shared/services/api';

interface DeleteUserModalProps {
  userId: number;
  onClose: () => void;
  onDeleteSuccess?: () => void; // Callback opcional
}

export const DeleteUserModal = ({
  userId,
  onClose,
  onDeleteSuccess,
}: DeleteUserModalProps) => {
  const handleDelete = async () => {
    console.log(userId);
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      <div className='relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl'>
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className='absolute right-4 top-4 text-gray-500 hover:text-red-500 transition-colors'
        >
          <X size={24} />
        </button>

        <h2 className='mb-4 text-xl font-semibold text-zinc-800'>
          Confirmar exclusão
        </h2>

        <p className='text-sm text-gray-700 text-wrap'>
          Tem certeza que deseja excluir este usuário? Esta ação não poderá ser
          desfeita.
        </p>

        {/* Botões */}
        <div className='mt-6 flex justify-end gap-4'>
          <button
            onClick={onClose}
            className='rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition'
          >
            Cancelar
          </button>
          <button
            onClick={handleDelete}
            className='rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700 transition'
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

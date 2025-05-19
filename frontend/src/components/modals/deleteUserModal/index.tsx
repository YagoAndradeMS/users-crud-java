// Importa o ícone de "X" (fechar) da biblioteca Lucide
import { X } from 'lucide-react';

// Define as propriedades esperadas pelo componente de modal de exclusão
interface DeleteUserModalProps {
  userId: number; // ID do usuário a ser excluído
  onClose: () => void; // Função chamada ao fechar o modal
  onDeleteSuccess?: () => void; // Callback opcional para ações após exclusão com sucesso
}

// Componente que representa o modal de confirmação de exclusão de um usuário
export const DeleteUserModal = ({
  userId,
  onClose,
  onDeleteSuccess,
}: DeleteUserModalProps) => {
  // Função chamada ao clicar no botão "Excluir"
  const handleDelete = async () => {
    console.log(userId);
  };

  return (
    // Overlay escuro cobrindo toda a tela com modal centralizado
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      {/* Container do conteúdo do modal */}
      <div className='relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl'>
        {/* Botão de fechar (ícone X no canto superior direito) */}
        <button
          onClick={onClose}
          className='absolute right-4 top-4 text-gray-500 hover:text-red-500 transition-colors'
        >
          <X size={24} />
        </button>

        {/* Título do modal */}
        <h2 className='mb-4 text-xl font-semibold text-zinc-800'>
          Confirmar exclusão
        </h2>

        {/* Mensagem de confirmação */}
        <p className='text-sm text-gray-700 text-wrap'>
          Tem certeza que deseja excluir este usuário? Esta ação não poderá ser
          desfeita.
        </p>

        {/* Botões de ação: Cancelar e Excluir */}
        <div className='mt-6 flex justify-end gap-4'>
          {/* Botão para cancelar e fechar o modal */}
          <button
            onClick={onClose}
            className='rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition'
          >
            Cancelar
          </button>

          {/* Botão que executa a função de exclusão */}
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

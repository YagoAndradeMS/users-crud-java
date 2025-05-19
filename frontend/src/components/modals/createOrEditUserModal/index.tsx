// Importa hooks e ícones
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

// Importa componente de input reutilizável
import { CreateUserField } from './field';

// Importa API (axios ou fetch encapsulado)
import api from '@/shared/services/api';

// Importa tipo de usuário
import { User } from '@/shared/types/User';

// Define as props do modal, incluindo:
// - onClose: função para fechar o modal
// - userToEdit: dados do usuário a ser editado (opcional)
// - onSuccess: callback chamado após uma ação bem-sucedida (opcional)
interface CreateUserModalProps {
  onClose: () => void;
  userToEdit?: User;
  onSuccess?: () => void;
}

// Componente do modal de criação ou edição de usuário
export const CreateOrEditUserModal = ({
  onClose,
  userToEdit,
  onSuccess,
}: CreateUserModalProps) => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    idade: '',
    cidade: '',
  });

  // Efeito que popula o formulário caso um usuário seja passado para edição
  useEffect(() => {
    if (userToEdit) {
      setFormData({
        nome: userToEdit.nome || '',
        email: userToEdit.email || '',
        senha: userToEdit.senha || '',
        idade: userToEdit.idade || '',
        cidade: userToEdit.cidade || '',
      });
    }
  }, [userToEdit]);

  // Função chamada ao alterar qualquer campo do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Atualiza apenas o campo alterado no estado
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Função chamada ao submeter o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previne recarregamento da página
    console.log(formData); // Exibe os dados no console
  };

  return (
    // Overlay escuro com modal centralizado
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      <div className='relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl'>
        {/* Botão de fechar (X no canto superior direito) */}
        <button
          onClick={onClose}
          className='absolute right-4 top-4 text-gray-500 hover:text-red-500 transition-colors'
        >
          <X size={24} />
        </button>

        {/* Título do modal muda dinamicamente entre criação ou edição */}
        <h2 className='mb-6 text-2xl font-semibold text-zinc-800'>
          {userToEdit ? 'Editar usuário' : 'Adicionar novo usuário'}
        </h2>

        {/* Formulário com campos de input personalizados */}
        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-1 gap-4 sm:grid-cols-2'
        >
          <CreateUserField
            htmlFor='nome'
            title='Nome'
            placeholder='Digite o nome'
            type='text'
            value={formData.nome}
            onChange={handleChange}
          />
          <CreateUserField
            htmlFor='email'
            title='Email'
            placeholder='Digite o email'
            type='email'
            value={formData.email}
            onChange={handleChange}
          />
          <CreateUserField
            htmlFor='senha'
            title='Senha'
            placeholder='Digite a senha'
            type='text'
            value={formData.senha}
            onChange={handleChange}
          />
          <CreateUserField
            htmlFor='idade'
            title='Idade'
            placeholder='Digite a idade'
            type='number'
            value={formData.idade}
            onChange={handleChange}
          />
          <CreateUserField
            htmlFor='cidade'
            title='Cidade'
            placeholder='Digite a cidade'
            type='text'
            className='sm:col-span-2' // Ocupa 2 colunas em telas maiores
            value={formData.cidade}
            onChange={handleChange}
          />
        </form>

        {/* Botões de ação: cancelar ou salvar/atualizar */}
        <div className='mt-6 flex justify-end gap-4'>
          {/* Botão para fechar modal */}
          <button
            type='button'
            onClick={onClose}
            className='rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition'
          >
            Cancelar
          </button>

          {/* Botão para enviar o formulário */}
          <button
            type='submit'
            className='rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 transition'
            onClick={handleSubmit}
          >
            {userToEdit ? 'Atualizar' : 'Salvar'}
          </button>
        </div>
      </div>
    </div>
  );
};

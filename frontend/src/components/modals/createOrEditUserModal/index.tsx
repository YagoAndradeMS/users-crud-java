import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { CreateUserField } from './field';
import api from '@/shared/services/api';
import { User } from '@/shared/types/User';

interface CreateUserModalProps {
  onClose: () => void;
  userToEdit?: User;
}

export const CreateUserModal = ({
  onClose,
  userToEdit,
}: CreateUserModalProps) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    idade: '',
    cidade: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (userToEdit) {
        await api.put(`/users/${userToEdit.id}`, formData);
      } else {
        await api.post('/users', formData);
      }
      onClose(); // Fecha após salvar
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      <div className='relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl'>
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className='absolute right-4 top-4 text-gray-500 hover:text-red-500 transition-colors'
        >
          <X size={24} />
        </button>

        <h2 className='mb-6 text-2xl font-semibold text-zinc-800'>
          {userToEdit ? 'Editar usuário' : 'Adicionar novo usuário'}
        </h2>

        {/* Formulário */}
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
            className='sm:col-span-2'
            value={formData.cidade}
            onChange={handleChange}
          />
        </form>

        {/* Botões */}
        <div className='mt-6 flex justify-end gap-4'>
          <button
            type='button'
            onClick={onClose}
            className='rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition'
          >
            Cancelar
          </button>
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

// Define as propriedades esperadas pelo componente
interface FieldProps {
  title: string; // Rótulo exibido acima do input
  htmlFor: string; // Usado para o id e name do input
  type: string; // Tipo do input (ex: text, number, email, etc.)
  placeholder: string; // Texto de dica dentro do input
  value: string | number; // Valor do campo controlado
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Função chamada ao alterar o campo
  className?: string; // Classe opcional para customização
}

// Componente reutilizável de input com label
export const CreateUserField = ({
  htmlFor,
  title,
  type,
  placeholder,
  className,
  onChange,
  value,
}: FieldProps) => {
  return (
    // Wrapper do campo com espaço entre os elementos
    // Adiciona `className` extra se fornecida
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* Label associada ao input */}
      <label htmlFor={htmlFor} className='text-sm font-medium text-zinc-700'>
        {title}
      </label>

      {/* Input controlado com estilos de foco e bordas */}
      <input
        id={htmlFor} // id e name iguais para vinculação com o label
        name={htmlFor}
        type={type} // Tipo passado por props (ex: "text", "email", "number")
        placeholder={placeholder}
        value={value} // Valor controlado
        onChange={onChange} // Atualiza estado ao digitar
        className='text-black rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
      />
    </div>
  );
};

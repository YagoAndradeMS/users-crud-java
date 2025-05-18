interface FieldProps {
  title: string;
  htmlFor: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

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
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={htmlFor} className='text-sm font-medium text-zinc-700'>
        {title}
      </label>
      <input
        id={htmlFor}
        name={htmlFor}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='text-black rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
      />
    </div>
  );
};

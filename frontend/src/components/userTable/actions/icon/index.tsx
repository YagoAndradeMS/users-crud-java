import React, { ReactNode } from 'react';

interface IconProps {
  execute: () => void; // Função que será executada no clique
  icon: ReactNode; // O ícone ou elemento React a ser exibido
  classname: string; // Classes Tailwind CSS para estilização
}

export const Icon = ({ classname, execute, icon }: IconProps) => {
  return (
    <div
      className={`flex items-center justify-center p-2 rounded-sm hover:cursor-pointer ${classname}`}
      onClick={execute}
      role='button'
      tabIndex={0}
      onKeyPress={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          execute();
        }
      }}
      aria-label='Icon button'
    >
      {icon}
    </div>
  );
};

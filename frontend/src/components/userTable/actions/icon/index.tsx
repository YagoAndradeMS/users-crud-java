import React, { ReactNode } from 'react';

interface IconProps {
  execute: () => void;
  icon: ReactNode;
  classname: string;
}

export const Icon = ({ classname, execute, icon }: IconProps) => {
  return (
    <div
      className={`flex items-center justify-center p-2 rounded-sm hover:cursor-pointer ${classname}`}
      onClick={execute}
    >
      {icon}
    </div>
  );
};

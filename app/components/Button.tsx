import type { ReactNode } from "react";

type TypeButtonProps = {
  children?: ReactNode;
};

export const Button = ({ children }: TypeButtonProps) => {
  return <button className="bg-teal-500 m-4 text-white p-4">{children}</button>;
};

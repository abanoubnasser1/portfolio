import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1700px] px-6 sm:px-8 md:px-12 lg:px-20 ${className}`}
    >
      {children}
    </div>
  );
}
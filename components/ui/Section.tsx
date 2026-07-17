import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  center?: boolean;
}

export default function Section({
  id,
  children,
  className = "",
  center = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen flex ${center ? "items-center" : "items-start"} ${className}`}
    >
      {children}
    </section>
  );
}
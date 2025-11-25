import { HTMLAttributes } from "react";

export default function Section({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={`mx-4 max-w-full lg:max-w-7xl xl:mx-auto ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-coral text-white font-semibold rounded-full px-6 py-2.5 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-coral)] hover:-translate-y-0.5 transition",
  secondary:
    "text-ink font-semibold underline underline-offset-4 decoration-2 hover:text-purple transition",
  tertiary:
    "bg-purple text-white font-semibold rounded-full px-6 py-2.5 hover:opacity-90 transition",
  destructive:
    "bg-coral text-white font-semibold rounded-full px-6 py-2.5 hover:opacity-90 transition",
};

export function Button({
  variant = "primary",
  href,
  className,
  children,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(variants[variant], className, disabled && "opacity-50 pointer-events-none");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

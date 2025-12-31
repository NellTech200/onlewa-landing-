import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading,
  children,
  leftIcon,
  rightIcon,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary: 'bg-[#f7821A] text-white hover:bg-[#e07010] focus:ring-[#f7821A] shadow-lg shadow-orange-900/20 border border-transparent',
    outline: 'bg-transparent border-2 border-white/20 text-white hover:bg-white/10 focus:ring-white/50',
    ghost: 'bg-transparent text-blue-200 hover:text-white hover:bg-white/5'
  };
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg'
  };
  return <motion.button ref={ref} whileHover={{
    scale: 1.02
  }} whileTap={{
    scale: 0.98
  }} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </motion.button>;
});
Button.displayName = 'Button';
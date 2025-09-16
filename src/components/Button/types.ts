export type ButtonVariant = 'text' | 'outlined' | 'contained';

export interface BaseButtonProps {
  title?: string;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

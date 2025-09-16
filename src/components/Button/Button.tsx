import MuiButton from '@mui/material/Button';
import type { ButtonVariant } from './types';
import type { SxProps, Theme } from '@mui/system';

interface ButtonProps {
  variant?: ButtonVariant;
  title?: string;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  sx?: SxProps<Theme>;
}

const Button = ({
  variant = 'text',
  title = 'Button',
  disabled = false,
  rightIcon,
  leftIcon,
  onClick,
  sx
}: ButtonProps) => (
  <>
    <MuiButton
      variant={variant} 
      startIcon={leftIcon} 
      endIcon={rightIcon} 
      disabled={disabled} 
      onClick={onClick} 
      sx={{ 
        textTransform: 'none', 
        borderRadius: '8px',
        ...sx 
      }}
    >
      {title}
    </MuiButton>
  </>
);

export default Button;
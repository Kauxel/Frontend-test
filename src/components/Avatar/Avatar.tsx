import MuiAvatar from '@mui/material/Avatar';

interface AvatarProps {
  alt: string;
  src: string;
}

const Avatar = ({ alt, src }: AvatarProps) => (
  <MuiAvatar alt={alt} src={src} />
);

export default Avatar;

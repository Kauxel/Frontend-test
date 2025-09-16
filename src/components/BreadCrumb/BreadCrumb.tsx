import { Breadcrumbs } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BreadCrumbsProps {
  children: React.ReactNode;
}

const BreadCrumbs = ({ children }: BreadCrumbsProps) => (
  <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} >
    {children}
  </Breadcrumbs>
);

export default BreadCrumbs;
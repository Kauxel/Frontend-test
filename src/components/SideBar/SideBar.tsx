import { IconButton, Tooltip, Drawer, useMediaQuery, useTheme, } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

interface SidebarProps {
  open: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ open, toggleSidebar }: SidebarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const sidebarContent = (
    <ul className="flex flex-col space-y-4 pt-4">
      <li className="hover:bg-gray-700 ">
        <a href="/dashboard" className="flex justify-center w-full">
          <Tooltip title="Dashboard" >
            <IconButton >
              <HomeIcon />
            </IconButton>
          </Tooltip>
        </a>
      </li>
      <li className="hover:bg-gray-700">
        <a href="/">
          <Tooltip title="Booking Room">
            <IconButton>
              <InsertDriveFileIcon />
            </IconButton>
          </Tooltip>
        </a>
      </li>
    </ul>

  );

  return (
    <>
      {isMobile ? (
        <Drawer
          open={open}
          onClose={toggleSidebar}
          anchor="left"
        >
          <div className="bg-yellow-500 text-white p-4 w-[216px] h-full">
            {sidebarContent}
          </div>
        </Drawer>
      ) : (
        <div className="bg-gray-100 text-white min-h-screen p-4">{sidebarContent}</div>
      )}
    </>
  );
};

export default Sidebar;

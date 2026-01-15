import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../ThemeCustom';

export default function SideBar() {
  const [open, setOpen] = React.useState(false);
const {darkMode,toggleDarkMode,sideBar} = React.useContext(ThemeContext);
  const handleClick = () => {
    setOpen(!open);
  };
if (!sideBar) return null;
  return (
    <Box flex={1} sx={{
      display:{
        xs:"none",md:"block"
      },
       transform: sideBar ? "translateX(0)" : "translateX(-100%)",
    transition: "transform 0.3s ease-in-out",
    }}>
      <Box sx={{position:"sticky",top:68}}>

    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
            <ListItem>
        <ListItemIcon>
          <DarkModeIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-mode" primary="Dark Mode" />
        <Switch
          edge="end"
          checked={darkMode}
          onChange={toggleDarkMode}
          slotProps={{
            'aria-labelledby': 'switch-list-label-mode',
          }}
          />
      </ListItem>
    </List>
          </Box>
        </Box>
  );
}

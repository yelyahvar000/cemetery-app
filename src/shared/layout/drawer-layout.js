import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import { Button, Grid2, Stack } from "@mui/material";


import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LogoutIcon from "@mui/icons-material/Logout";


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window, content, user } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [curUrl, setCurUrl] = React.useState('')
  const url = useLocation()

  React.useEffect(() => {
    console.log("url", url);
    if (url && url?.pathname) {
       const pathName = url.pathname.split('/');
       setCurUrl(pathName[pathName.length - 1]);
    }
  }, [url]);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawerItem = [
    {
      caption: "Dashboard",
      icon: DashboardIcon,
      href: "dashboard",
    },
    {
      caption: "User Management",
      icon: AccessibilityIcon,
      href: "user-management",
    },
    {
      caption: "Profiling",
      icon: AssignmentIndIcon,
      href: "profiling",
    },
    {
      caption: "Mapping",
      icon: AddLocationAltIcon,
      href: "mapping",
    },
    {
      caption: "Notification",
      icon: NotificationAddIcon,
      href: "notification",
    },
    {
      caption: "Reports",
      icon: AssessmentIcon,
      href: "reports",
    },
    {
      caption: "Logs",
      icon: EditNoteIcon,
      href: "logs",
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {drawerItem.map((item) => (
          <ListItem key={item.caption} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <Link to={item.href}>
                <ListItemText primary={item.caption} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Stack  sx={{width:'100%'}} direction={"row"} alignItems={'center'} justifyContent={"space-between"}>
            <Box>
              <Typography>{curUrl}</Typography>
            </Box>
            <Box>
              <Button variant="outlined" color="white">
                LOGOUT
              </Button>
            </Box>
          </Stack>
        </Toolbar>
        {/* <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {curUrl}
          </Typography>
        </Toolbar> */}
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {content}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

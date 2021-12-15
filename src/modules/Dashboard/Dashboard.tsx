import React from 'react';

import { styled,  Theme, CSSObject } from '@mui/material/styles';
import { Drawer as MuiDrawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { faObjectGroup } from '@fortawesome/free-solid-svg-icons/faObjectGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const drawerWidth = 240;
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
interface DashboardProps {
}

/**
 * Primary UI component for user interaction
 */
export const Dashboard = ({
  ...props
}: DashboardProps) => {
  return (
    <Drawer open={true}>

      <List>


        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faObjectGroup} />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};
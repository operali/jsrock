import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { Stage } from '../component/stage'
import { Anchor } from '../component/anchor'

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles({});
  const [value, setValue] = React.useState('recents');

  const handleChange = (_: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stage type="foreground">
      <Anchor rowAlign="center" colAlign="bottom">
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
      </Anchor>
    </Stage>
  );
}

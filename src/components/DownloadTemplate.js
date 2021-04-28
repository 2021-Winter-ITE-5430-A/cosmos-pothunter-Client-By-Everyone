import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%', height: '100%',
  },
  gridListTile: {
    marginRight : '50dp',
    marginLeft: '50dp'
  },
  resumeImage: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const DownloadTemplate = () => {
  const classes = useStyles();
  const styles = {
    border: '1px solid rgba(0, 0, 0, 0.05)',
  };


  const [resume, setResume] = useState([]);

  useEffect(() => {
    axios.get('https://project-server-loveleen.herokuapp.com/api/resume').then((response) => {
      setResume(response.data);
        console.log(response);
    });
  }, []);

  return (
    <div className={classes.root}>

      <GridList cellHeight={430} className={classes.gridList} cols={3}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div"><h2 style={{display: 'flex',  justifyContent:'center'}}>Resume</h2></ListSubheader>
        </GridListTile>
        {resume.map((tile) => (
          <GridListTile variant="outlined" style={styles} key={tile.image} className={classes.gridListTile}>
            <img src={tile.image} alt={tile.title} className={classes.resumeImage} />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} href={tile.ref}>
                  <GetAppRoundedIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default DownloadTemplate;
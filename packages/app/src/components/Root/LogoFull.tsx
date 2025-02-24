import React from 'react';
import { makeStyles } from '@material-ui/core';
import nexturnLogo from  './logo/nexturn.png';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',  // Centers horizontally
    alignItems: 'center',      // Centers vertically
    height: '100%',            // Takes full sidebar height
  },
  img: {
    width: '65',
    height: 85, // Adjust height as needed
  },
});

const LogoFull = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={nexturnLogo} alt="NexTurn Logo" className={classes.img} />
    </div>
  );
};

export default LogoFull;
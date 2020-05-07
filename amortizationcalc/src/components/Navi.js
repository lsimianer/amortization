import React from 'react';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import StorageIcon from '@material-ui/icons/Storage';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  navCon: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '32px 72px',
    
  },
  navLink: {
    color: 'black',
    fontSize: 30,
  },
  headerNav: {
    textAlign:'center',
    fontSize:35,
  }
}))

const Navbar = () => {
  const classes = useStyles()

    return (
    <div>
      <Typography className={classes.headerNav}>
        Production Logging System
      </Typography>
      <Container maxWidth='md' className={classes.navCon}>            
            <Tooltip title="Login" placement="bottom">
              <IconButton >
                <Link to="/">
                  <VpnKeyIcon className={classes.navLink}/>
                </Link>
              </IconButton>
            </Tooltip>  

            <Tooltip title="Data Entry" placement="bottom">
              <IconButton >
                <Link to="/input">
                  <CloudUploadIcon className={classes.navLink}/>
                </Link>
              </IconButton>
            </Tooltip>  

            <Tooltip title="Production Board" placement="bottom">
              <IconButton >
                <Link to="/Board">
                  <AssignmentIcon className={classes.navLink}/>
                </Link>
              </IconButton>
            </Tooltip>  

            <Tooltip title="Reporting" placement="bottom">
              <IconButton >
                <Link to="/">
                  <StorageIcon className={classes.navLink}/>
                </Link>
              </IconButton>
            </Tooltip>     
      </Container>   
    </div>
       
    );
}

export default Navbar;

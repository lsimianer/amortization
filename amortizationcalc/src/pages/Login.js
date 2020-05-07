import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(() => ({
    loginCon: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '25%',
    },
    loginBtn: {
      margin:'auto',
    },
    textField: {
      textAlign:'center',
      marginTop:10,  
    }
  }))

const Login = () => {
    const classes = useStyles()

    return (
        <Container maxWidth='md' alignContent='center' alignItems='center' className={classes.loginCon}>            
            <Grid  spacing={10}>
                <Grid item xs={12}>
                    <InputLabel>Email</InputLabel>
                    <Input id='email'
                    startAdornment={
                        <InputAdornment position='start'>
                            <AccountCircle/>
                        </InputAdornment>
                    }></Input>
                </Grid>
                <Grid item xs={12}>
                <InputLabel>Password</InputLabel>
                <Input id='password'
                    startAdornment={
                        <InputAdornment position='start'>
                            <VpnKeyIcon/>
                        </InputAdornment>
                    }></Input>
                </Grid>
                <Grid item xs={12}>
                    <Button >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;

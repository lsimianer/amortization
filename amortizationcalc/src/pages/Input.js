import React from 'react';
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(() => ({
    textField: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2%',
    },
    loginBtn: {
      margin:'auto',
    },
    
  }))


const Input = () => {
    /*  
    inputs for
    date, part number, , operator, daily quantity, hours run (based on 10 hour day, hours down, hours setup, running quantity, run rate)
    
    */
    const classes = useStyles()

    return (
        <Grid  maxWidth='md' spacing={10}>
            <Grid item>
                <TextField
                id="datetime"
                label="Date & Time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                />
            </Grid>
            <Grid item>
                <TextField
                required
                id="partNumber"
                label="Part Number"
                // defaultValue="0456S"
                variant="outlined"
                className={classes.textField}
                />    
            </Grid>
            <Grid item>
            <TextField
                required
                id="operatorName"
                label="Operator Name"
                // defaultValue="0456S"
                variant="outlined"
                className={classes.textField}
                />    
            </Grid>
            <Grid item>
            <TextField
                required
                id="dailyQty"
                label="Daily Qauntity"
                // defaultValue="0456S"
                variant="outlined"
                className={classes.textField}
                />    
            </Grid>
            <Grid item>
               {/*  *** based off 10 hour day logic *** */}
            <TextField
                required
                id="hoursRun"
                label="Hours Run"
                // defaultValue="0456S"
                variant="outlined"
                className={classes.textField}
                />    
            </Grid>
            <Grid item>
            <TextField
                required
                id="hoursDown"
                label="Hours Down"
                // defaultValue="0456S"
                variant="outlined"
                className={classes.textField}
                />    
            </Grid>
            <Grid item>
            <TextField
                required
                id="hoursSetup"
                label="Hours Setup"
                // defaultValue="0456S"
                variant="outlined"
                className={classes.textField}
                />    
            </Grid>
            <Grid item>
            <TextField
                required
                id="runningQty"
                label="Running Quantity"
                // defaultValue="0456S"
                variant="outlined"
                className={classes.textField}
                />    
            </Grid>
            <Grid item>
            <TextField
                required
                id="runningRate"
                label="Running Rate"
                // defaultValue="0456S"
                variant="outlined"
                className={classes.textField}
                /> 
            </Grid>
            <Grid item>
                <Button>
                    Submit
                </Button>
            </Grid>
  
        </Grid>
    );
}

export default Input;

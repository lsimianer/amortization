import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// import { makeStyles } from '@material-ui/core/styles';


// const StyledTableRow = makeStyles(() => ({
//     mixedRows: {
//         '&:nth-of-type(odd)': {
//             backgroundColor: 'black',
//           },      
//     },    
//   }))(TableRow)


  
const ProductionBoard = () => {
    return (
        <Container>
            <h1>Lukes mortgage joint</h1>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    input mtg amt
                    <br/>
                    input interest rate
                    <br/>
                    input term or term remaining
                    <br/>
                    input extra payment
                </Grid>
                <Grid item xs={12}>
                    display months to payoff
                    <br/>
                    display interest paid without extra payment
                    <br/>
                    display interest paid with extra payment
                    <br/>
                    display total cost without extra payment
                    <br/>
                    display total cost with extra payment
                    <br/>
                </Grid>
                
            </Grid>

            

        </Container>
    );
}

export default ProductionBoard;

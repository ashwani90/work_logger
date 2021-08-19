import React from 'react';
import { makeStyles } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Card from '../../components/card/card';
import Button from '@material-ui/core/Button';
import CustomDataTable from '../../components/custom-datatable/custom-datatable';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 10
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: "center",
    },
}));


const HomePage = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            {/* Simpple cards for tasks */}
            <div className={classes.root}>
            <Grid container justify="center" spacing={3} className={classes.paper}>
                <Grid container justify="center" item xs={12} md={4} >
                    <Card />
                </Grid>
                <Grid container justify="center" item xs={12} md={4} >
                    <Card />
                </Grid>
                <Grid container justify="center" item xs={12} md={4} >
                    <Card />
                </Grid>
            </Grid>
                {/* Show more button */}
                <Grid container justify="center" spacing={3} className={classes.paper}>
                    <Button variant="contained" color="secondary">Show more</Button>
                </Grid>

            {/*  Logs of the activity  */}
                <Grid container justify="center" spacing={3} className={classes.paper}>
                    <CustomDataTable />
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default HomePage;
import React , { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player/lazy';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 140,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'rgb(180, 180, 180)',

    },
}));

const Style = {
    height: 300,
};



const InterviewToolkit = () => {
    const classes = useStyles();

    const [interviewTookit, setToolkit] = useState([]);

    useEffect(() => {
        axios.get('https://project-server-loveleen.herokuapp.com/api/toolkit').then((response) => {
            setToolkit(response.data);
            console.log(response);
        });
    }, []);
    return (<div style={{ padding: 20 }}>
        <h1 className="center-header"> Interview Tool Kit </h1>
        <Grid container 
            spacing={5} justify="center">
            {interviewTookit.map((sample) => (
                <Grid item md={4}>
                    <Paper className={classes.paper}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia style={Style}>
                                    <ReactPlayer
                                        width='100%'
                                        height='100%'
                                        url={sample.webPreviewUrl}
                                        controls
                                    />
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h3">
                                    {sample.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Paper>
                </Grid>
            ))}
        </Grid>
    </div>
    );
}

export default InterviewToolkit;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const UICard = (
    (props) => {
        const classes = useStyles();
        const bull = <span className={classes.bullet}>•</span>;
        const { message, temp } = props
        console.log(temp);
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {message}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {temp !== undefined ? temp['temp'] : ''}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
)

export {
    UICard,
}
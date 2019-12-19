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
        marginBottom: 20,
    },
});

const UICard = (
    (props) => {
        const { data } = props
        console.log(data);
        return (
            <Card>
                <CardContent>
                    <Typography variant="h3" component="h2">
                        {data.city}
                    </Typography>
                    <Typography variant="h4" component="p">
                        {data.weather_data.main !== undefined ? data.weather_data.main['temp'] : ''} {data.units === 'Metric' ? ' ํC' : ' ํF'}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
)

export {
    UICard,
}
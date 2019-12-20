import React from 'react';
import { Card, Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const UICard = (
    (props) => {
        var cardStyle = {
            display: 'block',
            transitionDuration: '0.3s',
        }

        const { data } = props
        return (
            <Grid>
                <Card style={cardStyle}>
                    <CardContent>
                        <Typography variant="h3" component="h2">
                            {<img src={data.description}></img>}
                        </Typography>
                        <Typography variant="h3" component="h2">
                            {data.city}
                        </Typography>
                        <Typography variant="h4" component="p">

                            อุณหภูมิ : {data.weather_data.main !== undefined ? data.weather_data.main['temp'] : ''} {data.units === 'Metric' ? ' ํC' : ' ํF'}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid >
        )
    }
)



export {
    UICard,
}
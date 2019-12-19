import React from 'react'
import axios from 'axios'
import { TextField, Grid } from '@material-ui/core'
import { UICard } from './common/MaterialUI';

const BASE_URL = process.env.REACT_APP_API_ENDPOINT

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: 'Bangkok',
            weather_data: []
        };

        this.onChnage = this.onChnage.bind(this);
    }

    componentDidMount() {
        axios.get(BASE_URL + '/weather?q=Bangkok&units=imperial&APPID=870de8f88ccba7aee687b1741eecc8fa')
            .then(({ data }) => {
                this.setState(
                    { weather_data: data }
                );
            })
            .catch((err) => { })
    }
    onChnage = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Weather Today</h1>
                <form autoComplete="off">
                    <Grid xs={12} md={12} item >
                        <TextField
                            id="standard-basic"
                            name='city'
                            value={this.state.city}
                            label="Input Your City"
                            onChange={this.onChnage}
                        />
                    </Grid>
                    <UICard message={this.state.city}
                        temp={this.state.weather_data.main}
                    ></UICard>
                </form>
            </div>
        )
    }


}

export default Home
import React from 'react'
import axios from 'axios'
import { TextField, Grid } from '@material-ui/core'
import { UICard } from './common/MaterialUI';

const BASE_URL = process.env.REACT_APP_API_ENDPOINT
const APPID = process.env.APPID

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: 'Bangkok',
            units: 'metric',
            weather_data: []
        };

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        // &units=metric
        axios.get(BASE_URL + `/weather?q='${this.state.city}'&units='${this.state.units}'&APPID='${APPID}'`)
            .then(({ data }) => {
                this.setState(
                    { weather_data: data }
                );
            })
            .catch((err) => {
                console.log(err);
            })
    }

    onChange = async (e) => {
        await axios.get(BASE_URL + `/weather?q='${e.target.value}'&units='${this.state.units}'&APPID='${APPID}'`)
            .then(({ data }) => {
                this.setState(
                    {
                        weather_data: data,
                        [e.target.name]: e.target.value
                    }
                );
            })
            .catch((err) => {
                console.log(err);
            })
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
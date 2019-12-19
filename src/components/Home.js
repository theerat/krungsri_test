import React from 'react'
import axios from 'axios'
import { TextField, Grid, GridList, Link } from '@material-ui/core'
import { UICard } from './common/MaterialUI';

const BASE_URL = process.env.REACT_APP_API_ENDPOINT
const APPID = '870de8f88ccba7aee687b1741eecc8fa'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            units: 'metric',
            weather_data: []
        };

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        // &units=metric
        const url = BASE_URL + `/weather?q=${this.state.city}&units=${this.state.units}&APPID=${APPID}`
        console.log(url);
        axios.get(url)
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

        this.setState({
            [e.target.name]: e.target.value,
        });

        const url = BASE_URL + `/weather?q=${e.target.value}&units=${this.state.units}&APPID=${APPID}`
        console.log(url);
        await axios.get(url)
            .then(({ data }) => {
                this.setState({
                    weather_data: data
                });
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
                    <Grid xs={12} md={12} >
                        <TextField
                            id="standard-basic"
                            name='city'
                            label="Input Your City"
                            onChange={this.onChange}
                        />
                        <Link href="#" name='units' onClick={() => {
                            this.setState({
                                units: 'Metric'
                            });
                        }}>
                            ํC
                        </Link>
                        <Link href="#" name='units' onClick={() => {
                            this.setState({
                                units: 'Imperial'
                            });
                        }}>
                            ํF
                        </Link>
                    </Grid>
                    <GridList padding={20}>
                        <Grid container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            xs={12}
                            md={12}>
                            <UICard data={this.state}></UICard>
                        </Grid>
                    </GridList>
                </form>
            </div>
        )
    }


}

export default Home
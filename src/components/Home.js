import React from 'react'
import axios from 'axios'
import { TextField, Grid, GridList, Link } from '@material-ui/core'
import { UICard } from './common/MaterialUI';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    Link: {

        marginRight: 10
    },
    Form: {

    },
    Top10: {
        marginTop: 10,
    }
};

const BASE_URL = process.env.REACT_APP_API_ENDPOINT
const APPID = '870de8f88ccba7aee687b1741eecc8fa'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: 'BANGKOK',
            units: 'metric',
            description: '',
            weather_data: []
        };

        this.onChange = this.onChange.bind(this);
        this.onhandleClick = this.onhandleClick.bind(this);
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
                this.getImageURL(data.weather[0].description)
            })
            .catch((err) => {
                this.setState({
                    description: '',
                    weather_data: []
                });
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
                console.log('=== > data');
                console.log(data);
                this.setState({
                    weather_data: data
                });

                this.getImageURL(data.weather[0].description)
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    description: '',
                    weather_data: []
                });
            })
    }

    onhandleClick = async (e) => {

        const name = e.target.name
        const value = e.target.dataset.space

        this.setState({
            [name]: value,
        });

        const url = BASE_URL + `/weather?q=${this.state.city}&units=${value}&APPID=${APPID}`
        console.log(url);
        await axios.get(url)
            .then(({ data }) => {
                this.setState({
                    weather_data: data
                });
                this.getImageURL(data.weather[0].description)
            })
            .catch((err) => {

                console.log(err);
            })
    }

    getImageURL = async (description) => {
        let url = ''
        if (description === 'few clouds') {
            url = '//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'
        }
        else if (description === 'clear sky') {
            url = '//ssl.gstatic.com/onebox/weather/48/sunny.png'
        }
        else if (description === 'heavy intensity rain' || description === 'rain' || description === 'moderate rain') {
            url = '//ssl.gstatic.com/onebox/weather/48/rain.png'
        }
        else {
            url = ''
        }

        this.setState({
            description: url
        });
    }


    render() {
        const { classes } = this.props;
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
                    </Grid>
                    <Grid xs={12} md={12} className={classes.Top10} >
                        <Link className={classes.Link} variant="h4" data-space="Metric" value='Metric' href="#" name='units' onClick={this.onhandleClick}>
                            ํC
                        </Link>
                        <Link className={classes.Link} variant="h4" data-space="Imperial" value='Imperial' href="#" name='units' onClick={this.onhandleClick}>
                            ํF
                        </Link>
                    </Grid>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        xs={12}
                        md={12}
                        sm={12}
                        className={classes.Top10}>
                        <UICard data={this.state}></UICard>
                    </Grid>
                </form>
            </div >
        )
    }


}

export default withStyles(styles)(Home)
import React from 'react';
import { Container} from 'react-bootstrap';

const CityWeather = (props) => {
    return (
       <Container>
           <br/>
           {props.cityWeather.cod === 200 ? <div><p><strong>{props.cityWeather.name}</strong></p>
           <p>It is currently <strong>{Math.round(props.cityWeather.main.temp)} </strong>
           degrees out with {props.cityWeather.weather[0].description} </p></div> : null }
       </Container>
    );
}

export default CityWeather;
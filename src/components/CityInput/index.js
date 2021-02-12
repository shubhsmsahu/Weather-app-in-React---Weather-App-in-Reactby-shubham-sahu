import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CityInput = ({city,setCity,fechCityWeather}) => {
    const [error,setError] = React.useState("");
    
    const handleInputChange = (event) => {
        setCity(event.target.value);
    }

    const handleClick =() =>{
        // while logic to see is field is empty
        if(!city)
        {
            // alert("City is empty");
            setError("city field is empty");
        }else {
            setCity("");
            // make api call
            fechCityWeather()
        }
    }

    // console.log("city is ", city);
    return (

        <Form className="container">
           <Form.Group controlId="formBasicEmail">
               <Form.Label>City</Form.Label>
               {/* TODO: make input Box read if error */}
                   <Form.Control
                    value={city}
                    type="text" placeholder="Enter city" onChange={handleInputChange}/>
                    <p className="text-danger">{error}</p>
            </Form.Group>

            <Button variant="primary"  onClick={handleClick} >
            Submit
            </Button>
        </Form>
    );

}

export default CityInput;
import React from 'react';


class Form extends React.Component{
    render(){
        return(
            <div className="myForm">
                <form onSubmit={this.props.getWeather} >
			<select id = "endpoint">
			  <option value="api.openweathermap.org/data/2.5/">Weather Endoint</option>
			  <option value="localhost:8090/">Localhost</option>
			</select>
<h6>Weather Endpoint = api.openweathermap.org/data/2.5/</h6>
<h6>LocalHost = localhost:8090/</h6>

		     <br/>
                    <input type="text" className="myInputs form-control" name="city" placeholder="City"/>
                    <input type="text" className="myInputs form-control" name="country" placeholder="Country"/>
                    <button className="btn btn-warning" >Get Weather</button>
                </form>
            </div>
        );
    }
}


export default Form;

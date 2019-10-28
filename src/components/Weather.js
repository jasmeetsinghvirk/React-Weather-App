import React from 'react';


class Weather extends React.Component{
    render(){
        return(
            <div className="resultDiv">
                {this.props.city && this.props.country && <p className="results">Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p className="results">Temperature: {this.props.temperature}°C</p>}
                {this.props.humidity && <p className="results">Humidity: {this.props.humidity}%</p>}
                {this.props.description && <p className="results">Description: {this.props.description}</p>}
                {this.props.error && <p className="results">{this.props.error}</p>}
            </div>
        );
    }
}


export default Weather;
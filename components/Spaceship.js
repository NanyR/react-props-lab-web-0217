import React from 'react';
import ReactDOM from 'react-dom';


class Spaceship extends React.Component{
  render(){
    return(
        <div>
          <h1>Name: {this.props.name}</h1>
          <h2>Speed: {this.props.speed}</h2>
          <p>Rockets: {this.props.hasRockets}</p>
          <p>Colors: {this.props.colors.join(', ')}</p>
        </div>
    )
  }

}

Spaceship.propTypes={
  name:React.PropTypes.string,
  speed:React.PropTypes.number

}

Spaceship.defaultProps={
  hasRockets:false,
  colors:['black', 'red']
}

ReactDOM.render(<Spaceship name="Name"
speed= "1000"
/>, document.getElementById('main'));

export default Spaceship;

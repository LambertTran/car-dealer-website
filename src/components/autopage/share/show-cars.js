import React,{Component} from 'react';

class ShowCars extends Component{

  handleOnClick(car){
    this.props.selectedCar(car)
    if(this.props.handleOpenModal){
      this.props.handleOpenModal();
    }
  }

  renderCars(car){
    return(
      <div onClick={() => this.handleOnClick(car)} key={car._id} className="car-item">
        <img 
          src={car.paths[0]} 
          alt="something" 
          className="img-thumbnail"
        />
        <h4>{car.name}</h4>
      </div>
    )
  }

  render(){
    return(
      <div>
        {this.props.cars.map(car => this.renderCars(car))}
      </div>
    )
  }
}

export default ShowCars;
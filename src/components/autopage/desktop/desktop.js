import React,{Component} from 'react';
import ShowCars from '../share/show-cars';
import ShowCarDetail from '../share/show-car-detail';

class ComputerView extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4 showcars">
            <ShowCars 
              cars={this.props.cars} 
              selectedCar={this.props.handleSelectedCar} 
            />
          </div>
          <div className="col-md-8 showdetails">
            <ShowCarDetail selectedCar={this.props.selectedCar} />
          </div>
        </div>
      </div>
    )
  }
}

export default ComputerView;

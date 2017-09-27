import React,{Component} from 'react';
import ShowCars from '../share/show-cars';
import ShowCarDetail from '../share/show-car-detail';

class DesktopView extends Component{
  render(){
    return(
      <div className="box">
          <div className="car-list">
            <ShowCars 
              cars={this.props.cars} 
              selectedCar={this.props.handleSelectedCar} 
            />
          </div>
          <div className="showdtails">
            <ShowCarDetail selectedCar={this.props.selectedCar} />
          </div>
      </div>
    )
  }
}

export default DesktopView;

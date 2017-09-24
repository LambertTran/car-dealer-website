import React,{Component} from 'react';
import SlideShowImages from './slide-show-images';

class ShowCarDetail extends Component{
  
  
 
  render(){
    var selectedCar = this.props.selectedCar;
    if(!selectedCar.name){
      return <h1> Please select a car</h1>
    } 
    return(
      <div>
        <h1>{selectedCar.name} - {selectedCar.year}</h1>
        <SlideShowImages images = {selectedCar.paths} />
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Status</th>
                <th>Odometer</th>
                <th>Transmission</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectedCar.status}</td>
                <td>{selectedCar.odometer}</td>
                <td>{selectedCar.transmission}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="float-left">
          <h3>Description:</h3>
          <p>{selectedCar.description}</p>
        </div>
      </div>
    )
  }
  
}

export default ShowCarDetail;
import React,{Component} from 'react';
import { connect } from 'react-redux';

/** import components **/
import NavBar from '../share/navbar';

/** import action helpers **/
import {fetchAllCars} from '../../actions';


import ComputerView from './desktop/desktop';
import MobileView from './mobile/mobile';

class Autos extends Component{

  constructor(props){
    super(props);
    this.state={selectedCar:{},
                width:window.innerWidth};
    this.handleSelectedCar = this.handleSelectedCar.bind(this);
  }
  
  /** handle screen change **/
  componentWillMount() {
    this.props.fetchAllCars();
    // window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.handleWindowSizeChange);
  // }

  // handleWindowSizeChange(){
  //   this.setState({ width: window.innerWidth });
  // };
  
  /** change selected car **/
  handleSelectedCar(car){
    console.log(car)
    this.setState({selectedCar:car});
  }
  
  /** display different components base on screen size **/
  // handleComponentChange(isMobile){
  //   if(isMobile){
  //     return(
  //       <MobileView
  //         cars = {this.props.cars} 
  //         handleSelectedCar= {this.handleSelectedCar} 
  //         selectedCar={this.state.selectedCar}
  //       />
  //     )
  //   }
  //   return(
  //     <ComputerView 
  //       cars = {this.props.cars} 
  //       handleSelectedCar= {this.handleSelectedCar} 
  //       selectedCar={this.state.selectedCar}
  //     />
  //   )
  // }

  render(){
    const { width } = this.state;
    const isMobile = width < 770;
    return(
      <div className="container-fluid autos-bg">
        <NavBar />
        <MobileView 
          cars = {this.props.cars} 
          handleSelectedCar= {this.handleSelectedCar} 
          selectedCar={this.state.selectedCar}
        />
      </div>
    )
  }  
  
}

function mapStateToProps(state){
  return{
    cars:state.cars
  }
}

export default connect(mapStateToProps,{fetchAllCars})(Autos);
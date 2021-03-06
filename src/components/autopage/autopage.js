import React,{Component} from 'react';
import { connect } from 'react-redux';

/** import components **/
import NavBar from '../share/navbar';
import DesktopView from './desktop/desktop';
import MobileView from './mobile/mobile';
import Footer from '../share/footer'; 

/** import action helpers **/
import {fetchAllCars} from '../../actions';



class Autos extends Component{

  constructor(props){
    super(props);
    this.state={selectedCar:{},
                width:window.innerWidth};
    this.handleSelectedCar = this.handleSelectedCar.bind(this);
    this.handleWindowSizeChange= this.handleWindowSizeChange.bind(this);
  }
  
  /** handle screen change **/
  componentWillMount() {
    this.props.fetchAllCars();
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange(){
    this.setState({ width: window.innerWidth });
  };
  
  /** change selected car **/
  handleSelectedCar(car){
    this.setState({selectedCar:car});
  }
  
  /** display different components base on screen size **/
  handleComponentChange(isMobile){
    if(isMobile){
      return(
        <div className="container-fluid mobile-view">
          <NavBar /> 
          <MobileView 
            cars = {this.props.cars} 
            handleSelectedCar= {this.handleSelectedCar} 
            selectedCar={this.state.selectedCar}
          />
          <Footer />
        </div>
      )
    }
    return(
      <div className="container-fluid desktop-view">
        <NavBar />
        <DesktopView 
          cars = {this.props.cars} 
          handleSelectedCar= {this.handleSelectedCar} 
          selectedCar={this.state.selectedCar}
        />
        <Footer style="absolute" />
      </div>
    )
  }

  render(){
    const { width } = this.state;
    const isMobile = width < 768;
    
    return (
      <div>
        {this.handleComponentChange(isMobile)}
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
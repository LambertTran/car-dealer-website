import React,{Component} from 'react';
import ReactModal from 'react-modal';

import ShowCars from '../share/show-cars';
import ShowCarDetail from '../share/show-car-detail';


class MobileView extends Component{
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(){
    this.setState({showModal:true})
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render(){
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col showcars">
              <ShowCars 
                cars={this.props.cars} 
                selectedCar={this.props.handleSelectedCar}
                handleOpenModal={this.handleOpenModal} 
              />
              <ReactModal 
                isOpen={this.state.showModal}
                contentLabel="Minimal Modal Example"
              >
                <button 
                  className="btn btn-primary float-right" 
                  onClick={this.handleCloseModal}
                >Close</button>
                <ShowCarDetail selectedCar={this.props.selectedCar} />
              </ReactModal>
            </div>  
          </div>
        </div>
      </div>
    )
  }
}

export default MobileView;
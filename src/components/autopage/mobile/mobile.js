import React,{Component} from 'react';
import Modal from 'react-modal';

import ShowCars from '../share/show-cars';
import ShowCarDetail from '../share/show-car-detail';

const customStyles={
  content:{
    top                   : '55%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height                : '500px',
    overflow              : 'scroll'
  }
}

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
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 cars-container">
              <ShowCars 
                cars={this.props.cars} 
                selectedCar={this.props.handleSelectedCar}
                handleOpenModal={this.handleOpenModal} 
              />
              <Modal 
                isOpen={this.state.showModal}
                style={customStyles}
                contentLabel="Car Description"
                >
                <button 
                  className="btn btn-primary float-right" 
                  onClick={this.handleCloseModal}
                >Close</button>
                <ShowCarDetail selectedCar={this.props.selectedCar} />
              </Modal>
            </div>  
          </div>
        </div>
    )
  }
}

export default MobileView;
import React,{Component} from 'react';

/** import components **/
import NavBar from '../share/navbar';
import ContactForm from './components/contact-form';
import ContactInfo from './components/contact-info';
import Footer from '../share/footer'; 

export default class About extends Component{

  constructor(props){
    super(props);
    this.state={width:window.innerWidth};
    this.handleWindowSizeChange= this.handleWindowSizeChange.bind(this);
  }
  
  /** reload component whenever width change **/
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange(){
    this.setState({ width: window.innerWidth });
  };

  renderFooter(isMobible){
    if(isMobible){
      return(
        <Footer style="relative" />        
      )
    }
    return(
      <Footer style="absolute" />        
    )
  }
  render(){
    const {width} = this.state;
    const isMobible = width < 750;
    return(
      <div className="container-fluid aboutpage">
        <NavBar />
        <div className="about-header">
          <h1>Contact</h1><hr/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <ContactInfo />        
            </div>
            <div className="col-12 col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
        {this.renderFooter(isMobible)}
      </div>
    )
  }
}

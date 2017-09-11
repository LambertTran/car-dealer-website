import React,{Component} from 'react';
import {scroller} from 'react-scroll';


import carpic from '../../images/carpic.jpg';
import xehoi from '../../images/xehoi.jpeg';


class HomePageBody extends Component{
  
  handleScroll(){
    scroller.scrollTo('sect2',{
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint"
    })
  }
  
  render(){
    var bgImg={
      backgroundImage: `url(${carpic})`
    }
    var bgImg2 = {
      backgroundImage: `url(${xehoi})`
    }
    return(
      <div>
        <div className="container-fluid">
          <section className="row">
            <div className="home" style={bgImg}>
              <h1>This is Danh Pham Startup Car Dealer</h1>
              <div className="down-btn">
                <a className="btn" onClick={() => this.handleScroll()}>
                  <i className="fa fa-arrow-circle-down fa-4x" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </section>
          <section className="row">
            <div className="content"></div>
          </section>
          <section id="sect2" className="row">
            <div className="home fixed-attachment" style={bgImg2}>
              hello2
            </div>
          </section>
          <div className="row">
            <div className="content"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePageBody;
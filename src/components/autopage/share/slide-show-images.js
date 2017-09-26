import React,{Component} from 'react';
import Hammer from 'hammerjs';
import $ from 'jquery';
import 'bootstrap/js/carousel.js';


class SlideShowImage extends Component{
  
  componentDidMount(){
$(".carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            $(".carousel").carousel('prev');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            $(".carousel").carousel('next');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});  }

  renderImages(img,i){
    return (
      <div key={i} className="carousel-item">
          <img className="d-block w-100" src={img} alt="First slide" />
      </div>
    )
  }  

  renderList(item,i){
    return <li key={i} data-target="#slideshow" data-slide-to={i}></li>
  }

  render(){
    var images = this.props.images;
    var reduceImg = images.slice(1,images.length);
    return(
      <div id="slideshow" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#slideshow" data-slide-to="0" className="active"></li>
            {reduceImg.map((each,i) => this.renderList(each,i+1))}
            
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={images[0]} alt="First slide" />
            </div>
            {reduceImg.map((each,i) => this.renderImages(each,i))}
          </div>
          <a className="carousel-control-prev" href="#slideshow" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#slideshow" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
      </div>
    )
  }
}

export default SlideShowImage;
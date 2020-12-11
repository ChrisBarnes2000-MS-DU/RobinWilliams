import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

class MyCarousel extends Component {
  render() {
    return (
      <div className="text-center">
        <Carousel width="700px" showArrows={true} dynamicHeight={true} infiniteLoop={true}>
          <div>
            <img src="https://www.chortle.co.uk/images/photos/small/mork_egg.jpg" alt="Mork Egg" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img
              src="https://iamfearlesssoul.com/wp-content/uploads/2018/07/FBCOVERFS.jpg"
              alt="Everyone You Meet Is Fighting A Battle"
            />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img
              src="https://1zl13gzmcsu3l9yq032yyf51-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Robin-Williams-Quotes-1.png"
              alt="No Matter What People Tell You"
            />
            {/* <p className="legend">Legend </p> */}
          </div>
          <div>
            <img
              src="https://i.pinimg.com/originals/27/89/16/278916a08683012bb633d9c70664fd17.jpg"
              alt="You Know What Music Is"
            />
            {/* <p className="legend">Legend </p> */}
          </div>
          <div>
            <img
              src="https://www.bucketlistpublications.com/wp-content/uploads/2014/08/f47e31a054ada8d327c8a53626b84faf.jpg"
              alt="I Used To Think"
            />
            {/* <p className="legend">Legend </p> */}
          </div>
          <div>
            <img
              src="https://bayart.org/wp-content/uploads/2018/05/robin-williams-quotes-about-life.jpg"
              alt="Saddet People Always Try Their Hardest"
            />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <img
              src="https://cdn.powerofpositivity.com/wp-content/uploads/2015/08/11882887_1136351459713621_1768566688_o.jpg"
              alt="Seize The Day."
            />
            {/* <p className="legend">Legend </p> */}
          </div>
          <div>
            <img
              src="https://pmcaonline.org/wp-content/uploads/2019/08/robin-williams-Quote-1024x1024.jpg"
              alt="Still A Lot To Learn"
            />
            {/* <p className="legend">Legend </p> */}
          </div>
        </Carousel>
      </div>
    );
  }
}

export default MyCarousel;

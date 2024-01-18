"use client"

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import vista from '../public/img/patner/best-vista-download-award.png'
import brothersoft from '../public/img/patner/brothersoft.png'
import cent from '../public/img/patner/CNET_rating.png'
import geardownload from '../public/img/patner/geardownload.png'
import goodfirms from '../public/img/patner/goodfirms-logo.png'
import rbytes from '../public/img/patner/rbytes.png'
import trustpilot from '../public/img/patner/trustpilot-logo.png'
import Image from "next/image";



export default class PatnerContent extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          <div>
            <a href="https://rafusoft.com/"><Image className="w-24" src={rbytes} alt="rbytes" /></a>
          </div>
          <div>
            <a href="https://www.trustpilot.com/review/rafusoft.com"><Image className="w-24" src={trustpilot} alt="trustpilot" /></a>
          </div>
          <div>
            <a href=""><Image className="w-24" src={brothersoft} alt="brothersoft" /></a>
          </div>
          <div>
            <a href=""><Image className="w-24" src={cent} alt="cent" /></a>
          </div>
          <div>
            <a href="https://www.goodfirms.co/company/rafusoft"><Image className="w-24" src={goodfirms} alt="goodfirms" /></a>
          </div>
          <div>
            <a href=""><Image className="w-24" src={vista} alt="vista" /></a>
          </div>
          <div>
          <a href=""><Image className="w-24" src={geardownload} alt="geardownload" /></a>
          </div>
        </Slider>
      </div>
    );
  }
}
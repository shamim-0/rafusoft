"use client"

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import a2i from '../public/img/stats/a2i.png'
import alibaba from '../public/img/stats/alibaba.png'
import basis from '../public/img/stats/basis.png'
import comodo from '../public/img/stats/comodo.png'
import ict from '../public/img/stats/download.png'
import dtalk from '../public/img/stats/dtalk.png'
import govt from '../public/img/stats/govt.png'
import microsoft from '../public/img/stats/microsoft.png'
import rogers from '../public/img/stats/rogers.png'
import sprint from '../public/img/stats/sprint.png'
import sun from '../public/img/stats/sun.png'
import uasid from '../public/img/stats/uasid.png'

import Image from "next/image";



export default class Patner extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
      <div className="max-w-7xl mx-auto px-5 mt-20">
        <Slider {...settings}>
            <div>
            <Image src={a2i} alt={a2i}></Image>
            </div>
            <div>
               <Image src={alibaba} alt={alibaba}></Image>
               </div>
              <div>
               <Image src={basis} alt={basis}></Image>
               </div>
              <div>
               <Image src={comodo} alt={comodo}></Image>
               </div>
              <div>
               <Image src={ict} alt={ict}></Image>
               </div>
              <div>
               <Image src={dtalk} alt={dtalk}></Image>
               </div>
              <div>
               <Image src={govt} alt={govt}></Image>
               </div>
              <div>
               <Image src={microsoft} alt={microsoft}></Image>
               </div>
              <div>
               <Image src={rogers} alt={rogers}></Image>
               </div>
              <div>
               <Image src={sprint} alt={sprint}></Image>
               </div>
              <div>
               <Image src={sun} alt={sun}></Image>
               </div>
              <div>
               <Image src={uasid} alt={uasid}></Image>
               </div>
        </Slider>
      </div>
    );
  }
}
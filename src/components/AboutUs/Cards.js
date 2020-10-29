import React from 'react'

import Cards from '../../components/shared/Cards'
import Background1 from '../../images/about-us/How-are-we-different-section/background1.svg';
import Background2 from '../../images/about-us/How-are-we-different-section/background2.svg';
import Background3 from '../../images/about-us/How-are-we-different-section/background3.svg';
import Pic1 from '../../images/about-us/How-are-we-different-section/pic1.svg';
import Pic2 from '../../images/about-us/How-are-we-different-section/pic2.svg';
import Pic3 from '../../images/about-us/How-are-we-different-section/pic3.svg';
import Shiny2 from '../../images/about-us/How-are-we-different-section/shiny2.svg';
import Shiny3 from '../../images/about-us/How-are-we-different-section/shiny3.svg';

export default function AboutUsCards() {

  const title1 = "Client-determined goals"
  const text1 = "We support the client in setting their own career, entrepreneurial or personal goals."
  const title2 = "One-on-one skills development"
  const text2 = "We do this through a tailored, project-based approach that meets unique goals and needs."
  const title3 = "Wrap-around supports"
  const text3 = "We have strategic partnerships with community organizations to provide additional support."

  return (
    <Cards 
      //Card 1
        title1 = {title1}
        text1 = {text1}
        pic1 = {Pic1}
        background1 = {Background1}

      //Card 2
        title2 = {title2}
        text2 = {text2}
        pic2 = {Pic2}
        background2 = {Background2}
        shiny2 = {Shiny2}

      //Card 3
        title3 = {title3}
        text3 = {text3}
        pic3 = {Pic3}
        background3 = {Background3}
        shiny3 = {Shiny3}
    />
  )
};
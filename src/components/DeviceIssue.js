import React, { Component } from 'react';
import Slider from "react-slick";

import classes from './DeviceIssue.css';

class DeviceIssue extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className={classes.DeviceIssue}>
                  <style>{cssstyle}</style>
          <Slider {...settings}>
            <div className={classes.DeviceIssue} id="home-issues">
                <section className={classes.Section}>
                    <div>
                        <div> 
                            <a href="https://www.cellphonerepair.com/smartphone-repair/iphone/"> 
                                <img src="https://images.cellphonerepair.com/wp-content/uploads/2016/08/iphone-home-issues.jpg" width="279" height="562" alt="broken iphone and repairs" /> 
                            </a>
                            <div className={classes.Category}>
                                <h3>Cracked Screen</h3>
                                <p>CPR&#8217;s iPhone <a href="https://www.cellphonerepair.com/common-issues/cracked-glass-replacement-repair/">cracked screen replacement services</a> are both fast and affordable. In fact, a majority of iPhone screen repairs can be completed within one business day, if not while you wait in-store.</p>
                                <h3>Water Damage</h3>
                                    <p>If your iPhone is suffering from <a href="https://www.cellphonerepair.com/common-issues/water-damaged-phone-repair/">water damage</a>, visit CPR. We will perform a professional diagnostic to determine the extent of the damage, clean out the device, flush out any debris and test accordingly.</p>
                                <h3>Speaker Not Working</h3>
                                    <p>If your iPhone speaker is muffled, distorted, or simply producing no sound at all, you may be in need of a speaker repair or replacement. Trust the experts at CPR to solve all of your iPhone audio issues.</p>
                            </div>
                            <div className="center"> <a tabindex="-1" className="btn red wide radius" href="https://www.cellphonerepair.com/smartphone-repair/iphone/">Let Us Fix It</a>
                            </div>
                            </div>
                            {/* <div className="device-carousel " data-thumb="Broken Samsung Galaxy?">
                                <div className="device-issues-image"> <a href="https://www.cellphonerepair.com/smartphone-repair/samsung/" tabindex="-1"> 
                                    <img src="https://images.cellphonerepair.com/wp-content/uploads/2016/10/samsung-repair-services.png" width="419" height="550" alt="broken samsung smartphones needing fixed" /> </a></div><div className="device-issue" id="col-broken-samsung-galaxy?"><h3>Cracked Screen</h3><p>One of the most common issues CPR specializes in is cracked screen repairs. Luckily, most CPR screen repairs are completed the same day you bring in your damaged Samsung phone. Your Galaxy will look brand new after our affordable, speedy screen repairs.</p><h3>Water Damage</h3><p>Don&#8217;t assume your Samsung Galaxy is beyond repair after suffering from water damage. CPR technicians disassemble your phone, clean and repair it from the inside out, and reassemble it carefully. You can rest assured knowing your phone is in good hands.</p><h3>Speaker Not Working</h3><p>If your Samsung Galaxy no longer sounds loud and clear, you may have speaker issues. Whether you just need a tune up or a full speaker replacement, CPR has you covered.</p></div><div className="device-issue" id="coltwo-broken-samsung-galaxy?"><h3>No Signal</h3><p>When your Samsung Galaxy is running extra slow, there may be a variety of issues affecting your signal. CPR technicians will examine your phone, find the culprit, and make any necessary repairs or replacements to get your phone back in working order.</p><h3>Dead Battery</h3><p>If you&#8217;re finding that your Samsung Galaxy won&#8217;t stay charged no matter how often you charge it, visit your local CPR. We will either repair or replace your current battery to restore your phone&#8217;s lifespan to its original state.</p><h3>Broken Buttons</h3><p>A broken or <a href="https://www.cellphonerepair.com/common-issues/home-button-replacement-repair/">malfunctioning home button</a> can throw off your entire Samsung Galaxy experience. You can count on CPR for a fast repair services, so your device is back in your hands as soon as possible.</p></div>
                        </div> */}
                        
                    </div>
                </section>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
            <div>
              <h3>9</h3>
            </div>
          </Slider>
        </div>
      );
    }
}
const cssstyle = `
h3 {
    width: 400px;
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`
export default DeviceIssue;
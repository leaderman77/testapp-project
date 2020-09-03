import React, { Component } from 'react';
import CellControl from '../../components/CellControl/CellControl';
import img1 from '../../assets/images/samsunga50.jpg';
import homeImg from '../../assets/images/free-cell-phone-repair-2-990x500.jpg';
import HomeImageController from '../../components/HomController/HomeImageController';
import classes from './CellBuilder.css';
import DeviceIssue from '../../components/DeviceIssue';

class CellBuilder extends Component {
    state = {
        img: img1,
        description: 'New Nokia C Series C2-01 Black Gold',
        price: '$36.57'
    }
    render () {
        return (
            <div>
                <HomeImageController img={homeImg}/>
                <DeviceIssue />
                {/* <CellControl img={this.state.img} description={this.state.description} price={this.state.price}/>
                <CellControl img={this.state.img} description={this.state.description} price={this.state.price}/>
                <CellControl img={this.state.img} description={this.state.description} price={this.state.price}/>
                <CellControl img={this.state.img} description={this.state.description} price={this.state.price}/> */}
            </div>
        )
    }
}

export default CellBuilder;
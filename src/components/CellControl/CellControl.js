import React from 'react';
import classes from './CellControl.css';

const cellControl = (props) => (
    <div className={classes.CellControl} style={{height: props.height}}>
        <div >
            <img className={classes.Img} src={props.img} alt="img1"/>
        </div>
        <div>
            {props.description}
        </div>
        <div>
            {props.price}
        </div>
    </div>
);

export default cellControl;
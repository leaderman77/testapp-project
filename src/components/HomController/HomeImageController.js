import React from 'react';

import classes from './HomeImageController.css';

const homeImageController = (props) => (
    <div>
        <img className={classes.HomeImageController} src={props.img} alt="img1"/>        
    </div>
);

export default homeImageController;
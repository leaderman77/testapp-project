import React from 'react';
import mainLogo from '../../assets/images/main_logo.jpg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={mainLogo} alt="MyHome"/>
    </div>
);

export default logo;
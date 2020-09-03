import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>HOME</NavigationItem>
        <NavigationItem link="/shop" exact>SHOP</NavigationItem>
        <NavigationItem link="/repair" exact>REPAIR</NavigationItem>
        <NavigationItem link="/contact-us" exact>CONTACT US</NavigationItem>
        <NavigationItem link="/login" exact>LOGIN</NavigationItem>
    </ul>
);

export default navigationItems;
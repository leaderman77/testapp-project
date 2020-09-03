import React from 'react';

import classes from './DeviceIssue.css';

const deviceIssue = () => (
    <div className={classes.DeviceIssue}>
        {/* <a href="https://www.cellphonerepair.com/smartphone-repair/iphone/" tabindex="-1"> 
            <img src="https://images.cellphonerepair.com/wp-content/uploads/2016/08/iphone-home-issues.jpg" width="279" height="562" alt="broken iphone and repairs" /> 
        </a> */}
        <h1 className={classes.Category}>Broken iPhone?</h1>        
        <h1 className={classes.Category}>Broken Samsung Galaxy?</h1> 
        <h1 className={classes.Category}>Broken iPad?</h1> 
        <h1 className={classes.Category}>Computer Not Working?</h1> 
    </div>
);

export default deviceIssue;
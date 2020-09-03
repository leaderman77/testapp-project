import React, { Component } from 'react';
import classes from './Layout.css';
import Auxiliary from '../Auxiliary';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import CellBuilder from '../../containers/CellBuilder/CellBuilder';

class Laout extends Component {
    render () {
        return (
            <Auxiliary>
                <Toolbar/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <CellBuilder/>
            </Auxiliary>
        )
    }
}

export default Laout;
import React from 'react';
import { connect } from 'react-redux';

import HalfPage from './components//halfpage/halfpage.js';
import TextField from './components//textfield/textfield.js';
import Medium from './components/medium/medium.js';
import AppBar from './components/appbar/appbar.js';
import './app.css';

export const App = _props => {
    return (
        <div className="container">
            <AppBar />
            <div className="main">
                <HalfPage header="Markdown">
                    <TextField />
                </HalfPage>
                <HalfPage
                    header="Medium"
                    subheader="(paste to medium)">
                    <Medium />
                </HalfPage>
            </div>
        </div>
    );
};

export default connect(state => ({
    menuactive: state.menuactive,
}))(App);

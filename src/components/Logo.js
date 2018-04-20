import React, { Component } from 'react';
import Tilt from 'react-tilt';
import Tachyons from 'tachyons';
import brain from '../icons/brain.png';
import '../css/Logo.css';

class Logo extends Component {
    render() {

        return (
            <div className="ma4 mt0">
                <Tilt className="Tilt br2 shadow-2" options={{ max: 25 }} style={{ height: 150, width: 150 }} >
                    <div className="Tilt-inner pa3"><img src={brain} alt="logo" style={{paddingTop:'5px'}}/> </div>
                </Tilt>
            </div>
        );
    }
}

export default Logo;
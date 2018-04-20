import React, { Component } from 'react';
import '../css/FaceRecognition.css';

class FaceRecognition extends Component {
    render() {

        const { imageURL, boxes } = this.props;
        

        return (
            <div className="center-image ma">
              <div className="absolute mt2">
                    <img id="input-image" alt="" src={imageURL} width="500px" height="auto" />

                    {
                        boxes.map((box) => (<div className="bounding-box" key={box.rightCol * box.leftCol} style={{top: box.topRow, right:box.rightCol , bottom: box.bottomRow, left: box.leftCol }}></div>))
                    }
                    
                </div>
            </div>
        );
    }
}

export default FaceRecognition;
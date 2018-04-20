import React, {Component} from 'react';
import '../css/ImageLinkForm.css';

class ImageLinkForm extends Component {
    render() {
        const { onInputChange, onButtonSubmit } = this.props;

        return(
            <div>

                <p className="f3">
                    {"This will detect faces in your pictures!"}
                    </p>
                    <div className="main-form">
                        <div className="form pa4 br3 shadow-5">
                <input type="text" name="imageLink" className="f4 pa2 w-70 center" onChange={onInputChange}/>
                <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>Detect</button>
                </div>
               </div>
            </div>
        );
    }
}

export default ImageLinkForm;
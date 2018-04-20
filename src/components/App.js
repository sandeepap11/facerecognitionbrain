import React, { Component } from 'react';
import '../css/App.css';
import Particles from 'react-particles-js';
import Navigation from './Navigation';
import ImageLinkForm from './ImageLinkForm';
import Logo from './Logo';
import Rank from './Rank';
import SignIn from './SignIn';
import FaceRecognition from './FaceRecognition';
import Clarifai from 'clarifai';

const particlesOptions = {
  particles: {
    number: {
      value: 190,
      density: {
        enable: true,
        value_area: "800"
      }
    }
  },
  interactivity: {

    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
    }
  }
};

const app = new Clarifai.App({
  apiKey: 'a5a2342139154412bac5845ce07493f9'
});

class App extends Component {

  state = {
    input: "",
    imageURL: "",
    boxes: [],
    route: "signin"
  };

  calculateFaceLocation = (data) => {
    const clarifaiFaces = data.outputs[0].data.regions;

    const image = document.getElementById("input-image");
    const width = Number(image.width);
    const height = Number(image.height);

    let boxes = [];
    let face = {};
    for (let clarifaiFace of clarifaiFaces) {

      face = clarifaiFace.region_info.bounding_box;

      boxes.push({
        leftCol: face.left_col * width,
        topRow: face.top_row * height,
        rightCol: width - (face.right_col * width),
        bottomRow: height - (face.bottom_row * height)
      });

    }

    return boxes;

  };

  displayFaceBox = (boxes) => {

    this.setState({ boxes });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });

  };

  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input });

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch((err) => console.log("There were errors", err));

  };

  render() {

    return (
      <div className="center">
        <Particles className="particles"
          params={particlesOptions}
        />

        <Navigation />
        <Logo />
        {
        
        this.state.route === "signin" ?
        <SignIn />
        :<div>
          <Rank />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition imageURL={this.state.imageURL} boxes={this.state.boxes} />
        </div>
        }
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { glassesArr } from "./data";
import "./style.css";

export default class Ex_Glasses extends Component {
  state = {
    img: "",
    name: "",
    desc: "",
    displayDesc: "none",
  };

  handleTryOnGlasses = (img, name, desc) => {
    this.setState({ img: img, name: name, desc: desc, displayDesc: "block" });
  };

  renderGlassesList = () => {
    return glassesArr.map((glasses) => {
      return (
        <div className="col-4">
          <button
            onClick={() => {
              this.handleTryOnGlasses(glasses.url, glasses.name, glasses.desc);
            }}
          >
            <img src={glasses.url} />
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage:
            "url(" + "./glassesEx/glassesImage/background.jpg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        {/* HEADER */}
        <div className="header text-center w-100">
          <h1 className="display-4 fw-bold text-white">
            TRY GLASSES APP ONLINE
          </h1>
        </div>

        {/* MODEL */}
        <div className="model d-flex justify-content-around">
          <div className="model__content">
            <img src="./glassesEx/glassesImage/model.jpg" />
            <img className="glasses" src={this.state.img} />
            <div
              class="glasses__desc"
              style={{ display: this.state.displayDesc }}
            >
              <h5 className="fw-bold text-white">{this.state.name}</h5>
              <p className="text-white-50">{this.state.desc}</p>
            </div>
          </div>
        </div>

        {/* GLASSES MENU */}
        <div className="glasses-show container">
          <div class="row">{this.renderGlassesList()}</div>
        </div>
      </div>
    );
  }
}
// ./glassesImage/background.jpg

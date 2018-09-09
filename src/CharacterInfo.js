import React, { Component } from "react";

class CharacterInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    console.log("card was clicked!");
    this.setState({ flipped: !this.state.flipped });
  }

  render() {
    const { characterInfo } = this.props;
    const { flipped } = this.state;

    return (
      <div className="container">
        <div onClick={this.onClick} className="flex">
          <img
            className={`card flex__side flex__side--front ${flipped &&
              "flex__flip--front"}`}
            src="http://i281.photobucket.com/albums/kk221/peluca_wii/Screenshot%20from%202018-09-08%2013-15-46_zpsxunrdc0y.png"
            alt="Frontside of Flexbox playing card"
          />
          <div
            className={`card flex__side  flex__side--back ${flipped &&
              "flex__flip--back"}`}
          >
            <p className="flex__side--back--name">Name: {characterInfo.name}</p>
            <p className="flex__side--back--homeplanet">Home Planet:</p>
          </div>
        </div>
      </div>
    );
  }
}
export default CharacterInfo;

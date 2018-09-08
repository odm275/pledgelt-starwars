import React from "react";

const Character = () => {
  return (
    <div className="container">
      <div className="flex">
        <img
          className="card flex__side flex__side--front"
          src="http://i281.photobucket.com/albums/kk221/peluca_wii/Screenshot%20from%202018-09-08%2013-15-46_zpsxunrdc0y.png"
          alt="Frontside of Flexbox playing card"
        />
        <div className="card flex__side flex__side--back">
          <p className="flex__side--back--name">Name: Pancho</p>
          <p className="flex__side--back--homeplanet">Home Planet: Earth</p>
        </div>
      </div>
    </div>
  );
};

export default Character;

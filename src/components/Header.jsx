import React from "react";
import "./Header.css";
import Truck from "../assets/truck.jpg";

export default function Header() {
  return (
    <header>
      <div className="header-container-1">
        <img src={Truck} alt="" srcset="" />
        <div className="header-body">
          <h1>
            Discover Best <span className="food-color">Food</span> and Drinks
          </h1>
          <p>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <button>Explore Now</button>
        </div>
      </div>
      <div className="header-container-2">
        <img
          src="https://s3-alpha-sig.figma.com/img/c2a9/c613/9cad959fc06da22d2d90d91c2fed69db?Expires=1694390400&Signature=RJPPjNt6IEl4UloNlFcMwUIGjTuiBpfYKfh4~qQRK0Ks8nSAlI6OnlCTI~LogDLhZSW-cIfmKgp2kjfE4WvwCfAgBNwmouXrekAeh9cgTXat-Lwqd35vTFiSJnLiThEh7MAs-0wxuLPIqdFMBe96lfolL9EDUP2zcdkqI-aIMRRRZaUPeqpBkNw4-LZLsiFASn3pvGZVePl4~Jmi~ynpKJMdaa-hluTj5y7PiAOMnavyr2d01TXZXPZDDupaAALmKmsJXgRdEZ24m4fbywl83grQ~-rQi2TxU8OlrOE61UErSBcXBH3D9y-91tH~Bj~mkhyueIUuKhfLETF1fvryNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          srcset=""
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="752"
          height="839"
          viewBox="0 0 752 839"
          fill="none"
        >
          <path
            d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z"
            fill="#E23744"
          />
        </svg>
        <div color="black" codeclassName="svg-btn">
          wefesgesg
        </div>
      </div>
    </header>
  );
}

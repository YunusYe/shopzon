import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">En Kaliteli Ayakkabılar</div>
            <div className="text-lg my-4">Just do it .</div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/96610838-ebc8-4e42-9d4b-acaec7311b1c/custom-dunk-low-unlocked-by-you.png"
            alt=""
          ></img>
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">En Kaliteli Ayakkabılar</div>
            <div className="text-lg my-4">Just do it .</div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/96610838-ebc8-4e42-9d4b-acaec7311b1c/custom-dunk-low-unlocked-by-you.png"
            alt=""
          ></img>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;

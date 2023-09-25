import React, { useEffect } from "react";
import "./slider.css";
import { nextSlide, prevSlide } from "../../utilities/slices/sliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../assets/data/dummyData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(
      () => dispatch(nextSlide(slideIndex + 1)),
      2000
    );

    return () => clearInterval(interval);
  }, [slideIndex, dispatch]);

  return (
    <div className="slider">
      {sliderData.map((item) => {
        return (
          <div className="slider__img" key={item.id}>
            {parseInt(item.id) === slideIndex && (
              <img src={item.img} alt="shoes" />
            )}
          </div>
        );
      })}

      <div className="slider__button">
        <span
          className="slider__buttonLeft"
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
        >
          <AiOutlineLeft size={25} />
        </span>
        <span
          className="slider__buttonRight"
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          <AiOutlineRight size={25} />
        </span>
      </div>
    </div>
  );
};

export default Slider;

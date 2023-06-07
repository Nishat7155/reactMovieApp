import React from "react";
import "./series.css";
import Ucard from "../upcoming/Ucard";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { series } from "../../dummyData";

const Series = ({ items, title }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="series">
      <div className="container">
        <div className="heading flexSB">
          <h1>{title}</h1>
          <Link to='/'>View All</Link>
        </div>
        <div className="content">
          <Slider {...settings}>
            {items.map((item) => (
              <Ucard key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Series;

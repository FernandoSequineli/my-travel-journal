import React from "react";
import pathIcon from "../assets/path.png";

const Card = (props) => {
  // description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.";
  //id: 1
  // endDate: "24 Jan, 2021";
  // googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8";
  // imageUrl: "https://source.unsplash.com/WLxQvbMyfas";
  // location: "Japan";
  // startDate: "12 Jan, 2021";
  // title: "Mount Fuji";

  return (
    <main>
      <div className="main-left">
        <img src={props.item.imageUrl} alt="/" />
      </div>
      <div className="main-right">
        <div className="location">
          <img src={pathIcon} alt="/" />
          <span className="location-name">{props.item.location}</span>
          <a className="location-link" href={props.item.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="title">{props.item.title}</h2>
        <div>
          <p className="dates">
            <span>{props.item.startDate}</span> -{" "}
            <span>{props.item.endDate}</span>
          </p>
        </div>
        <p className="description">{props.item.description}</p>
      </div>
    </main>
  );
};

export default Card;

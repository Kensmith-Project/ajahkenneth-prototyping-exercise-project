import React from "react";
import im from "../assets/safari.png";
import { BsArrowRight } from "react-icons/bs";

function Card(props) {
  return (
    <>
      <div className="card1">
        <div className="card-back">
          <img src={im} className="safari-img" />
        </div>
        <div className="note-text">
          <div className="item-text">
            <p className="frontend-text">Front-end </p>
            <p className="our-text"> . 1 Hour Ago</p>
          </div>
          <p className="topic-text">Css Grid</p>
          <p className="note-body-text">
            The CSS Grid Layout Module offers a grid-based layout system, with
            rows and columns, making it easier to design web pages without
            having to use floats and positioning.
          </p>
          <div className="card-footer">
            <p className="three-min">12 Min Read</p>
            <div className="link">
              <p className="read-more">Read Full</p>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

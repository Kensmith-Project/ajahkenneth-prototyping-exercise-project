import React from "react";
import im from "../assets/meme.png";
import { BsArrowRight } from "react-icons/bs";
function Card2(props) {
  return (
    <>
      <div className="card2">
        <div className="card-back2">
          <img src={im} className="safari-img" />
        </div>
        <div className="note-text">
          <div className="item-text">
            <p className="frontend-text">Front-end </p>
            <p className="our-text"> . 1 Hour Ago</p>
          </div>
          <p className="topic-text">Colors in Css</p>
          <p className="note-body-text">
            Colors play a vital role in making a web page usable or not. In CSS,
            we can control the foreground and background color of an element
            with the color and background properties.
          </p>
          <div className="card-footer">
            <p className="three-min">8 Min Read</p>
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

export default Card2;

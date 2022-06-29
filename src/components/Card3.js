import React from "react";
import im from "../assets/meme.png";
import { BsArrowRight } from "react-icons/bs";
function Card3(props) {
  return (
    <>
      <>
        <div className="card3">
          <div className="card-back3">
            {/* <img src={im} className="safari-img" /> */}
          </div>
          <div className="note-text">
            <div className="item-text">
              <p className="frontend-text">Front-end </p>
              <p className="our-text"> . 1 Hour Ago</p>
            </div>
            <p className="topic-text">Css Variables</p>
            <p className="note-body-text">
              CSS variables are custom properties that cascade normally and even
              inherit. They start with a reserved -- prefix, and there are no
              real rules about their value.
            </p>
            <div className="card-footer">
              <p className="three-min">10 Min Read</p>
              <div className="link">
                <p className="read-more">Read Full</p>
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Card3;

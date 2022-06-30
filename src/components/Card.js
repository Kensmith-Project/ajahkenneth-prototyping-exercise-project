import React from "react";
import im from "../assets/safari.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Card({ imgUrl, time, time_ago, id, author, body, type, topic }) {
  return (
    <>
      <div className="card1" key={id}>
        <div className="card-back">
          <img src={imgUrl} className="safari-img" />
        </div>
        <div className="note-text">
          <div className="item-text">
            <p className="frontend-text">{type}</p>
            <p className="our-text"> {time_ago}</p>
          </div>
          <p className="topic-text">{topic}</p>
          <div
            dangerouslySetInnerHTML={{ __html: body }}
            className="note-body-text"
          ></div>
          <div className="card-footer">
            <p className="three-min">
              by {author} {time} ago
            </p>
            <div className="link">
              <Link to="details">
                <p className="read-more">Read Full</p>
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

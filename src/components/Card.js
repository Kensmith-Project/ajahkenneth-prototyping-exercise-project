import React from "react";

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
/*
    =================
     Reusable component, strictly used to populate the homepage component
    =================
    */

function Card({ imgUrl, time_ago, id, author, body, type, topic, src }) {
  return (
    <>
      <article className="cocktail" key={id}>
        <div className="img-container">
          <a href={src}>
            <img src={imgUrl} alt="safari-img" />
          </a>
        </div>
        <div className="note-text">
          <div className="item-text">
            <p className="frontend-text">{type}</p>
          </div>
          <p className="our-text"><span className="time-inline">Published on:</span> {time_ago}</p>
          <p className="topic-text">
            <a href={src}>{topic}</a>
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: body }}
            className="note-body-text"
          ></div>
          <div className="card-footer">
            <p className="three-min">by {author}</p>
            <div className="link">
              <Link
                to={{ pathname: `details/${id}`, data: body }}
                className="link"
              >
                <p className="read-more">Read Full</p>
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;

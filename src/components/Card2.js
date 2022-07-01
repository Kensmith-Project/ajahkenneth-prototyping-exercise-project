import React from "react";

import { BsArrowRight } from "react-icons/bs";

function Card2({ imgUrl, time_ago, id, author, body, type, topic, src }) {
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
          <p className="our-text">
            <span className="time-inline">Published on:</span> {time_ago}
          </p>
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
              <a href={src}>
                <div className="link">
                  <p className="read-more">Read Full</p>
                  <BsArrowRight />
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card2;

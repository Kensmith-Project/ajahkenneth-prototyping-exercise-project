import React from "react";
import im from "../assets/safari.png";
import { BsArrowRight } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

function Card({ imgUrl, time, time_ago, id, author, body, type, topic }) {
  const { detailsid } = useParams();
  return (
    <>
      <article className="cocktail" key={id}>
        <div className="img-container">
          <img src={imgUrl} alt="safari-img" />
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
              by {author} 
            </p>
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

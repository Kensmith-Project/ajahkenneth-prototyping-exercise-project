import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { BsArrowRight } from "react-icons/bs";
import Card from "../components/Card";

import PayButton from "../components/PayButton";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, fetchPost } from "../features/postSlice";
import parse from "html-react-parser";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";

function HomePage(props) {
  const dispatch = useDispatch();
  const { loading, error, success, posts, post } = useSelector(
    (state) => state.blogPost
  );
  //   const [id, setId] = useState('')

  useEffect(() => {
    if (posts.length < 1) {
      dispatch(fetchPosts());
    }
  }, []);

  //   useEffect(()=>{
  //     // console.log("================")
  //     dispatch(fetchPost(2344293))
  //   },[])

  console.log(loading, error, success, posts, post);
  const firstPost = posts[0];
  const otherPosts = posts.map((post, index) => {
    if (index > 0) {
      return post;
    }
  });

  return (
    <>
      <Navbar />

      <main>
        <section className="section">
          <section>
            <section className="section-1">
              <div className="img-bo">
                <img src={firstPost?.jetpack_featured_media_url} className="" />
              </div>
              <div className="section1-text-part">
                <div className="item-text">
                  <p className="frontend-text">
                    {firstPost?.parsely?.meta["@type"]}{" "}
                  </p>
                  <p className="our-text"> . 1 Hour Ago</p>
                </div>
                <h2 className="optimize-header">
                  {" "}
                  {firstPost?.title?.rendered}
                </h2>
                <div className="text-body">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: firstPost?.content?.rendered.substring(0, 500),
                    }}
                    className="first-string-holder"
                  ></div>
                </div>

                <div className="last-part">
                  <p className="three-min">
                    {" "}
                    by {firstPost?.parsely?.meta?.creator}
                  </p>

                  <div className="link">
                    <Link
                      to={`details/${firstPost?.id}`}
                      state={{ foo: "my name is this" }}
                    >
                      <div className="link">
                        <p className="read-more">Read Full</p>
                        <BsArrowRight />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <div className="cocktails-center">
            {posts.map((post, index) => {
              if (index > 0) {
                return (
                  <Card
                    key={post?.id}
                    id={post?.id}
                    topic={post?.title?.rendered}
                    body={post?.content?.rendered.substring(0, 400)}
                    imgUrl={post.jetpack_featured_media_url}
                    author={post?.parsely?.meta?.creator}
                    type={post?.parsely?.meta["@type"]}
                    time={post?.parsely?.meta?.datePublished}
                  />
                );
              }
            })}
          </div>
        </section>

        <footer>
          <h2 className="footer-header">Join our Team of Writers</h2>
          <p className="footer-body">
            On dasdas, writers earn a living doing what they love. Getting
            started is easy. Just pay a one time $25 fee and everything is ready
            to go.
          </p>
          <div>
            <PayButton />
          </div>
        </footer>
      </main>

      {/* <div className="container">
        <main>
          <section className="section-1">
            <div className="section-1-image-part">
              <img
                src={firstPost?.jetpack_featured_media_url}
                className="large"
              />
            </div>
            <div className="section1-text-part">
              <div className="item-text">
                <p className="frontend-text">Front-end </p>
                <p className="our-text"> . 1 Hour Ago</p>
              </div>
              <h2 className="optimize-header"> {firstPost?.title?.rendered}</h2>
              <div className="text-body">
              
                <div
                  dangerouslySetInnerHTML={{
                    __html: firstPost?.content?.rendered,
                  }}
                  className="first-string-holder"
                ></div>
              </div>

              <div className="last-part">
                <p className="three-min">3 Min Read</p>
                
                <div className="link">
                  <Link
                    to={`details/${firstPost?.id}`}
                    state={{ foo: "my name is this" }}
                  >
                    <div>
                      <p className="read-more">Read Full</p>
                      <BsArrowRight />
                    </div>
                  </Link>
                </div>
                
              </div>
            </div>
          </section>

          <div className="section2">
            {posts.map((post, index) => {
              if (index > 0) {
                return (
                  <Card
                    key={post?.id}
                    id={post?.id}
                    topic={post?.title?.rendered}
                    body={post?.content?.rendered}
                    imgUrl={post.jetpack_featured_media_url}
                    author={post?.parsely?.meta?.creator}
                  />
                );
              }
            })}
          </div>
        </main>
      </div>
      <footer>
        <h2 className="footer-header">Join our Team of Writers</h2>
        <p className="footer-body">
          On dasdas, writers earn a living doing what they love. Getting started
          is easy. Just pay a one time $25 fee and everything is ready to go.
        </p>

        <PayButton />
      </footer> */}
    </>
  );
}

export default HomePage;

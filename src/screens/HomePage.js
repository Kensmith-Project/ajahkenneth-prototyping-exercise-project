import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { BsArrowRight } from "react-icons/bs";
import Card from "../components/Card";

import PayButton from "../components/PayButton";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../features/postSlice";

import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function HomePage(props) {
  const dispatch = useDispatch();
  const { loading, error, success, posts, post } = useSelector(
    (state) => state.blogPost
  );

  useEffect(() => {
    if (posts.length < 1) {
      dispatch(fetchPosts());
    }
  }, [posts.length]);

  console.log(loading, error, success, posts, post);
  const firstPost = posts[0];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex">
          <Navbar />

          <main>
            <section className="section">
              <section>
                <section className="section-1">
                  <div className="img-bo">
                    <img
                      src={firstPost?.jetpack_featured_media_url}
                      className="mine"
                      alt="firstpostimg"
                    />
                  </div>
                  <div className="section1-text-part">
                    <div className="item-text">
                      <p className="frontend-text">
                        {firstPost?.parsely?.meta["@type"]}{" "}
                      </p>
                      <p className="our-text">
                        <span className="time-inline">Published on:</span>{" "}
                        {firstPost?.parsely?.meta["datePublished"]}
                      </p>
                    </div>
                    <h2 className="optimize-header">
                      {" "}
                      {firstPost?.title?.rendered}
                    </h2>
                    <div className="text-body">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: firstPost?.content?.rendered.substring(
                            0,
                            500
                          ),
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
                        time_ago={post?.parsely?.meta["datePublished"]}
                        src={post?.link}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </section>

            <footer>
              <h2 className="footer-header">Join our Team of Writers</h2>
              <p className="footer-body">
                On dasdas, writers earn a living doing what they love. Getting
                started is easy. Just pay a one time $25 fee and everything is
                ready to go.
              </p>
              <div>
                <PayButton />
              </div>
            </footer>
          </main>
        </div>
      )}
    </>
  );
}

export default HomePage;

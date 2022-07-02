import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { fetchPost } from "../features/postSlice";
import Card2 from "../components/Card2";

function Details({}) {
  const dispatch = useDispatch();
  const { detailsid } = useParams();
  const { post, posts, loading } = useSelector((state) => state.blogPost);
  console.log(post?.parsely?.meta?.datePublished);

  useEffect(() => {
    dispatch(fetchPost(detailsid));
  }, []);
  console.log(post);
  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <main>
          <section className="section">
            <p className="our-text">
              <span className="time-inline"></span> {post?.date_gmt}
            </p>
            <p className="my-author"> by {post?.parsely?.meta?.creator}</p>
            <h2 className="detail-title">{post?.title?.rendered}</h2>
            <div className="control-overflow">
              <div
                dangerouslySetInnerHTML={{
                  __html: post?.content?.rendered.substring(0, 7000),
                }}
                className="detail"
              ></div>
            </div>

            <h2 className="more-article">More Articles</h2>

            <div className="cocktails-center">
              {posts.map((post, index) => {
                if (index > 0) {
                  return (
                    <Card2
                      key={post?.id}
                      id={post?.id}
                      topic={post?.title?.rendered}
                      body={post?.content?.rendered.substring(0, 400)}
                      imgUrl={post.jetpack_featured_media_url}
                      author={post?.parsely?.meta?.creator}
                      type={post?.parsely?.meta["@type"]}
                      time_ago={post?.date_gmt}
                      src={post?.link}
                    />
                  );
                }
                return;
              })}
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default Details;

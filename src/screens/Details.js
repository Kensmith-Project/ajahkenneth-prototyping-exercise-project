import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { fetchPost } from "../features/postSlice";
import Card from "../components/Card";

function Details({}) {
  const dispatch = useDispatch();
  const { detailsid } = useParams();
  const { post, posts, loading } = useSelector((state) => state.blogPost);

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
            <p className="my-author"> by {post?.parsely?.meta?.creator}</p>
            <h2 className="detail-title">{post?.title?.rendered}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: post?.content?.rendered,
              }}
              className="detail"
            ></div>

            <h2 className="more-article">More Articles</h2>

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
                      src={post?.link}
                    />
                  );
                }
              })}
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default Details;

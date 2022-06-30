import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { fetchPost, fetchPosts } from "../features/postSlice";
import Card from "../components/Card";

function Details({}) {
  // console.log(state.location);
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
            <p className="three-min"> by {post?.parsely?.meta?.creator}</p>
            <h2>{post?.title?.rendered}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: post?.content?.rendered,
              }}
              className="detail"
            ></div>

            <h2>More Articles</h2>

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
        </main>
      )}
    </>
  );
}

export default Details;

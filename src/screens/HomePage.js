import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import { BsArrowRight } from "react-icons/bs";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import PayButton from "../components/PayButton";
import { useSelector, useDispatch } from "react-redux";
import {fetchPosts, fetchPost} from '../features/postSlice';

function HomePage(props) {
    const dispatch = useDispatch();
  const { loading, error, success, posts, post } = useSelector(
    (state) => state.blogPost
  );
//   const [id, setId] = useState('')

  

  useEffect(()=>{
    dispatch(fetchPosts())
  }, [])

//   useEffect(()=>{
//     // console.log("================")
//     dispatch(fetchPost(2344293))
//   },[])

  console.log(loading, error, success, posts, post)

  return (
    <>
      <Navbar />
      <main>
        <section className="section-1">
          <div className="section-1-image-part">
            <img src={require("../assets/large.png")} className="large" />
          </div>
          <div className="section1-text-part">
            <div className="item-text">
              <p className="frontend-text">Front-end </p>
              <p className="our-text"> . 1 Hour Ago</p>
            </div>
            <h2 className="optimize-header">
              Optimizing CSS for faster page load
            </h2>
            <div className="text-body">
              <p className="section1-side-text">
                Not long ago I decided to improve the loading times of my
                website. It already loads pretty fast, but I knew there was
                still room for improvement and one of them was CSS loading. I
                will walk you through the process and show you how you can
                improve your load times as well.
              </p>
              <p className="section1-side-text2">
                To see how CSS affects the load time of a webpage we first have
                to know how the browser converts an HTML document into a
                functional webpage...
              </p>
            </div>

            <div className="last-part">
              <p className="three-min">3 Min Read</p>
              <div className="link">
                <p className="read-more">Read Full</p>
                <BsArrowRight />
              </div>
            </div>
          </div>
        </section>
        <div className="section2">
          <Card />
          <Card2 />
          <Card3 />
          <Card />
          <Card2 />
          <Card3 />
          {/* <p>thhe</p> */}
        </div>
        <footer>
          <h2 className="footer-header">Join our Team of Writers</h2>
          <p className="footer-body">
            On dasdas, writers earn a living doing what they love. Getting
            started is easy. Just pay a one time $25 fee and everything is ready
            to go.
          </p>

          <PayButton />
        </footer>
      </main>
    </>
  );
}

export default HomePage;

import React from "react";
import { FiTwitter } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import { VscGlobe } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

/*
    =================
     Data used to populate the navbar ui
    =================
    */

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FiTwitter />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <BsDot />,
  },
  {
    id: 3,
    url: "https://www.google.com/search?q=austin+texas&oq=austin+texas&aqs=chrome..69i57j46i67i433j0i67l2j0i67i433j0i512l3j0i457i512j0i512.7536j0j7&sourceid=chrome&ie=UTF-8",
    icon: <VscGlobe />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <BsDot />,
  },

  {
    id: 5,
    url: "https://www.figma.com/file/9XGAZezd4zERCQGtRwbm2Z/Blog-Template-(Community)?node-id=202%3A201",
    icon: <FaFigma />,
  },
  {
    id: 6,
    url: "https://www.twitter.com",
    icon: <BsDot />,
  },
  {
    id: 7,
    url: "https://github.com/Kensmith-Project",
    icon: <FiGithub />,
  },
];

// import React from "react";
// import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "/profile",
    text: "profile",
  },
];

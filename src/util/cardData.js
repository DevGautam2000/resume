import java from "../assets/java.svg";
import javascript from "../assets/javascript.svg";
import kotlin from "../assets/kotlin.svg";
import xd from "../assets/adobe-xd.svg";
import figma from "../assets/figma.svg";
import dart from "../assets/dart.svg";
import flask from "../assets/flask.svg";
import git from "../assets/git.svg";
import golang from "../assets/golang.svg";
import html5 from "../assets/html5.svg";
import css3 from "../assets/css3.svg";
import flutter from "../assets/flutter.svg";
import android from "../assets/android-os.svg";
import mongodb from "../assets/mongodb.svg";
import mysql from "../assets/mysql.svg";
import postman from "../assets/postman.svg";
import python from "../assets/python.svg";
import react from "../assets/react.svg";
import react_native from "../assets/react-native.svg";
import selenium from "../assets/selenium.svg";
import sqlite from "../assets/sqlite.svg";

const cards = [
  {
    id: 1,
    name: "Web Development",
    description:
      "Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses,and social network services.",
    images: [html5, css3, javascript, react, mongodb, mysql, git, golang],
  },
  {
    id: 2,
    name: "Android Development",
    description:
      "Android development is the process by which applications are created for devices running the Android operating system monitered by Google. It is an open source project.",
    images: [android, java, kotlin, sqlite],
  },
  {
    id: 3,
    name: "Cross Platform Development",
    description:
      "Cross Platform development is the new approach of the software development ecosystem. As name says once a code base is written, will work on multiple platforms like ios, android, wear os, web apps. etc.",
    images: [react_native, flutter, dart, javascript],
  },
  {
    id: 4,
    name: "API Endpoint Development",
    description:
      "This a technology by which endpoints can be created to test, run and deploy data on the web stream. Requires good backend skills.",
    images: [python, flask, postman, java],
  },
  {
    id: 5,
    name: "Web Scraping",
    description:
      "One of the most interesting subjects of todays development processes. This is a grey area to work on and is largely based on data fetch and analysis.",
    images: [python, postman, selenium, java],
  },
  {
    id: 6,
    name: "UI/UX",
    description:
      "One of the most demanded skills of web developers. As developers, this is a scope to focus on more, as the better the user interface and user experience is, better is the developers work.",
    images: [xd, figma],
  },
];

export default cards;

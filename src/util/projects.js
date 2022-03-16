import java from "../assets/java.svg";
import javascript from "../assets/javascript.svg";
import kotlin from "../assets/kotlin.svg";
import html from "../assets/html5.svg";
import android from "../assets/android-os.svg";
import python from "../assets/python.svg";
import react from "../assets/react.svg";
import selenium from "../assets/selenium.svg";
import bash from "../assets/bash.png"

const names = [
  "gscript",
  "gpa_calc",
  "results",
  "infoscraper",
  "gpfetcher",
  "ebsite",
  "resume",
  "leetapi",
  "reacting"
];

const githubUser = "https://github.com/DevGautam2000"
const githubRaw = "https://raw.githubusercontent.com/DevGautam2000/DevGautam2000/main/assets"
const projects = [
  {
    id: 1,
    name: "GScript",
    description:
      "A java library built with Gradle and Java 11. This library is made to reduce the verbose code style of java programs ",
    tech_stacks: [java],
    source_code: `${githubUser}/GScript`,
    preview:"",
    img_src: `${githubRaw}/${names[0]}.png`
  },
  {
    id: 2,
    name: "GPA Calc",
    description:
      "An Android application made with Java to calculate the gpa if following the 10 point grading formula. ",
    tech_stacks: [android, java],
    source_code: `${githubUser}/GPAcalc`,
    preview:"",
    img_src:`${githubRaw}/${names[1]}.png`
  },
  {
    id: 3,
    name: "Results",
    description:
      "The Results application for the students of Sikkim Manipal Institute of Technology.",
    tech_stacks: [react, javascript,android,kotlin],
    source_code: `${githubUser}/results-web`,
    preview:"https://results.inginer.me/",
    img_src:`${githubRaw}/${names[2]}.png`
  },
  {
    id: 4,
    name: "Info Scraper",
    description:
      "An automated web scraper made with BeautifulSoup and Selenium that scrapes public information and handle data collected.",
    tech_stacks: [python, selenium],
    source_code: `${githubUser}/infoScraper`,
    preview:"",
    img_src:`${githubRaw}/${names[3]}.png`
  },
  {
    id: 5,
    name: "GP Fetcher",
    description:
      "A python library that fetches a users public repositories as a JSON file to be used in portfolio websites.",
    tech_stacks: [python],
    source_code: `${githubUser}/gp-fetcher`,
    preview:"https://pypi.org/project/gpfetcher/",
    img_src:`${githubRaw}/${names[4]}.png`
  },
  {
    id: 6,
    name: "Ebsite",
    description:
      "An e-commerce website made with React and firebase. This was a team project with ",
    tech_stacks: [javascript, react],
    source_code: `${githubUser}/ebsite`,
    preview:"http://ebsite.vercel.app/",
    img_src:`${githubRaw}/${names[5]}.png`
  },
  {
    id: 7,
    name: "Resume",
    description: "Just a portfolio site for myself.",
    tech_stacks: [javascript, react],
    source_code: `${githubUser}/resume`,
    preview:"https://inginer.me/",
    img_src:`${githubRaw}/${names[6]}.png`
  },
  {
    id: 8,
    name: "LeetApi",
    description: "An API for users who want to integrate their leetcode profile on their portfolios.",
    tech_stacks: [javascript,html],
    source_code: `${githubUser}/leetcode-api`,
    preview:"https://leetapi.inginer.me/",
    img_src:`${githubRaw}/${names[7]}.png`
  },
  {
    id: 9,
    name: "ReactIng",
    description: "A cli tool for React developers to save their time generating folder structures and files.",
    tech_stacks: [bash],
    source_code: `${githubUser}/React_Ing`,
    preview:"",
    img_src:`${githubRaw}/${names[8]}.png`
  },
];

export default projects;

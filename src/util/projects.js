import java from "../assets/java.svg";
import javascript from "../assets/javascript.svg";
import kotlin from "../assets/kotlin.svg";
import android from "../assets/android-os.svg";
import python from "../assets/python.svg";
import react from "../assets/react.svg";
import selenium from "../assets/selenium.svg";

const projects = [
  {
    id: 1,
    name: "GScript",
    description:
      "A java library built with Gradle and Java 11. This library is made to reduce the verbose code style of java programs ",
    tech_stacks: [java],
    source_code: "https://github.com/DevGautam2000/GScript",
  },
  {
    id: 2,
    name: "GPA Calc",
    description:
      "An Android application made with Java to calculate the gpa of exam performance if following the 10 point grading formula. ",
    tech_stacks: [android, java],
    source_code: "https://github.com/DevGautam2000/GPAcalc",
  },
  {
    id: 3,
    name: "Results",
    description:
      "An Android application made with Kotlin for the students of Sikkim Manipal University to get the results and gpa in a formatted view.",
    tech_stacks: [android, kotlin],
    source_code: "https://github.com/DevGautam2000/Results",
  },
  {
    id: 4,
    name: "Results Web",
    description:
      "The Web application for the Results application made with React.js",
    tech_stacks: [react, javascript],
    source_code: "https://github.com/DevGautam2000/results-web",
  },
  {
    id: 5,
    name: "Info Scraper",
    description:
      "An automated web scraper made with BeautifulSoup and Selenium that scrapes a particular web site to collect public information and handle data collected.The scraper also handles and flushes errors.",
    tech_stacks: [python, selenium],
    source_code: "https://github.com/DevGautam2000/infoScraper",
  },
  {
    id: 6,
    name: "GP Fetcher",
    description:
      "A python library that fetches a users public repositories as a JSON file to be used in portfolio websites.",
    tech_stacks: [python],
    source_code: "https://github.com/DevGautam2000/gp-fetcher",
  },
  {
    id: 7,
    name: "Ebsite",
    description:
      "An e-commerce website made with React and firebase. This was a team project with ",
    tech_stacks: [javascript],
    source_code: "https://github.com/DevGautam2000/ebsite",
  },
  {
    id: 8,
    name: "Resume",
    description: "Just a portfolio site for myself.",
    tech_stacks: [javascript],
    source_code: "https://github.com/DevGautam2000/resume",
  },
];

export default projects;

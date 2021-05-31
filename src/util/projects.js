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
    name: "Results and Results Web",
    description:
      "An Android/Web application made with Kotlin/React.js for the students of Sikkim Manipal University to get the results and gpa in a formatted view.",
    tech_stacks: [android, kotlin, react, javascript],
    source_code: "https://github.com/DevGautam2000/Results",
  },
  {
    id: 4,
    name: "Info Scraper",
    description:
      "A web scraper made with BeautifulSoup and Selenium that scrapes a particular web site to collect public information and handle data collected.The scraper also handles and flushes errors.",
    tech_stacks: [python, selenium],
    source_code: "https://github.com/DevGautam2000/gradeScraper",
  },
];

export default projects;

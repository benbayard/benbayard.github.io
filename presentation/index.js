// Import React
import React from "react";
import { render } from "react-dom";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import Video from "./modules/video";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  react: require("../assets/react.png")
};

const videos = {
  brian: require("../assets/brian.mp4"),
  liam: require("../assets/liam.mp4")
};


preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Ben Bayard
            </Heading>
            <Heading size={1} fit caps>
              Intent To Pursue: Solution Architect
            </Heading>
            <Text textColor="white">Technology Enablement</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes={`<ul>
            <li>Before we go in to specifics about the job</li>
            <li>I am first doing to cover what I have done thus far in my career.</li>
          </ul>`}>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/myself.example")}
              margin="30px auto"
            />
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              A Brief Summary of my Career.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" notes={
            `<ul>
              <li>did not last long</li>
              <li>was developing websites there after a few months</li>
              <li>Bleeding edge of mobile.</li>
              <li>Would have been able to say every mobile phone that existed back then.</li>
            </ul>`
          }>
            <Heading>
              Media Cannon
            </Heading>
            <List>
              <ListItem>Hired to do QA</ListItem>
              <ListItem>Soon thereafter was developing websites</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" notes={
            `<ul>
              <li>Moved to SF</li>
              <li>Here I did a lot of data analysis</li>
              <li>Built mobile web sites</li>
              <li>HTML5 Banner Ads</li>
              <li>Rails, oracle SQL. Took existing reporting and automated it.</li>
            </ul>`
          } bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Heading>
              Velti
            </Heading>
            <List textColor="white">
              <ListItem>Aquihired as a Mobile Web Developer.</ListItem>
              <ListItem>Led US Operations</ListItem>
              <ListItem>Built automated reporting system</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} notes={
            `<ul>
              <li>Developed Websites with more than 5,000,000 visits</li>
              <li>Trained all new hires</li>
              <li>Developed code training to train clients</li>
              <li>Led platform development engineering.</li>
            </ul>`
          } bgImage="),-webkit-linear-gradient(orange 0%, orange 33%, green 33.01%, green 66%, blue 66%">
            <div >
              <Heading textColor="white" style={{
                "-webkit-text-stroke-width": "1px",
                "-webkit-text-stroke-color": "black"
              }}>
                Moovweb
              </Heading>
              <List textColor="white" bold style={{
                "-webkit-text-stroke-width": "1px",
                "-webkit-text-stroke-color": "black"
              }}>
                <ListItem>First Senior Level Position</ListItem>
                <ListItem>Built Websites to scale</ListItem>
              </List>
            </div>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="tertiary">
            <Heading caps fit textColor="primary">
              Finally Ending up at Slalom.
            </Heading>
            <Text caps fit textColor="white">
              A new title for a new job.
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" bgImage={images.react}
            notes={`
              <ul>
                <li>Never had released a production iPhone app</li>
                <li>Released on time!</li>
                <li>Was able to completely revamp the existing app</li>
              </ul>
            `}
          >
            <Heading style={{
              "-webkit-text-stroke-width": "2px",
              "-webkit-text-stroke-color": "black"
            }}>
              Tech I've used here.
            </Heading>
            <Layout>
              <Fill>
                <List textAlign="center" caps bold textColor="white" style={{
                  "-webkit-text-stroke-width": "2px",
                  "-webkit-text-stroke-color": "black",
                  "list-style": "none",
                  "font-size": "3rem"
                }}>
                  <ListItem>React</ListItem>
                  <ListItem>Angular</ListItem>
                  <ListItem>Backbone</ListItem>
                  <ListItem>MongoDB</ListItem>
                  <ListItem>Gulp</ListItem>
                  <ListItem>Grunt</ListItem>
                  <ListItem>Salesforce SDK</ListItem>
                </List>
              </Fill>
              <Fill>
                <List textAlign="center" caps bold textColor="white" style={{
                  "-webkit-text-stroke-width": "2px",
                  "-webkit-text-stroke-color": "black",
                  "list-style": "none",
                  "font-size": "3rem"
                }}>
                  <ListItem>Swift</ListItem>
                  <ListItem>Objective C</ListItem>
                  <ListItem>Javascript / ES6</ListItem>
                  <ListItem>Java</ListItem>
                  <ListItem>Sass</ListItem>
                  <ListItem>Stylus</ListItem>
                  <ListItem>HTML5, CSS3</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              If there was ever a subject matter expert, it would be me.
            </Heading>
            <Appear>
              <Fill>
                <Text bold caps style={{
                  "background": "-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) )",
                  "color":"transparent",
                  "-webkit-background-clip": "text",
                  "background-clip": "text",
                  "font-size": "3.03rem",
                  "display": "inline-block",
                  "-webkit-text-stroke-width": "1px",
                  "-webkit-text-stroke-color": "rgba(0,0,0,.25)"
                }}>
                   but you don't have to take my word for it.
                </Text>
              </Fill>
            </Appear>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="secondary" notes={
            `<div style="max-width: 100%">I worked with Brian over the course of a few months mentoring him
            and his team. Together we worked on the cure for cancer and
            built an amazing AngularJS website and delivered more than asked
            for ahead of schedule.</div>`
          }>
            <Video videoSrc={videos.brian} />
            <Heading caps fit size={1} textColor="primary">
              Brian From Genentech
            </Heading>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="tertiary" notes={
            `<div style="max-width: 100%">I worked with Brian over the course of a few months mentoring him
            and his team. Together we worked on the cure for cancer and
            built an amazing AngularJS website and delivered more than asked
            for ahead of schedule.</div>`
          }>
            <Video videoSrc={videos.liam} />
            <Heading caps fit size={1} textColor="primary">
              Liam From Mule Design
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              In summary
            </Heading>
            <List textAlign="left" caps bold textColor="secondary">
              <Appear><ListItem>I know how to appeal to engineers.</ListItem></Appear>
              <Appear><ListItem>People I have worked with are impressed with what I do.</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              The Final Chapter
            </Heading>
            <Text style={{
              "font-size": "4rem"
            }}>
              What I will do as a solution architect.
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes={
          `I will show that a leads to b and b leads to a.`}>
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              My two areas of primary focus for Slalom
            </Heading>
            <List textAlign="left" caps bold textColor="tertiary">
              <Appear><ListItem>Talent Acquisition and Retention</ListItem></Appear>
              <Appear><ListItem>Increase Sales Opportunity through Software Legitimacy</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              How To Aquire Talent In The Most Competitive Market
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="tertiary">
            <Text size={1} lineHeight={1.5} textColor="secondary">
              First, I wrote a blog article for Slalom
              about this exact topic.
            </Text>
            <Link
              href="https://www.slalom.com/thinking/the-case-for-client-services-engineers"
              textColor="primary"
            >
              Why I Love Working In Client Services
            </Link>
          </Slide>
          <Slide transition={["slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="secondary">
              It's about awareness.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" notes={`
            <ul>
              <li>Getting on the front page of Hacker News</li>
              <li>Gives engineers on the bench something to do</li>
              <li>Helps our developers learn about new tech.</li>
            </ul>
          `}>
            <Heading size={1} caps fit lineHeight={1.5} textColor="tertiary">
              Open Source Work.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" notes={`
            <ul>
              <li>Getting on the front page of Hacker News</li>
              <li>Gives engineers on the bench something to do</li>
              <li>Helps our developers learn about new tech.</li>
            </ul>
          `}>
            <Heading size={1} caps fit lineHeight={1.5} textColor="tertiary">
              Speak and Attend developer conferences.
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}

import React from "react";
import { List, Segment, Grid, Container, Responsive } from "semantic-ui-react";
import "../CallToAction/calltoaction.css";

function CallToAction () {
  return (
    <div>
      <Grid centered>

        <Responsive as={Container} className="intro">
          <Responsive as = {Segment} centered raised compact inverted className="intro2" style={{ marginBottom: "0", background: "#129292", width: "85%", margin: "0 auto", marginTop: "1.5rem", color:"#F69C3C" }}>
            <h2 className="introHead">Why Tent Buddy?</h2>
          </Responsive>
          <Responsive as = {Segment} centered raised compact inverted className="intro3" style={{ marginTop: "0", width: "85%", margin: "0 auto", background:"#1b1c1d"}}>
            <h4>Have you ever wanted a convenient place to look at important information needed for a smooth outdoors expedition? 
              <br></br>
              <br></br>
            Tent Buddy is a widget application that provides a streamlined interface for users to be well informed before they head out on their next adventure.
            </h4>
          </Responsive>
        </Responsive>

        <Responsive as={Container} className="features">
          <Responsive as = {Segment} centered raised compact inverted className="intro2" style={{ marginBottom: "0", background: "#129292", width:"100%" , margin: "0 auto", color:"#F69C3C" }}>
            <h2>Key Features</h2>
          </Responsive>
          <Responsive as = {Segment} centered raised compact inverted className="intro3" style={{ marginTop: "0" , background:"#1b1c1d", width:"100%", margin: "0 auto" }}>
            <List bulleted style={{color: "white", fontSize: "1.25rem"}}>
              <List.Item>One Day and Five Day weather forecast</List.Item>
              <List.Item>Note taking functionality</List.Item>
              <List.Item>Park Operation hours</List.Item>
              <List.Item>Park Address</List.Item>
              <List.Item>Park Description</List.Item>
              <List.Item>Park Contact Information</List.Item>
              <List.Item>And more to come</List.Item>
            </List>
          </Responsive>
        </Responsive>


        <Responsive as={Container} className="mission">
          <Responsive as = {Segment} centered raised compact inverted className="intro2" style={{ marginBottom: "0", background: "#129292", width: "85%", margin: "0 auto", color:"#F69C3C" }}>
            <h2>Our Mission</h2>
          </Responsive>
          <Responsive as = {Segment} centered raised compact inverted className="intro3" style={{ marginTop: "0", width: "85%", margin: "0 auto", background:"#1b1c1d" }}>
            <h4>Tent Buddy was developed to provide individuals with the ability to keep track of a variety of widgets when embarking on an adventure in the great outdoors. </h4>

          </Responsive>
        </Responsive>


      </Grid>  
    </div>
  );
}

export default CallToAction;
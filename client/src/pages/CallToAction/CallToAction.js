import React from "react";
import { List, Segment, Grid, Container} from "semantic-ui-react";
import "../CallToAction/CallToAction.css";

function CallToAction () {
  return (
    <div>
      <Grid centered>

        < Container className="intro">
          <Segment centered raised compact inverted className="intro2" style={{ marginBottom: "0", background: "rgba(33, 187, 128, 0.78)", width: "85%", margin: "0 auto", marginTop: "1.5rem", color:"#F69C3C" }}>
            <h2 style={{fontFamily:"Bungee", color:"white"}} className="introHead">Why Tent Buddy?</h2>
          </Segment>
          <Segment centered raised compact inverted className="intro3" style={{ marginTop: "0", width: "85%", margin: "0 auto", background:"#1b1c1d"}}>
            <h4 style={{fontFamily:"Roboto"}} >Have you ever wanted a convenient place to look at important information needed for a smooth outdoors expedition? 
              <br></br>
              <br></br>
            Tent Buddy is a widget application that provides a streamlined interface for users to be well informed before they head out on their next adventure.
            </h4>
          </Segment>
        </Container>

        <Container className="features">
          <Segment centered raised compact inverted className="intro2" style={{ marginBottom: "0", background: "rgba(33, 187, 128, 0.78)", width:"100%" , margin: "0 auto", color:"#F69C3C" }}>
            <h2 style={{fontFamily:"Bungee", color:"white"}} >Key Features</h2>
          </Segment>
          <Segment centered raised compact inverted className="intro3" style={{ marginTop: "0" , background:"#1b1c1d", width:"100%", margin: "0 auto" }}>
            <List bulleted style={{color: "white", fontSize: "1.25rem"}}>
              <List.Item>One Day and Five Day weather forecast</List.Item>
              <List.Item>Note taking functionality</List.Item>
              <List.Item>Park Operation hours</List.Item>
              <List.Item>Park Address</List.Item>
              <List.Item>Park Description</List.Item>
              <List.Item>Park Contact Information</List.Item>
              <List.Item>And more to come</List.Item>
            </List>
          </Segment>
        </Container>


        <Container className="mission">
          <Segment centered raised compact inverted className="intro2" style={{ marginBottom: "0", background: "rgba(33, 187, 128, 0.78)", width: "85%", margin: "0 auto", color:"#F69C3C" }}>
            <h2 style={{fontFamily:"Bungee", color:"white"}} >Our Mission</h2>
          </Segment>
          <Segment centered raised compact inverted className="intro3" style={{ marginTop: "0", width: "85%", margin: "0 auto", background:"#1b1c1d" }}>
            <h4 style={{fontFamily:"Roboto"}} >Tent Buddy was developed to provide individuals with the ability to keep track of a variety of widgets when embarking on an adventure in the great outdoors. </h4>

          </Segment>
        </Container>


      </Grid>  
    </div>
  );
}

export default CallToAction;

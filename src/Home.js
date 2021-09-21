import { Col, Row } from "antd";
import React from "react";
import DefaultLayout from "./DefaultLayout";

function Home() {
  return (
    <DefaultLayout>
      <div className="home">
      <Row justify="center">
        <Col lg={12} style={{textAlign: 'center'}}>
          <img
            src="https://ksreddy.netlify.app/ksrimg4.svg"
            alt=""
            height="500"
            width="400"
          />
        </Col>
      </Row>
      <h3><b style={{color:'tomato'}}>Hi , I am K S R</b></h3>
      <p style={{fontsize:20}}>
        I am a FullStack Web Developer / Freelancer . I use React , Redux as
        Front-End and Node + Express as Backend and Mongo DB as Database for Web
        Applications. Java , XML , Firebase for Mobile Applications. Currently I
        am looking for an opportunity to work as a Front End / React Developer
        or MERN Stack Developer. 
      
        
        
      </p>
      </div>
    </DefaultLayout>
  );
}

export default Home;

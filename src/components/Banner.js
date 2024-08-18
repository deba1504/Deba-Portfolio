import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/swe.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            
              <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Debasmita Adak`}</h1>
                  <p>With a solid foundation in programming languages such as Python, C++, and Java, expertise extends to database management with MySQL and significant experience in front-end development using HTML, CSS, JavaScript, and React JS. Knowledge of machine learning includes the basics of Natural Language Processing (NLP), Computer Vision (CV), and Generative AI. Additionally, there is a comprehensive understanding of data structures and algorithms, object-oriented programming, and software design principles.</p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
              </div>
          </Col>
          <Col>
                <div>
                  <img src={headerImg} alt="Header Img" className="w-128 h-128" />
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
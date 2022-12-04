import React from "react";
import Card from "react-bootstrap/Card";

import Carousel from "react-bootstrap/Carousel";
import img1 from "./images/img.jpg";
import img2 from "./images/image2.png";
import img3 from "./images/image3.png";
import img4 from "./images/image4.png";
import img5 from "./images/image5.png";

export default function Project() {
  return (
    <div id="Project">
      <div className="Project ">
        <h2>Project</h2>
        <div className="previous_project mt-5">
          <Card className="text-dark border-0 Project_card">
            <Carousel variant="dark">
              <Carousel.Item>
                <img className="d-block w-100 " src={img2} alt="First slide" />
                <Carousel.Caption>
                  <h4>Home Page</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img1} alt="Second slide" />

                <Carousel.Caption>
                  <h4>Home Page</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img3} alt="Third slide" />

                <Carousel.Caption>
                  <h4>Menu</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img4} alt="Third slide" />

                <Carousel.Caption>
                  <h4>About Us</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img5} alt="Third slide" />

                <Carousel.Caption>
                  <h4>Menu</h4>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <Card.Body className="mt-5">
              <Card.Title>Restaurant Webapp</Card.Title>
              <Card.Text>
                It is a web app developed using MERN. The Webapp shows info
                about a Restaurant Called Remo. A viewer can reserve tables for
                parties. To improve our services Customers can give feedback.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

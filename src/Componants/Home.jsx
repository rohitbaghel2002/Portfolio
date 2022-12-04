import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";
export default function Home() {
  return (
    <div id="Home">
      <div>
        <Card className="mt-5 text-dark border-0">
          <div className="First_Image Landing_image border-0"></div>
          <Card.ImgOverlay className="Image_overlay_text border-0">
            <Card.Title>
              <h1>
                {" "}
                Hello, From <br /> Rohit
              </h1>
            </Card.Title>
            <Card.Text>
              <h4>
                A Web Developer. Creating <br />
                Awesome Designs.
              </h4>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div id="about">
        <h2>About</h2>
        <Card className="bg-light text-dark  mt-5 border-0">
          <div className="About_image"></div>
          <Card.ImgOverlay className="About">
            <Card.Title>
              <h4>Education</h4>
            </Card.Title>
            <Card.Text>
              <p>
                Currently, I am pursuing B.Tech(IT) at Jaipur Engineering
                College and Research Center. I will be graduating in 2024. I am
                from Jaipur and I had completed High school in Jaipur.
                <br /> <br /> I had interest in Web Development. So I completed
                MERN stack course. With MERN it is Easy to develop a web app.
                <br />
                <br /> After Web Development, I had an interest in C++
                programming. i had taken a course on C++ and the process of
                learning C++ was Amazing.
              </p>
              <br /> <br />
              <Card.Title>
                <h4>Skills</h4>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Technology</th>
                      {Array.from({ length: 1 }).map((_, index) => (
                        <th>Percentage</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ReactJs</td>
                      {Array.from({ length: 1 }).map((_, index) => (
                        <td>
                          <ProgressBar now={80} />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>MongoDB</td>
                      {Array.from({ length: 1 }).map((_, index) => (
                        <td>
                          <ProgressBar now={60} />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>UI/UX</td>
                      {Array.from({ length: 1 }).map((_, index) => (
                        <td>
                          <ProgressBar now={85} />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>C++</td>
                      {Array.from({ length: 1 }).map((_, index) => (
                        <td>
                          <ProgressBar now={80} />
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </Table>
              </Card.Title>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
}

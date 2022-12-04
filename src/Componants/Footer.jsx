import React from "react";

export default function Footer() {
  return (
    <div id="Contact" className="bg-light">
      <center>
        <h1>Contact</h1>
      </center>
      <div>
        <div className="Footer text-light bg-light  pt-5 pb-5">
          <div className="social text-dark">
            <div className="mail">
              <a
                href="mailto:rohitbaghel627@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  className="mail_link"
                  src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png"
                  alt=""
                />
                &ensp;&ensp;rohitbaghel627@gmail.com
              </a>
            </div>
            <div>
              <div className="Linkedin">
                <a
                  href="https://www.linkedin.com/in/rohit-baghel-052904211/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    className="Linkedin_svj"
                    src="https://www.shareicon.net/download/2016/08/01/640419_media.svg"
                    alt=""
                  />
                  &ensp;&ensp;Rohit Baghel
                </a>
              </div>
            </div>
            <div className="Instagram">
              <a
                href="https://www.instagram.com/rohitbaghel627/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  className="Instagram__svj"
                  src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png"
                  alt=""
                />
                &ensp;&ensp;rohitbaghel627
              </a>
            </div>
          </div>
          <div className="social text-dark">
            <div className="git_hub">
              {" "}
              <a
                href="https://github.com/rohitbaghel2002"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  className="Git_hub_svj"
                  src="https://www.svgrepo.com/show/332084/github.svg"
                  alt=""
                />
                &ensp;&ensp;rohitbaghel2002
              </a>
            </div>
            <div className="hacker_earth">
              <a
                href="https://www.hackerearth.com/@rohitbaghel2002"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  className="hacker_earth_svj"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/HackerEarth_logo.png/800px-HackerEarth_logo.png"
                  alt=""
                />
                &ensp;&ensp;rohitbaghel2002
              </a>
            </div>
            <div className="code_chef">
              <a
                href="https://www.codechef.com/users/rohitbaghel"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  className="code_chef_svj"
                  src="https://img.icons8.com/ios/500/codechef.png"
                  alt=""
                />
                &ensp;&ensp;Rohit Baghel
              </a>
            </div>
          </div>
        </div>
        <center>
          <h6 className="bg-light">Ⓒ2022 Rohit Baghel</h6>
          <br />
        </center>
      </div>
    </div>
  );
}

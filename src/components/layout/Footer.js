import React from "react";

const Footer = () => {
  return (
    <footer className="bck_b_dark py-3 px-3">
      <div className="">
        <div className="row">
          <div className="col">
            <div className="logo mb-4">Waves</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <h2>Contact information</h2>
            <div className="business_nfo">
              <div className="tag">
                <i className="fa fa-compass" />
                <div className="nfo">
                  <div>Address</div>
                  <div>Main St, 123</div>
                </div>
              </div>

              <div className="tag">
                <i className="fa fa-phone" />
                <div className="nfo">
                  <div>Phone</div>
                  <div>415 111 2222</div>
                </div>
              </div>

              <div className="tag">
                <i className="fa fa-clock" />
                <div className="nfo">
                  <div>Working hours</div>
                  <div>Mon-Sun /9am-8pm</div>
                </div>
              </div>

              <div className="tag">
                <i className="fa fa-envelope" />
                <div className="nfo">
                  <div>Email</div>
                  <div>info@waves.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-md-6 ">
            <h2>Be the first to know</h2>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              dolore nostrum molestiae quam, voluptas quae deserunt, temporibus
              quo cupiditate fugit labore consequatur repellat praesentium porro
              animi excepturi repellendus ea quidem.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

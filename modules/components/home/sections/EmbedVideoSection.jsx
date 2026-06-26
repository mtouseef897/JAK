import React from "react";

const EmbedVideoSection = () => {
  return (
    <section className="p-0 mb-3">
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <div className="col-12">
            <div
              className="border-radius-6px h-450px md-h-350px sm-h-400px d-flex flex-wrap align-items-center justify-content-center overflow-hidden cover-background box-shadow-quadruple-large pt-15"
              style={{
                backgroundImage: 'url("/images/demo-corporate-video-img.jpg")',
              }}
            >
              <div className="opacity-full-dark bg-gradient-regal-blue-transparent" />
              <div className="row justify-content-center m-0">
                <div className="col-lg-7 col-md-8 z-index-1 text-center text-md-start sm-mb-20px">
                  <h3 className="text-white mb-0 fw-400 fancy-text-style-4">
                    Learn From Our Experts — Free on YouTube
                    {/* <span
                      className="fw-600"
                      data-fancy-text='{ "effect": "rotate", "string": ["business!", "problems!", "brands!"] }'
                    /> */}
                  </h3>
                  <p className=" text-white">
                    Jamal Ahmad Khan regularly shares expert insights on
                    accounting, taxation, and financial planning across
                    Pakistan, US, UK & UAE. Subscribe to stay informed.
                  </p>
                </div>
                <div className="col-md-2 position-relative z-index-1 text-center sm-mb-20px">
                  <a
                    href="https://www.youtube.com/watch?v=WGzIMrZyZ7E"
                    className="position-relative d-inline-block text-center border border-2 border-color-white rounded-circle video-icon-box video-icon-large popup-youtube"
                  >
                    <span>
                      <span className="video-icon">
                        <i className="fa-solid fa-play fs-20 text-white" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="w-100 text-center position-relative mt-auto pt-20px pb-25px ps-15px pe-15px border-top border-color-transparent-white-light">
                <div className="fs-14 text-uppercase text-white fw-600 ls-05px">
                  <a
                    href="https://www.youtube.com/@Mr.JAK_CA"
                    className="text-decoration-line-bottom text-white"
                  >
                    Visit Our YouTube Channel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmbedVideoSection;

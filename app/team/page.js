"use client";

export default function TeamPage() {
  const founder = {
    name: "Jamal Ahmad Khan",
    designation: "Founder & Principal Advisor",
    credentials: "CA | B.Com | Certified Intuit Bookkeeper",
    experience: "10+ Years",
    expertise: "Pakistan, US, UK & UAE Taxation | Audit | Financial Advisory",
    photo: "/images/jak-profile.jpeg",
    socials: [
      {
        icon: "bi-linkedin",
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/jamal-ahmad-khan-3b3b30289",
      },
      {
        icon: "bi-youtube",
        label: "YouTube",
        url: "https://youtube.com/@mr.jakca_1",
      },
      {
        icon: "bi-facebook",
        label: "Facebook",
        url: "https://www.facebook.com/share/18WzykTc7V/",
      },
      {
        icon: "bi-whatsapp",
        label: "WhatsApp",
        url: "https://wa.me/923095004300",
      },
      {
        icon: "bi-envelope",
        label: "Email",
        url: "mailto:jamalkhanca@gmail.com",
      },
    ],
  };

  return (
    <>
      {/* start page title */}
      <section
        className="top-space-margin page-title-big-typography cover-background magic-cursor round-cursor"
        style={{
          backgroundImage:
            "url(https://craftohtml.themezaa.com/images/demo-accounting-contact-title-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row extra-very-small-screen align-items-center">
            <div
              className="col-lg-5 col-sm-8 position-relative page-title-extra-small"
              data-anime='{ "el": "childs", "opacity": [0, 1], "translateX": [-30, 0], "duration": 800, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <h1 className="mb-20px xs-mb-20px text-white text-shadow-medium">
                <span className="w-30px h-2px bg-yellow d-inline-block align-middle position-relative top-minus-2px me-10px" />
                Meet Our Team
              </h1>
              <h2 className="text-white text-shadow-medium fw-500 ls-minus-2px mb-0">
                Qualified Professionals Dedicated to Your Financial Success
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* end page title */}

      {/* start founder section */}
      <section>
        <div className="container">
          <div className="row justify-content-center mb-6">
            <div className="col-lg-8 col-md-10">
              <div
                className="bg-white border-radius-8px box-shadow-large overflow-hidden"
                data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
                style={{
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div className="row align-items-center g-0">
                  {/* Photo */}
                  <div className="col-lg-5">
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      className="w-100 h-100"
                      style={{ objectFit: "cover", minHeight: "400px" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="col-lg-7 p-50px md-p-40px sm-p-30px">
                    <span className="ps-15px pe-15px mb-20px text-uppercase text-base-color fs-13 fw-700 border-radius-100px bg-gradient-very-light-gray d-inline-block">
                      Founder
                    </span>

                    <h3 className="alt-font text-dark-gray fw-700 ls-minus-1px mb-10px">
                      {founder.name}
                    </h3>

                    <h5 className="text-base-color fw-600 mb-25px">
                      {founder.designation}
                    </h5>

                    <div className="mb-30px">
                      <div className="d-flex align-items-center mb-15px">
                        <i className="bi bi-award text-base-color me-10px" />
                        <span className="fw-600 text-dark-gray">
                          {founder.credentials}
                        </span>
                      </div>
                      <div className="d-flex align-items-center mb-15px">
                        <i className="bi bi-clock-history text-base-color me-10px" />
                        <span className="fw-600 text-dark-gray">
                          {founder.experience}
                        </span>
                      </div>
                      <div className="d-flex align-items-start">
                        <i className="bi bi-lightning text-base-color me-10px mt-5px" />
                        <span className="text-dark-gray lh-26">
                          {founder.expertise}
                        </span>
                      </div>
                    </div>

                    {/* Social Icons */}
                    <div className="d-flex gap-15px">
                      {founder.socials.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            backgroundColor: "#f0f0f0",
                            color: "#ff7a00",
                            transition: "all 0.3s ease",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#ff7a00";
                            e.currentTarget.style.color = "#ffffff";
                            e.currentTarget.style.transform =
                              "translateY(-5px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#f0f0f0";
                            e.currentTarget.style.color = "#ff7a00";
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                          title={social.label}
                        >
                          <i className={`bi ${social.icon} fs-18`} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Growing Team Section */}
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 text-center">
              <div
                className="bg-very-light-gray p-50px border-radius-8px"
                data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":200, "easing": "easeOutQuad" }'
              >
                <i
                  className="bi bi-people fs-48 text-base-color d-block mb-20px"
                  style={{ opacity: 0.5 }}
                />
                <h5 className="alt-font text-dark-gray fw-700 mb-15px">
                  Growing Our Team
                </h5>
                <p className="text-dark-gray lh-26 mb-0">
                  JAK Associates is expanding! We're actively looking for
                  talented professionals to join our team. If you're passionate
                  about accounting, taxation, and financial advisory, we'd love
                  to hear from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end founder section */}

      {/* Additional Team Members Placeholder */}
      <section className="bg-very-light-gray">
        <div className="container">
          <div className="row justify-content-center mb-6 text-center">
            <div className="col-lg-8">
              <h3 className="alt-font text-dark-gray fw-700 ls-minus-2px">
                Team Members
              </h3>
              <p className="text-dark-gray lh-26">
                As we grow, more talented professionals will join our team to
                serve you better.
              </p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
            {/* Coming Soon Card 1 */}
            <div className="col mb-40px">
              <div
                className="bg-white p-40px border-radius-8px text-center h-100 d-flex flex-column align-items-center justify-content-center"
                style={{
                  minHeight: "320px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0, 0, 0, 0.05)";
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#f0f0f0",
                    marginBottom: "20px",
                  }}
                >
                  <i className="bi bi-person-fill fs-40 text-base-color" />
                </div>
                <h5 className="alt-font text-dark-gray fw-700 mb-15px">
                  Coming Soon
                </h5>
                <p className="text-dark-gray lh-26 mb-0 fs-14">
                  We're recruiting talented professionals to expand our team.
                </p>
              </div>
            </div>

            {/* Coming Soon Card 2 */}
            <div className="col mb-40px">
              <div
                className="bg-white p-40px border-radius-8px text-center h-100 d-flex flex-column align-items-center justify-content-center"
                style={{
                  minHeight: "320px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0, 0, 0, 0.05)";
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#f0f0f0",
                    marginBottom: "20px",
                  }}
                >
                  <i className="bi bi-person-fill fs-40 text-base-color" />
                </div>
                <h5 className="alt-font text-dark-gray fw-700 mb-15px">
                  Coming Soon
                </h5>
                <p className="text-dark-gray lh-26 mb-0 fs-14">
                  We're recruiting talented professionals to expand our team.
                </p>
              </div>
            </div>

            {/* Coming Soon Card 3 */}
            <div className="col mb-40px">
              <div
                className="bg-white p-40px border-radius-8px text-center h-100 d-flex flex-column align-items-center justify-content-center"
                style={{
                  minHeight: "320px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0, 0, 0, 0.05)";
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#f0f0f0",
                    marginBottom: "20px",
                  }}
                >
                  <i className="bi bi-person-fill fs-40 text-base-color" />
                </div>
                <h5 className="alt-font text-dark-gray fw-700 mb-15px">
                  Coming Soon
                </h5>
                <p className="text-dark-gray lh-26 mb-0 fs-14">
                  We're recruiting talented professionals to expand our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end additional team members section */}

      {/* start join us cta section */}
      <section className="bg-light-gray">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 text-center">
              <h3 className="text-white fw-700 ls-minus-2px mb-25px">
                Interested in Joining JAK Associates?
              </h3>
              <p className="text-white mb-35px fw-500 lh-26">
                If you're a qualified accounting professional passionate about
                delivering exceptional financial services, we'd love to hear
                from you!
              </p>
              <a
                href="mailto:jamalkhanca@gmail.com"
                className="btn btn-medium btn-rounded btn-box-shadow"
                style={{ backgroundColor: "#ffffff", color: "#ff7a00" }}
              >
                Send Your CV
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end join us cta section */}
    </>
  );
}

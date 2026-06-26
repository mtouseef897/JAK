"use client";

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      quote:
        "JAK Associates handled my UK Self Assessment flawlessly. Jamal explained everything clearly — no jargon, just results.",
      name: "Sarah Mitchell",
      role: "Self-Employed",
      country: "UK",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Sarah+Mitchell&background=ff7a00&color=fff&size=80",
    },
    {
      id: 2,
      quote:
        "I was confused about US taxes as a Pakistani freelancer. Jamal resolved it all in one consultation. Highly professional!",
      name: "Ahmed Malik",
      role: "Freelancer",
      country: "USA",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Ahmed+Malik&background=ff7a00&color=fff&size=80",
    },
    {
      id: 3,
      quote:
        "Our FBR filing is always on time and accurate since we partnered with JAK. Highly recommended for Pakistani businesses.",
      name: "Fatima Hussain",
      role: "CEO",
      country: "Pakistan",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Fatima+Hussain&background=ff7a00&color=fff&size=80",
    },
    {
      id: 4,
      quote:
        "The UAE VAT filing support from JAK saved us from a major penalty. Professional, responsive, and worth every dirham.",
      name: "Hassan Al-Mansouri",
      role: "Director",
      country: "UAE",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Hassan+Al-Mansouri&background=ff7a00&color=fff&size=80",
    },
    {
      id: 5,
      quote:
        "Jamal's financial planning advice helped us cut costs by 20% in the first quarter. A game-changer for our SME.",
      name: "Robert Thompson",
      role: "CFO",
      country: "UK",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Robert+Thompson&background=ff7a00&color=fff&size=80",
    },
    {
      id: 6,
      quote:
        "Exceptional bookkeeping service. Our accounts are always clean and ready for audit. Couldn't ask for better support!",
      name: "Aisha Khan",
      role: "Business Owner",
      country: "Pakistan",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Aisha+Khan&background=ff7a00&color=fff&size=80",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <i
        key={i}
        className={`bi ${
          i < rating ? "bi-star-fill" : "bi-star"
        }`}
        style={{
          color: i < rating ? "#ff7a00" : "#e0e0e0",
          marginRight: "4px",
          fontSize: "16px",
        }}
      />
    ));
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
                What Our Clients Say
              </h1>
              <h2 className="text-white text-shadow-medium fw-500 ls-minus-2px mb-0">
                Real stories from clients across Pakistan, US, UK & UAE
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* end page title */}

      {/* start testimonials section */}
      <section>
        <div className="container">
          <div className="row justify-content-center mb-6 text-center">
            <div className="col-lg-8">
              <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">
                Client Success Stories
              </span>
              <h3 className="alt-font text-dark-gray fw-700 ls-minus-2px mb-15px">
                Trusted by Clients Worldwide
              </h3>
              <p className="text-dark-gray lh-26">
                Don't just take our word for it. See what our clients across Pakistan, US, UK, and UAE have to say about working with JAK Associates.
              </p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-30px">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="col"
                data-anime={`{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":${
                  index * 100
                }, "staggervalue": 300, "easing": "easeOutQuad" }`}
              >
                <div
                  className="bg-white border-radius-8px p-40px h-100"
                  style={{
                    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.08)",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    borderTop: "3px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderTopColor = "#001a4d";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(0, 0, 0, 0.12)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderTopColor = "transparent";
                    e.currentTarget.style.boxShadow =
                      "0 5px 20px rgba(0, 0, 0, 0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Stars */}
                  <div className="mb-20px">{renderStars(testimonial.rating)}</div>

                  {/* Quote */}
                  <p
                    className="text-dark-gray lh-26 mb-30px"
                    style={{
                      fontStyle: "italic",
                      fontSize: "15px",
                      minHeight: "80px",
                    }}
                  >
                    "{testimonial.quote}"
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      backgroundColor: "#e0e0e0",
                      marginBottom: "20px",
                    }}
                  />

                  {/* Client Info */}
                  <div className="d-flex align-items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        marginRight: "15px",
                      }}
                    />
                    <div>
                      <h6 className="text-dark-gray fw-700 mb-5px">
                        {testimonial.name}
                      </h6>
                      <p className="text-base-color fw-600 fs-13 mb-0">
                        {testimonial.role}, {testimonial.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end testimonials section */}

      {/* start stats section */}
      <section className="bg-very-light-gray">
        <div className="container">
          <div className="row justify-content-center mb-6 text-center">
            <div className="col-lg-8">
              <h3 className="alt-font text-dark-gray fw-700 ls-minus-2px mb-15px">
                Why Clients Choose JAK Associates
              </h3>
              <p className="text-dark-gray lh-26">
                Our commitment to clarity, accuracy, and client success sets us apart.
              </p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 text-center">
            <div className="col mb-40px">
              <div>
                <h3 className="alt-font text-dark-gray fw-700 mb-10px" style={{ fontSize: "40px" }}>
                  50+
                </h3>
                <p className="text-dark-gray fw-500">Satisfied Clients</p>
              </div>
            </div>
            <div className="col mb-40px">
              <div>
                <h3 className="alt-font text-dark-gray fw-700 mb-10px" style={{ fontSize: "40px" }}>
                  98%
                </h3>
                <p className="text-dark-gray fw-500">Client Retention Rate</p>
              </div>
            </div>
            <div className="col mb-40px">
              <div>
                <h3 className="alt-font text-dark-gray fw-700 mb-10px" style={{ fontSize: "40px" }}>
                  4/5
                </h3>
                <p className="text-dark-gray fw-500">Average Rating</p>
              </div>
            </div>
            <div className="col mb-40px">
              <div>
                <h3 className="alt-font text-dark-gray fw-700 mb-10px" style={{ fontSize: "40px" }}>
                  24/7
                </h3>
                <p className="text-dark-gray fw-500">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end stats section */}

      {/* start become a client cta section */}
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="alt-font text-dark-gray fw-700 ls-minus-2px mb-20px">
                Ready to Join Our Satisfied Clients?
              </h3>
              <p className="text-dark-gray lh-26 mb-40px">
                Experience the clarity and expertise that our clients across the globe trust. Let's work together to achieve your financial goals.
              </p>
              <a
                href="/contact"
                className="btn btn-medium btn-rounded btn-box-shadow"
                style={{ backgroundColor: "#ff7a00", color: "#ffffff" }}
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end become a client cta section */}
    </>
  );
}

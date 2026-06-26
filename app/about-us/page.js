"use client";
import { useState } from "react";

export default function AboutPage() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqItems = [
    {
      question: "What jurisdictions do you cover?",
      answer: "We specialise in Pakistan, US, UK, and UAE accounting and tax frameworks. Whether you are an individual or a corporate entity, we have deep expertise in your specific regulatory environment."
    },
    {
      question: "Are your services fully remote?",
      answer: "Yes. JAK Associates operates 100% remotely. We use secure digital tools to exchange documents, communicate, and deliver all services — no physical office visit is required."
    },
    {
      question: "What qualifications does Jamal Ahmad Khan hold?",
      answer: "Jamal is a Chartered Accountant (CA), holds a B.Com degree, and is a Certified Intuit Bookkeeper with over 10 years of hands-on experience."
    },
    {
      question: "How do I get started?",
      answer: "Simply fill out the contact form, send us an email at jamalkhanca@gmail.com, or message us on WhatsApp at +92-309-5004300. We will respond within 24 hours."
    },
    {
      question: "Can you handle both personal and business accounts?",
      answer: "Absolutely. We serve individuals, salaried persons, freelancers, SMEs, and large corporations with equal expertise and care."
    }
  ];

  return (
    <>
      {/* start page title */}
      <section
        className="top-space-margin page-title-big-typography cover-background magic-cursor round-cursor"
        style={{
          backgroundImage:
            "url(https://craftohtml.themezaa.com/images/demo-accounting-company-title-bg.jpg)",
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
                About JAK Associates
              </h1>
              <h2 className="text-white text-shadow-medium fw-500 ls-minus-2px mb-0">
                The Power of Being Clear
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* end page title */}

      {/* start our story section */}
      <section>
        <div className="container">
          <div className="row align-items-center mb-6 sm-mb-8">
            <div
              className="col-lg-6 col-md-10 md-mb-50px"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <div className="position-relative">
                <img
                  src="/images/jak-profile.jpeg"
                  alt="About JAK Associates"
                  className="w-100 border-radius-6px"
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-10 ps-lg-50px"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">
                Our Story
              </span>
              <h3 className="alt-font text-dark-gray fw-700 ls-minus-2px mb-30px">
                Built on Expertise. Driven by Clarity.
              </h3>
              <p className="mb-25px text-dark-gray lh-26 w-90">
                JAK Associates was founded by Jamal Ahmad Khan — a Chartered Accountant with over 10 years of experience across Pakistan, the United States, the United Kingdom, and the UAE. What began as a passion for financial precision has grown into a trusted advisory practice serving individuals, SMEs, and corporations remotely from Pakistan.
              </p>
              <p className="mb-30px text-dark-gray lh-26 w-90">
                Our philosophy is simple: the power of being clear. We believe every client deserves straightforward, honest, and expert financial guidance — without jargon, without surprises, and without compromise.
              </p>
              <div className="row mb-35px">
                <div className="col-sm-6 col-6 mb-20px">
                  <div className="d-flex align-items-center last-paragraph-no-margin">
                    <i className="bi bi-check-circle fs-20 text-base-color me-10px" />
                    <span className="fw-600 text-dark-gray">Chartered Accountant (CA)</span>
                  </div>
                </div>
                <div className="col-sm-6 col-6 mb-20px">
                  <div className="d-flex align-items-center last-paragraph-no-margin">
                    <i className="bi bi-check-circle fs-20 text-base-color me-10px" />
                    <span className="fw-600 text-dark-gray">B.Com</span>
                  </div>
                </div>
                <div className="col-sm-6 col-6 mb-20px">
                  <div className="d-flex align-items-center last-paragraph-no-margin">
                    <i className="bi bi-check-circle fs-20 text-base-color me-10px" />
                    <span className="fw-600 text-dark-gray">Certified Intuit Bookkeeper</span>
                  </div>
                </div>
              </div>
              <a href="/contact" className="btn btn-medium btn-rounded btn-box-shadow" style={{ backgroundColor: "#ff7a00", color: "#ffffff" }}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end our story section */}

      {/* start mission and vision section */}
      <section className="bg-very-light-gray">
        <div className="container">
          <div className="row justify-content-center mb-6 text-center">
            <div className="col-lg-8">
              <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">
                Our Purpose
              </span>
              <h3 className="alt-font text-dark-gray fw-700 ls-minus-2px">
                Mission & Vision
              </h3>
            </div>
          </div>
          <div
            className="row"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <div className="col-lg-6 col-md-10 mx-auto md-mb-50px">
              <div className="bg-white p-50px border-radius-6px box-shadow-large last-paragraph-no-margin">
                <div className="mb-30px">
                  <i className="bi bi-compass-fill fs-40 text-base-color" />
                </div>
                <h5 className="alt-font text-dark-gray fw-700 mb-20px">Our Mission</h5>
                <p className="text-dark-gray lh-26">
                  To provide reliable, transparent, and expert accounting and financial advisory services that empower clients to make confident decisions — regardless of where they are in the world.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 mx-auto">
              <div className="bg-white p-50px border-radius-6px box-shadow-large last-paragraph-no-margin">
                <div className="mb-30px">
                  <i className="bi bi-eye-fill fs-40 text-base-color" />
                </div>
                <h5 className="alt-font text-dark-gray fw-700 mb-20px">Our Vision</h5>
                <p className="text-dark-gray lh-26">
                  To be the most trusted remote accounting and financial firm for Pakistani, US, UK, and UAE clients — known for integrity, clarity, and measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end mission and vision section */}

      {/* start why choose us section */}
      <section>
        <div className="container">
          <div className="row justify-content-center mb-6 text-center">
            <div className="col-lg-8">
              <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">
                Why Choose Us
              </span>
              <h3 className="alt-font text-dark-gray fw-700 ls-minus-2px">
                What Sets JAK Associates Apart
              </h3>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-xl-4 row-cols-lg-2 row-cols-md-1"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <div className="col mb-40px">
              <div className="bg-white p-40px border-radius-6px box-shadow-medium text-center last-paragraph-no-margin h-100">
                <i className="bi bi-award fs-40 text-base-color mb-20px d-block" />
                <h5 className="alt-font text-dark-gray fw-700 mb-15px">
                  Qualified & Certified
                </h5>
                <p className="text-dark-gray lh-26">
                  CA, B.Com, Certified Intuit Bookkeeper with proven expertise
                </p>
              </div>
            </div>
            <div className="col mb-40px">
              <div className="bg-white p-40px border-radius-6px box-shadow-medium text-center last-paragraph-no-margin h-100">
                <i className="bi bi-globe fs-40 text-base-color mb-20px d-block" />
                <h5 className="alt-font text-dark-gray fw-700 mb-15px">
                  Multi-Jurisdiction Expert
                </h5>
                <p className="text-dark-gray lh-26">
                  Deep expertise in Pakistan, US, UK & UAE accounting frameworks
                </p>
              </div>
            </div>
            <div className="col mb-40px">
              <div className="bg-white p-40px border-radius-6px box-shadow-medium text-center last-paragraph-no-margin h-100">
                <i className="bi bi-laptop fs-40 text-base-color mb-20px d-block" />
                <h5 className="alt-font text-dark-gray fw-700 mb-15px">
                  100% Remote & Accessible
                </h5>
                <p className="text-dark-gray lh-26">
                  Work with us from anywhere, anytime with secure digital tools
                </p>
              </div>
            </div>
            <div className="col mb-40px">
              <div className="bg-white p-40px border-radius-6px box-shadow-medium text-center last-paragraph-no-margin h-100">
                <i className="bi bi-heart fs-40 text-base-color mb-20px d-block" />
                <h5 className="alt-font text-dark-gray fw-700 mb-15px">
                  Client-First Approach
                </h5>
                <p className="text-dark-gray lh-26">
                  Dedicated attention and personalised solutions for every client
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end why choose us section */}

      {/* start stats section */}
      <section className="bg-dark-gray pt-60px pb-60px" style={{ background: "linear-gradient(90deg, #1a1a1a 0%, #2d2d2d 100%)" }}>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 text-center">
            <div className="col mb-40px mb-lg-0">
              <div
                className="text-white"
                data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <h3 className="alt-font text-white fw-700 mb-15px" style={{ fontSize: "48px" }}>
                  10+
                </h3>
                <p className="fw-500 mb-0">Years of Experience</p>
              </div>
            </div>
            <div className="col mb-40px mb-lg-0">
              <div
                className="text-white"
                data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <h3 className="alt-font text-white fw-700 mb-15px" style={{ fontSize: "48px" }}>
                  50+
                </h3>
                <p className="fw-500 mb-0">Clients Served</p>
              </div>
            </div>
            <div className="col mb-40px mb-lg-0">
              <div
                className="text-white"
                data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <h3 className="alt-font text-white fw-700 mb-15px" style={{ fontSize: "48px" }}>
                  4
                </h3>
                <p className="fw-500 mb-0">Countries: PK | US | UK | UAE</p>
              </div>
            </div>
            <div className="col">
              <div
                className="text-white"
                data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <h3 className="alt-font text-white fw-700 mb-15px" style={{ fontSize: "48px" }}>
                  200+
                </h3>
                <p className="fw-500 mb-0">Tax Returns Filed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end stats section */}

      {/* start faq section */}
      <section>
        <div className="container">
          <div className="row justify-content-center mb-6 text-center">
            <div className="col-lg-8">
              <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">
                FAQ
              </span>
              <h3 className="alt-font text-dark-gray fw-700 ls-minus-2px mb-50px xs-mb-35px">
                Frequently Asked Questions
              </h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion accordion-style-02" id="faqAccordion">
                {faqItems.map((item, index) => (
                  <div key={index} className="accordion-item">
                    <h5 className="accordion-header">
                      <button
                        className={`accordion-button ${openFAQ === index ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                      >
                        {item.question}
                      </button>
                    </h5>
                    <div
                      id={`collapse-${index}`}
                      className={`accordion-collapse collapse ${openFAQ === index ? "show" : ""}`}
                    >
                      <div className="accordion-body">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end faq section */}

      {/* start cta section */}
      <section className=" position-relative bg-light-gray" style={{
        // background:"gray"
      }}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 text-center">
              <h3 className="text-white fw-700 ls-minus-2px mb-25px">
                Ready to Work With Us?
              </h3>
              <p className="text-white mb-35px fw-500 lh-26">
                Let's clear up your financial picture. Get in touch with JAK Associates today and experience transparent, expert guidance tailored to your needs.
              </p>
              <a href="/contact" className="btn btn-medium btn-rounded btn-box-shadow" style={{ backgroundColor: "#ffffff", color: "#ff7a00" }}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end cta section */}
    </>
  );
}

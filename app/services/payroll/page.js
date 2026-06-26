"use client";
import Link from "next/link";

export default function ServicePage() {
  const relatedServices = [
    { href: "/services/tax-filing", label: "Tax Filing & Compliance" },
    { href: "/services/bookkeeping", label: "Bookkeeping & Accounting" },
    {
      href: "/services/financial-planning",
      label: "Financial Planning & Advisory",
    },
    { href: "/services/audit", label: "Audit & Assurance" },
  ];

  const benefits = [
    "Professional expertise with hands-on experience",
    "Customized solutions tailored to your specific needs",
    "Timely delivery and responsive communication",
    "Complete transparency and detailed reporting",
    "Strategic advisory beyond basic compliance",
    "Proactive recommendations for improvement",
  ];

  return (
    <>
      <section
        className="top-space-margin page-title-big-typography cover-background magic-cursor round-cursor"
        style={{
          backgroundImage:
            "url(https://craftohtml.themezaa.com/images/demo-accounting-contact-title-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row extra-very-small-screen align-items-center">
            <div className="col-lg-5 col-sm-8 position-relative page-title-extra-small">
              <h1 className="mb-20px xs-mb-20px text-white text-shadow-medium">
                <span className="w-30px h-2px bg-yellow d-inline-block align-middle position-relative top-minus-2px me-10px" />
                Payroll Management
              </h1>
              <h2 className="text-white text-shadow-medium fw-500 ls-minus-2px mb-0">
                Complete Salary & Compliance Management
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-50px">
            <div className="col-lg-8">
              <div>
                <h3 className="alt-font text-dark-gray fw-700 ls-minus-2px mb-30px">
                  Payroll Management
                </h3>

                <p className="text-dark-gray lh-26 mb-25px">
                  Complete payroll processing with salary calculations, tax
                  deductions, and statutory compliance
                </p>

                <p className="text-dark-gray lh-26 mb-25px">
                  At JAK Associates, we bring expertise, attention to detail,
                  and a client-first approach to every engagement. Our team is
                  committed to delivering solutions that go beyond compliance to
                  drive real business value.
                </p>

                <p className="text-dark-gray lh-26 mb-40px">
                  Whether you're just starting out or looking to optimize
                  existing processes, we work closely with you to understand
                  your unique challenges and deliver tailored solutions.
                </p>

                <h5 className="alt-font text-dark-gray fw-700 mb-30px">
                  Why Choose Our Services?
                </h5>

                <div className="row mb-50px">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="col-md-6 mb-20px">
                      <div className="d-flex align-items-start">
                        <i className="bi bi-check2 text-base-color fw-700 me-15px mt-3px" />
                        <span className="text-dark-gray fw-500">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="btn btn-medium btn-rounded btn-box-shadow"
                  style={{ backgroundColor: "#ff7a00", color: "#ffffff" }}
                >
                  Get a Free Quote
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="bg-very-light-gray p-40px border-radius-8px"
                style={{ position: "sticky", top: "100px" }}
              >
                <h6 className="alt-font text-dark-gray fw-700 mb-30px">
                  Other Services
                </h6>
                <div className="last-paragraph-no-margin">
                  {relatedServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="d-block text-base-color fw-600 mb-15px text-decoration-line-bottom"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
                <hr className="my-30px" />
                <h6 className="alt-font text-dark-gray fw-700 mb-20px">
                  Get in Touch
                </h6>
                <p className="text-dark-gray fs-14 lh-26">
                  Have questions about this service? Let's discuss how we can
                  help your business.
                </p>
                <a
                  href="/contact"
                  className="btn btn-small btn-rounded w-100"
                  style={{ backgroundColor: "#ff7a00", color: "#ffffff" }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="text-white fw-700 ls-minus-2px mb-20px">
                Ready to Get Started?
              </h3>
              <p className="text-white mb-35px fw-500 lh-26">
                Let's discuss how we can support your business goals and
                requirements.
              </p>
              <a
                href="/contact"
                className="btn btn-medium btn-rounded btn-box-shadow"
                style={{ backgroundColor: "#ffffff", color: "#ff7a00" }}
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

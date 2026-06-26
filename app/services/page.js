"use client";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "tax-filing",
      title: "Tax Filing & Compliance",
      description:
        "Accurate and timely tax filing for PK, US, UK & UAE - individuals and businesses.",
      icon: "bi-file-earmark-check",
      href: "/services/tax-filing",
    },
    {
      id: "bookkeeping",
      title: "Bookkeeping & Accounting",
      description:
        "Organised financial records, monthly reconciliation, and management reports.",
      icon: "bi-book",
      href: "/services/bookkeeping",
    },
    {
      id: "financial-planning",
      title: "Financial Planning & Advisory",
      description:
        "Strategic financial planning to grow your wealth and achieve long-term goals.",
      icon: "bi-graph-up",
      href: "/services/financial-planning",
    },
    {
      id: "audit",
      title: "Audit & Assurance",
      description:
        "Independent audit services ensuring accuracy, compliance, and stakeholder trust.",
      icon: "bi-shield-check",
      href: "/services/audit",
    },
    {
      id: "payroll",
      title: "Payroll Management",
      description:
        "Complete payroll processing — salaries, deductions, and statutory filings on time.",
      icon: "bi-people",
      href: "/services/payroll",
    },
    {
      id: "incorporation",
      title: "Business Incorporation",
      description:
        "End-to-end company registration and initial compliance setup for new ventures.",
      icon: "bi-building",
      href: "/services/incorporation",
    },
    {
      id: "investment",
      title: "Investment Advisory",
      description:
        "Expert guidance on investments aligned with your risk profile and financial goals.",
      icon: "bi-hand-thumbs-up",
      href: "/services/investment",
    },
    {
      id: "budgeting",
      title: "Budgeting & Forecasting",
      description:
        "Robust budgets and financial forecasts to drive informed business decisions.",
      icon: "bi-calculator",
      href: "/services/budgeting",
    },
  ];

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
            <div className="col-lg-5 col-sm-8 position-relative page-title-extra-small">
              <h1 className="mb-20px xs-mb-20px text-white text-shadow-medium">
                <span className="w-30px h-2px bg-yellow d-inline-block align-middle position-relative top-minus-2px me-10px" />
                Our Services
              </h1>
              <h2 className="text-white text-shadow-medium fw-500 ls-minus-2px mb-0">
                Comprehensive Accounting & Financial Solutions - Pakistan | US |
                UK | UAE
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* end page title */}

      {/* start stats section */}
      <section>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 text-center mb-6">
            <div className="col mb-40px mb-md-0">
              <h3
                className="alt-font text-dark-gray fw-700 mb-10px"
                style={{ fontSize: "48px" }}
              >
                95%
              </h3>
              <p className="text-dark-gray fw-600 lh-26">
                of our clients renew annually — a testament to quality and trust
              </p>
            </div>
            <div className="col">
              <h3
                className="alt-font text-dark-gray fw-700 mb-10px"
                style={{ fontSize: "48px" }}
              >
                4
              </h3>
              <p className="text-dark-gray fw-600 lh-26">
                Countries served — Pakistan, United States, United Kingdom & UAE
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end stats section */}

      {/* start services grid section */}
      <section>
        <div className="container">
          <div className="row justify-content-center mb-6 text-center">
            <div className="col-lg-8">
              <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">
                Complete Solutions
              </span>
              <h3 className="alt-font text-dark-gray fw-700 ls-minus-2px">
                Services We Offer
              </h3>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {services.map((service) => (
              <div key={service.id} className="col mb-40px">
                <div
                  className="bg-white p-40px border-radius-8px text-center h-100"
                  style={{
                    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(0, 0, 0, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 5px 20px rgba(0, 0, 0, 0.08)";
                  }}
                >
                  <i
                    className={`bi ${service.icon} fs-48 text-base-color d-block mb-20px`}
                  />
                  <h5 className="alt-font text-dark-gray fw-700 mb-15px">
                    {service.title}
                  </h5>
                  <p className="text-dark-gray lh-26 mb-25px">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="fw-600 text-base-color text-decoration-line-bottom"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end services grid section */}

      {/* start cta section */}
      <section className="bg-gradient-flamingo-amethyst-green">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="text-white fw-700 ls-minus-2px mb-20px">
                Ready to Transform Your Financial Management?
              </h3>
              <p className="text-white mb-35px fw-500 lh-26">
                Let's discuss which services are right for your situation.
                Schedule a free consultation with our experts today.
              </p>
              <a
                href="/contact"
                className="btn btn-medium btn-rounded btn-box-shadow"
                style={{ backgroundColor: "#ffffff", color: "#ff7a00" }}
              >
                Get a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end cta section */}
    </>
  );
}

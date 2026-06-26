"use client";
import Link from "next/link";

export default function TaxFilingPage() {
  const relatedServices = [
    { href: "/services/bookkeeping", label: "Bookkeeping & Accounting" },
    { href: "/services/audit", label: "Audit & Assurance" },
    {
      href: "/services/financial-planning",
      label: "Financial Planning & Advisory",
    },
    { href: "/services/budgeting", label: "Budgeting & Forecasting" },
  ];

  const benefits = [
    "Accurate filing across Pakistan, US, UK, and UAE jurisdictions",
    "Timely submissions meeting all regulatory deadlines",
    "Proactive tax planning to minimize tax liability",
    "Complete documentation and audit trail for compliance",
    "Expert representation during tax assessments and disputes",
    "Ongoing advisory to keep you informed of regulatory changes",
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
                Tax Filing & Compliance
              </h1>
              <h2 className="text-white text-shadow-medium fw-500 ls-minus-2px mb-0">
                Expert Tax Guidance Across Multiple Jurisdictions
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* end page title */}

      {/* start service detail section */}
      <section>
        <div className="container">
          <div className="row g-50px">
            {/* Main Content */}
            <div className="col-lg-8">
              <div>
                <h3 className="alt-font text-dark-gray fw-700 ls-minus-2px mb-30px">
                  Tax Filing & Compliance Services
                </h3>

                <p className="text-dark-gray lh-26 mb-25px">
                  Tax compliance is not just about meeting deadlines — it's
                  about strategic planning to minimize your tax liability while
                  staying fully compliant. JAK Associates provides comprehensive
                  tax filing services for individuals and businesses across
                  Pakistan, the United States, the United Kingdom, and the UAE.
                </p>

                <p className="text-dark-gray lh-26 mb-25px">
                  Whether you're a salaried professional, freelancer, business
                  owner, or corporate entity, we handle all aspects of tax
                  filing with precision and expertise. Our team stays current
                  with the latest tax laws and regulations in each jurisdiction,
                  ensuring your filings are accurate and optimized.
                </p>

                <p className="text-dark-gray lh-26 mb-30px">
                  We don't just file your taxes — we work proactively to
                  identify opportunities to reduce your tax burden, ensure
                  you're not missing any deductions or credits, and represent
                  you during any audits or disputes with tax authorities.
                </p>

                <p className="text-dark-gray lh-26 mb-40px">
                  Our transparent approach means you understand exactly what
                  we're filing, why we're filing it, and what the implications
                  are for your financial situation.
                </p>

                {/* Benefits */}
                <h5 className="alt-font text-dark-gray fw-700 mb-30px">
                  Why Choose Our Tax Filing Services?
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

                {/* CTA */}
                <a
                  href="/contact"
                  className="btn btn-medium btn-rounded btn-box-shadow"
                  style={{ backgroundColor: "#ff7a00", color: "#ffffff" }}
                >
                  Get a Free Tax Consultation
                </a>
              </div>
            </div>

            {/* Sidebar */}
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
                  Jurisdictions Covered
                </h6>

                <ul className="list-unstyled">
                  <li className="mb-10px">
                    <i className="bi bi-check2 text-base-color me-8px fw-700" />
                    <span className="text-dark-gray fw-500">
                      Pakistan (FBR)
                    </span>
                  </li>
                  <li className="mb-10px">
                    <i className="bi bi-check2 text-base-color me-8px fw-700" />
                    <span className="text-dark-gray fw-500">
                      United States (IRS)
                    </span>
                  </li>
                  <li className="mb-10px">
                    <i className="bi bi-check2 text-base-color me-8px fw-700" />
                    <span className="text-dark-gray fw-500">
                      United Kingdom (HMRC)
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2 text-base-color me-8px fw-700" />
                    <span className="text-dark-gray fw-500">UAE (FTA)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end service detail section */}

      {/* start cta section */}
      <section className="bg-light-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="text-white fw-700 ls-minus-2px mb-20px">
                Ready to Get Your Taxes Handled Professionally?
              </h3>
              <p className="text-white mb-35px fw-500 lh-26">
                Let's ensure your tax filing is accurate, compliant, and
                optimized. Get in touch for a consultation.
              </p>
              <a
                href="/contact"
                className="btn btn-medium btn-rounded btn-box-shadow"
                style={{ backgroundColor: "#ffffff", color: "#ff7a00" }}
              >
                Schedule Your Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end cta section */}
    </>
  );
}

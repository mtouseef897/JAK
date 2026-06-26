"use client";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      bestFor: "Individuals & Freelancers",
      isPopular: false,
      features: {
        taxFiling: "Basic personal return",
        bookkeeping: false,
        payroll: false,
        auditSupport: false,
        financialAdvisory: false,
        jurisdictions: "1 (choose one)",
        responseTime: "48 hours",
        whatsappSupport: false,
      },
      price: "Contact for Quote",
      cta: "Get Started",
    },
    {
      name: "Professional",
      bestFor: "SMEs & Growing Businesses",
      isPopular: true,
      features: {
        taxFiling: "Full business + personal",
        bookkeeping: "Monthly reconciliation",
        payroll: "Up to 20 employees",
        auditSupport: "Annual audit",
        financialAdvisory: "Quarterly review",
        jurisdictions: "Up to 2",
        responseTime: "24 hours",
        whatsappSupport: true,
      },
      price: "Contact for Quote",
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      bestFor: "Corporates & Large Firms",
      isPopular: false,
      features: {
        taxFiling: "Multi-entity + advisory",
        bookkeeping: "Weekly + management reports",
        payroll: "Unlimited employees",
        auditSupport: "As required",
        financialAdvisory: "Dedicated monthly advisor",
        jurisdictions: "All 4 (PK/US/UK/UAE)",
        responseTime: "Same day priority",
        whatsappSupport: true,
      },
      price: "Contact for Quote",
      cta: "Get Started",
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
            <div
              className="col-lg-5 col-sm-8 position-relative page-title-extra-small"
              data-anime='{ "el": "childs", "opacity": [0, 1], "translateX": [-30, 0], "duration": 800, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <h1 className="mb-20px xs-mb-20px text-white text-shadow-medium">
                <span className="w-30px h-2px bg-yellow d-inline-block align-middle position-relative top-minus-2px me-10px" />
                Transparent Pricing
              </h1>
              <h2 className="text-white text-shadow-medium fw-500 ls-minus-2px mb-0">
                Flexible plans for individuals, SMEs, and corporate clients
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* end page title */}

      {/* start pricing section */}
      <section>
        <div className="container">
          <div className="row justify-content-center mb-6 text-center">
            <div className="col-lg-8">
              <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">
                Our Plans
              </span>
              <h3 className="alt-font text-dark-gray fw-700 ls-minus-2px mb-15px">
                Choose Your Plan
              </h3>
              <p className="text-dark-gray lh-26">
                No hidden fees. No surprises. Just clear, transparent pricing that scales with your business.
              </p>
            </div>
          </div>

          <div className="row">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 mx-auto mb-40px md-mb-50px"
                data-anime={`{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":${
                  index * 100
                }, "staggervalue": 300, "easing": "easeOutQuad" }`}
              >
                <div
                  className="bg-white border-radius-8px overflow-hidden h-100"
                  style={{
                    boxShadow: plan.isPopular
                      ? "0 15px 40px rgba(255, 122, 0, 0.15)"
                      : "0 5px 20px rgba(0, 0, 0, 0.08)",
                    position: "relative",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.isPopular) {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow =
                        "0 15px 40px rgba(0, 0, 0, 0.12)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Top Border for Popular Plan */}
                  {plan.isPopular && (
                    <div
                      style={{
                        height: "5px",
                        backgroundColor: "#ff7a00",
                      }}
                    />
                  )}

                  {/* Popular Badge */}
                  {plan.isPopular && (
                    <div
                      style={{
                        position: "absolute",
                        top: "15px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 10,
                      }}
                    >
                      <span
                        className="ps-20px pe-20px text-uppercase text-white fs-12 fw-700 border-radius-100px"
                        style={{ backgroundColor: "#ff7a00" }}
                      >
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-40px" style={{ paddingTop: plan.isPopular ? "60px" : "40px" }}>
                    {/* Plan Name and Best For */}
                    <h5 className="alt-font text-dark-gray fw-700 mb-10px">
                      {plan.name}
                    </h5>
                    <p className="text-base-color fw-600 fs-14 mb-30px">
                      {plan.bestFor}
                    </p>

                    {/* Price */}
                    <div className="mb-30px pb-30px border-bottom">
                      <h3 className="alt-font text-dark-gray fw-700 mb-0">
                        {plan.price}
                      </h3>
                      <p className="text-dark-gray fs-14 mb-0">
                        {plan.price === "Contact for Quote"
                          ? "Get custom quote based on your needs"
                          : "per month"}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="mb-35px">
                      <div className="mb-20px">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check2 text-base-color fw-700 me-10px mt-2px" />
                          <span className="text-dark-gray fw-600">
                            Tax Filing
                          </span>
                        </div>
                        {plan.features.taxFiling && (
                          <p className="text-dark-gray fs-14 ms-25px mb-0">
                            {plan.features.taxFiling}
                          </p>
                        )}
                      </div>

                      {plan.features.bookkeeping && (
                        <div className="mb-20px">
                          <div className="d-flex align-items-start">
                            <i className="bi bi-check2 text-base-color fw-700 me-10px mt-2px" />
                            <span className="text-dark-gray fw-600">
                              Bookkeeping
                            </span>
                          </div>
                          <p className="text-dark-gray fs-14 ms-25px mb-0">
                            {plan.features.bookkeeping}
                          </p>
                        </div>
                      )}

                      {plan.features.payroll && (
                        <div className="mb-20px">
                          <div className="d-flex align-items-start">
                            <i className="bi bi-check2 text-base-color fw-700 me-10px mt-2px" />
                            <span className="text-dark-gray fw-600">
                              Payroll
                            </span>
                          </div>
                          <p className="text-dark-gray fs-14 ms-25px mb-0">
                            {plan.features.payroll}
                          </p>
                        </div>
                      )}

                      {plan.features.auditSupport && (
                        <div className="mb-20px">
                          <div className="d-flex align-items-start">
                            <i className="bi bi-check2 text-base-color fw-700 me-10px mt-2px" />
                            <span className="text-dark-gray fw-600">
                              Audit Support
                            </span>
                          </div>
                          <p className="text-dark-gray fs-14 ms-25px mb-0">
                            {plan.features.auditSupport}
                          </p>
                        </div>
                      )}

                      {plan.features.financialAdvisory && (
                        <div className="mb-20px">
                          <div className="d-flex align-items-start">
                            <i className="bi bi-check2 text-base-color fw-700 me-10px mt-2px" />
                            <span className="text-dark-gray fw-600">
                              Financial Advisory
                            </span>
                          </div>
                          <p className="text-dark-gray fs-14 ms-25px mb-0">
                            {plan.features.financialAdvisory}
                          </p>
                        </div>
                      )}

                      <div className="mb-20px">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check2 text-base-color fw-700 me-10px mt-2px" />
                          <span className="text-dark-gray fw-600">
                            Jurisdictions
                          </span>
                        </div>
                        <p className="text-dark-gray fs-14 ms-25px mb-0">
                          {plan.features.jurisdictions}
                        </p>
                      </div>

                      <div className="mb-20px">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check2 text-base-color fw-700 me-10px mt-2px" />
                          <span className="text-dark-gray fw-600">
                            Response Time
                          </span>
                        </div>
                        <p className="text-dark-gray fs-14 ms-25px mb-0">
                          {plan.features.responseTime}
                        </p>
                      </div>

                      {plan.features.whatsappSupport && (
                        <div className="mb-20px">
                          <div className="d-flex align-items-start">
                            <i className="bi bi-check2 text-base-color fw-700 me-10px mt-2px" />
                            <span className="text-dark-gray fw-600">
                              WhatsApp Support
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <a
                      href="/contact"
                      className="btn btn-medium btn-rounded btn-block w-100 fw-600"
                      style={{
                        backgroundColor: plan.isPopular ? "#ff7a00" : "#ffffff",
                        color: plan.isPopular ? "#ffffff" : "#ff7a00",
                        border: `2px solid #ff7a00`,
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (!plan.isPopular) {
                          e.currentTarget.style.backgroundColor = "#ff7a00";
                          e.currentTarget.style.color = "#ffffff";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!plan.isPopular) {
                          e.currentTarget.style.backgroundColor = "#ffffff";
                          e.currentTarget.style.color = "#ff7a00";
                        }
                      }}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end pricing section */}

      {/* start consultation cta section */}
      <section className="bg-very-light-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="alt-font text-dark-gray fw-700 ls-minus-2px mb-20px">
                Not Sure Which Plan Fits You?
              </h3>
              <p className="text-dark-gray lh-26 mb-40px">
                Book a free 30-minute consultation and we'll recommend the right plan for your specific situation. No obligation, no pressure.
              </p>
              <a
                href="/contact"
                className="btn btn-medium btn-rounded btn-box-shadow"
                style={{ backgroundColor: "#ff7a00", color: "#ffffff" }}
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end consultation cta section */}

      {/* start why pricing cta section */}
      <section>
        <div className="container">
          <div className="row justify-content-center mb-6 text-center">
            <div className="col-lg-8">
              <h3 className="alt-font text-dark-gray fw-700 ls-minus-2px mb-20px">
                Why Our Pricing?
              </h3>
              <p className="text-dark-gray lh-26">
                We believe in transparency and flexibility. Our pricing reflects the real value we deliver while adapting to your budget and needs.
              </p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div className="col mb-40px">
              <div className="bg-white p-40px border-radius-6px box-shadow-medium text-center last-paragraph-no-margin h-100">
                <i className="bi bi-transparency fs-40 text-base-color mb-20px d-block" />
                <h5 className="alt-font text-dark-gray fw-700 mb-15px">
                  100% Transparent
                </h5>
                <p className="text-dark-gray lh-26">
                  No hidden fees, no surprise charges. What you see is what you get.
                </p>
              </div>
            </div>
            <div className="col mb-40px">
              <div className="bg-white p-40px border-radius-6px box-shadow-medium text-center last-paragraph-no-margin h-100">
                <i className="bi bi-arrow-left-right fs-40 text-base-color mb-20px d-block" />
                <h5 className="alt-font text-dark-gray fw-700 mb-15px">
                  Flexible & Scalable
                </h5>
                <p className="text-dark-gray lh-26">
                  Start where you are and upgrade as your business grows.
                </p>
              </div>
            </div>
            <div className="col mb-40px">
              <div className="bg-white p-40px border-radius-6px box-shadow-medium text-center last-paragraph-no-margin h-100">
                <i className="bi bi-person-check fs-40 text-base-color mb-20px d-block" />
                <h5 className="alt-font text-dark-gray fw-700 mb-15px">
                  Dedicated Support
                </h5>
                <p className="text-dark-gray lh-26">
                  Your success is our success. We're here to help you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end why pricing cta section */}
    </>
  );
}

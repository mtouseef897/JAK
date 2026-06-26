"use client";
import { useState } from "react";

export default function TaxComplianceHubPage() {
  const [activeTab, setActiveTab] = useState("pk");

  const taxContent = {
    pk: {
      name: "Pakistan",
      heading: "Pakistan Taxation - Complete Compliance Solutions",
      subheading: "From FBR filing to corporate tax — we handle it all",
      description:
        "JAK Associates provides comprehensive Pakistan taxation services for individuals, SMEs, and corporations. We are fully versed in FBR (Federal Board of Revenue) regulations, provincial tax requirements, and annual return filing processes.",
      note: "Jamal's expertise includes deep knowledge of the Income Tax Ordinance 2001 and Sales Tax Act 1990.",
      services: [
        "FBR NTN/GST Registration",
        "Tax Return Filing",
        "Sole Proprietorship Registration",
        "Private Limited Company Registration",
        "SMC Company Registration",
        "AOP Firm Registration",
        "LLP Registration",
        "Chamber Registration",
        "Import Export License",
        "7E Certificate",
        "DNFBP Registration",
        "Trademark Registration",
        "Bookkeeping",
      ],
    },
    us: {
      name: "United States",
      heading: "US Taxation - Comprehensive Tax Planning & Compliance",
      subheading: "IRS compliance for expats, freelancers & businesses",
      description:
        "Whether you are a Pakistani expat, freelancer earning US income, or running a US-based business, we ensure complete IRS compliance and optimal tax efficiency. From 1040 forms to business returns, we handle all US taxation requirements.",
      note: "Jamal's expertise includes FATCA compliance, Foreign Earned Income Exclusion (FEIE), and international tax treaties.",
      services: [
        "Individual 1040 tax return filing for US residents and expats",
        "Self-employment and freelance income tax planning",
        "US business formation and corporate tax returns (1120-S, C-Corp)",
        "Foreign Earned Income Exclusion (FEIE) optimization",
        "FATCA compliance and FBAR reporting",
        "IRS correspondence and audit support",
        "International tax treaty optimization",
      ],
    },
    uk: {
      name: "United Kingdom",
      heading: "UK Taxation - HMRC Compliance Made Simple",
      subheading: "Self Assessment, VAT, Corporation Tax & more",
      description:
        "From self-employed individuals to limited companies, we provide complete UK tax compliance services in line with HMRC requirements. Whether you are a UK resident, non-domicile, or a Pakistani professional with UK income, we ensure you remain compliant and tax-efficient.",
      note: "Jamal specializes in UK Self Assessment, Limited Company taxation, and non-resident tax optimization.",
      services: [
        "Self Assessment tax return filing",
        "Corporation Tax (CT600) filing for UK Ltd companies",
        "VAT registration and quarterly VAT returns",
        "PAYE payroll setup and compliance",
        "Capital Gains Tax (CGT) calculation and reporting",
        "Making Tax Digital (MTD) compliance",
        "HMRC correspondence and dispute support",
      ],
    },
    uae: {
      name: "UAE",
      heading: "UAE Taxation - VAT, Corporate Tax & Free Zone Compliance",
      subheading: "Stay compliant in the UAE's evolving tax environment",
      description:
        "The UAE introduced Corporate Tax in 2023 and has a well-established VAT framework. JAK Associates helps businesses operating in the UAE navigate these obligations efficiently — whether you are on the mainland or in a Free Zone.",
      note: "Jamal's expertise includes UAE Corporate Tax (9% CT regime), FTA VAT compliance, and Free Zone regulations.",
      services: [
        "UAE Corporate Tax registration and filing (9% CT regime)",
        "VAT registration with the Federal Tax Authority (FTA)",
        "Quarterly VAT return filing and reconciliation",
        "Free Zone entity compliance (DMCC, JAFZA, etc.)",
        "Economic Substance Regulations (ESR) compliance",
        "Transfer pricing documentation",
        "FTA audit support and voluntary disclosure",
      ],
    },
  };

  const currentTab = taxContent[activeTab];

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
                Tax & Compliance Hub
              </h1>
              <h2 className="text-white text-shadow-medium fw-500 ls-minus-2px mb-0">
                Expert Tax Advisory Across Four Major Jurisdictions
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* end page title */}

      {/* start tab navigation section */}
      <section>
        <div className="container">
          {/* Tab Navigation */}
          <div
            className="row justify-content-center mb-50px"
            data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "easing": "easeOutQuad" }'
          >
            <div className="col-lg-10">
              <div
                className="d-flex justify-content-center gap-30px border-bottom"
                style={{
                  borderBottomColor: "#e0e0e0",
                  borderBottomWidth: "1px",
                  flexWrap: "wrap",
                }}
              >
                {["pk", "us", "uk", "uae"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: "15px 20px",
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: activeTab === tab ? "700" : "500",
                      color: activeTab === tab ? "#001a4d" : "#999999",
                      borderBottom:
                        activeTab === tab ? "3px solid #ff7a00" : "none",
                      marginBottom: "-1px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== tab) {
                        e.currentTarget.style.color = "#666666";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== tab) {
                        e.currentTarget.style.color = "#999999";
                      }
                    }}
                  >
                    {tab === "pk"
                      ? "Pakistan Taxation"
                      : tab === "us"
                        ? "US Taxation"
                        : tab === "uk"
                          ? "UK Taxation"
                          : "UAE Taxation"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div
            className="row justify-content-center"
            data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":200, "easing": "easeOutQuad" }'
          >
            <div className="col-lg-10">
              <div className="row align-items-start g-50px">
                {/* Main Content */}
                <div className="col-lg-8">
                  <h3 className="alt-font text-dark-gray fw-700 ls-minus-1px mb-15px">
                    {currentTab.heading}
                  </h3>
                  <h5 className="text-base-color fw-600 mb-25px">
                    {currentTab.subheading}
                  </h5>
                  <p className="text-dark-gray lh-26 mb-30px">
                    {currentTab.description}
                  </p>

                  {/* Services List */}
                  <div className="mb-40px">
                    <h6 className="alt-font text-dark-gray fw-700 mb-20px">
                      Our Services
                    </h6>
                    <div className="row">
                      {currentTab.services.map((service, index) => (
                        <div key={index} className="col-md-6 mb-15px">
                          <div className="d-flex align-items-start">
                            <i className="bi bi-check2 text-base-color fw-700 me-10px mt-2px" />
                            <span className="text-dark-gray fw-500">
                              {service}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="/contact"
                    className="btn btn-medium btn-rounded btn-box-shadow"
                    style={{ backgroundColor: "#ff7a00", color: "#ffffff" }}
                  >
                    Get {currentTab.name} Tax Help
                  </a>
                </div>

                {/* Side Note */}
                <div className="col-lg-4">
                  <div
                    className="bg-light-gray p-40px border-radius-8px text-white"
                    style={{
                      position: "sticky",
                      top: "100px",
                    }}
                  >
                    <h6 className="fw-700 mb-15px">Expert Knowledge</h6>
                    <p className="lh-26 mb-0 fs-14">{currentTab.note}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end tab navigation section */}

      {/* start cta strip section */}
      <section
        className="pt-60px pb-60px"
        style={{
          background: "linear-gradient(90deg, #E87722 0%, #ff8b2b 100%)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="text-white fw-700 ls-minus-2px mb-20px">
                Not Sure Where to Start?
              </h3>
              <p className="text-white mb-35px fw-500 lh-26">
                Tell us your situation and jurisdiction — we'll guide you to the
                right solution with expert, personalized advice.
              </p>
              <a
                href="/contact"
                className="btn btn-medium btn-rounded btn-box-shadow"
                style={{ backgroundColor: "#ffffff", color: "#E87722" }}
              >
                Book a Free 30-Min Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end cta strip section */}
    </>
  );
}

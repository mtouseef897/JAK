"use client";
import { useState } from "react";
import ComingSoonRoute from "@/modules/components/common/ComingSoonRoute";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    whatsapp_phone: "",
    country: "",
    service_required: "",
    jurisdiction: "",
    heard_about_us: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted!", formData);

    // Validate required fields
    if (!formData.full_name.trim()) {
      setResult("Please enter your full name");
      return;
    }
    if (!formData.email_address.trim()) {
      setResult("Please enter your email address");
      return;
    }
    if (!formData.message.trim()) {
      setResult("Please enter your message");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      formDataToSend.append(
        "access_key",
        "1ea32568-194d-42aa-a164-318a0e6329ea",
      );

      console.log("Sending form data to Web3Forms...");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      console.log("Web3Forms Response:", data);

      if (data.success) {
        setResult("Success! We'll get back to you within 24 hours.");
        setFormData({
          full_name: "",
          email_address: "",
          whatsapp_phone: "",
          country: "",
          service_required: "",
          jurisdiction: "",
          heard_about_us: "",
          message: "",
        });

        // Auto-dismiss success message after 5 seconds
        setTimeout(() => {
          setResult("");
        }, 5000);
      } else {
        console.error("Form submission failed:", data);
        setResult("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
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
                Contact us
              </h1>
              <h2 className="text-white text-shadow-medium fw-500 ls-minus-2px mb-0">
                Clients relationships
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* end page title */}
      {/* start section */}
      <section id="down-section">
        <div className="container">
          <div className="row align-items-end justify-content-center mb-6 text-center text-lg-start sm-mb-8">
            <div
              className="col-xl-5 col-lg-7 col-md-10 md-mb-25px"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">
                How can help you?
              </span>
              <h3 className="text-dark-gray fw-700 ls-minus-1px mb-0">
                Get in touch!
              </h3>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-5 col-md-10 last-paragraph-no-margin">
              <p
                className="w-90 lg-w-100"
                data-anime='{ "el": "lines", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                We respond within 24 hours — reach us by email, WhatsApp, or the
                form below
              </p>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 mb-6 sm-mb-8"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <div className="col md-mb-30px text-center text-sm-start">
              <span className="alt-font fs-18 fw-700 d-block w-90 text-dark-gray border-bottom border-2 border-color-dark-gray pb-15px mb-15px xs-w-100">
                <i className="feather icon-feather-map-pin d-inline-block icon-small me-10px" />
                Office location
              </span>
              <div className="last-paragraph-no-margin">
                <p>
                  100% Remote — Based in Pakistan, serving PK | US | UK | UAE
                </p>
                <p>Monday – Saturday: 9:00 AM – 7:00 PM (PKT / GMT+5)</p>
              </div>
            </div>
            <div className="col md-mb-30px text-center text-sm-start">
              <span className="alt-font fs-18 fw-700 d-block w-90 text-dark-gray border-bottom border-2 border-color-dark-gray pb-15px mb-15px xs-w-100">
                <i className="feather icon-feather-mail d-inline-block icon-small me-10px" />
                Send a message
              </span>
              <a href="mailto:jamalkhanca001@gmail.com">jamalkhanca001@gmail.com</a>

              <br />
            </div>
            <div className="col xs-mb-30px text-center text-sm-start">
              <span className="alt-font fs-18 fw-700 d-block w-90 text-dark-gray border-bottom border-2 border-color-dark-gray pb-15px mb-15px xs-w-100">
                <i className="feather icon-feather-phone d-inline-block icon-small me-10px" />
                Call us directly
              </span>
              <a href="tel:+923095004300">+92-309-5004300</a>
              <p>Respond within 24 hours (usually same day)</p>
            </div>
          </div>
          <div
            className="row justify-content-center g-0"
            data-anime='{ "el": "childs", "translateX": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 150, "easing": "easeOutQuad" }'
          >
            <div className="col-auto text-center last-paragraph-no-margin icon-with-text-style-08 pt-20px pb-20px ps-8 pe-8 md-ps-30px md-pe-30px bg-light-gray border-radius-100px xs-border-radius-30px">
              <div className="feature-box feature-box-left-icon-middle overflow-hidden">
                <div className="feature-box-icon me-10px">
                  <i className="bi bi-chat-text fs-24 icon-very-medium text-white" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin text-white text-uppercase fs-15 fw-600 ls-05px xs-lh-24">
                  Let's make something great work together.{" "}
                  <a
                    href="demo-corporate-contact.html"
                    className="text-white text-decoration-line-bottom-medium"
                  >
                    Got a project in mind?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end section */}

      {/* start section */}
      <section>
        <div
          className="container overlap-section overlap-section-three-fourth"
          data-anime='{"el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 800, "delay": 500, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <div className="row row-cols-md-1 justify-content-center">
            <div className="col-xl-10">
              <div className="bg-white p-8 border-radius-6px box-shadow-double-large">
                <div className="row">
                  <div className="col-9">
                    <h3 className="alt-font text-dark-gray fw-700 ls-minus-2px mb-50px xs-mb-35px">
                      How we can help you?
                    </h3>
                  </div>
                  <div
                    className="col-3 text-end"
                    data-anime='{ "translateY": [30, 0], "translateX": [-30, 0], "opacity": [0,1], "duration": 600, "delay": 300, "staggervalue": 300, "easing": "easeOutQuad" }'
                  >
                    <i className="bi bi-send icon-large text-dark-gray animation-zoom" />
                  </div>
                </div>
                {/* start contact form */}
                <form onSubmit={onSubmit} className="row contact-form-style-02">
                  <div className="col-md-6 mb-30px">
                    <input
                      className="input-name form-control required"
                      type="text"
                      name="full_name"
                      placeholder="Full Name*"
                      value={formData.full_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6 mb-30px">
                    <input
                      className="form-control required"
                      type="email"
                      name="email_address"
                      placeholder="Email Address*"
                      value={formData.email_address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6 mb-30px">
                    <input
                      className="form-control"
                      type="text"
                      name="whatsapp_phone"
                      placeholder="WhatsApp / Phone Number"
                      value={formData.whatsapp_phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6 mb-30px">
                    <select
                      className="form-control"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                    >
                      <option value="">Your Country</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="UAE">UAE</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-30px">
                    <select
                      className="form-control"
                      name="service_required"
                      value={formData.service_required}
                      onChange={handleInputChange}
                    >
                      <option value="">Service Required</option>
                      <option value="Tax Filing">Tax Filing</option>
                      <option value="Bookkeeping">Bookkeeping</option>
                      <option value="Financial Planning">
                        Financial Planning
                      </option>
                      <option value="Audit">Audit</option>
                      <option value="Payroll">Payroll</option>
                      <option value="Business Incorporation">
                        Business Incorporation
                      </option>
                      <option value="Investment Advisory">
                        Investment Advisory
                      </option>
                      <option value="Budgeting">Budgeting</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-30px">
                    <select
                      className="form-control"
                      name="jurisdiction"
                      value={formData.jurisdiction}
                      onChange={handleInputChange}
                    >
                      <option value="">Jurisdiction</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="US">US</option>
                      <option value="UK">UK</option>
                      <option value="UAE">UAE</option>
                      <option value="Multiple">Multiple</option>
                    </select>
                  </div>
                  <div className="col-md-12 mb-30px">
                    <select
                      className="form-control"
                      name="heard_about_us"
                      value={formData.heard_about_us}
                      onChange={handleInputChange}
                    >
                      <option value="">How did you hear about us?</option>
                      <option value="Google">Google</option>
                      <option value="YouTube">YouTube</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Referral">Referral</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-12 mb-30px">
                    <textarea
                      className="form-control required"
                      cols={40}
                      rows={4}
                      name="message"
                      placeholder="Your Message*"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-xl-7 col-md-7 last-paragraph-no-margin">
                    <p className="text-center text-md-start fs-15 lh-26">
                      We are committed to protecting your privacy. We will never
                      collect information about you without your explicit
                      consent.
                    </p>
                  </div>
                  <div className="col-xl-5 col-md-5 text-center text-md-end sm-mt-20px">
                    <button
                      className="btn btn-medium btn-rounded btn-box-shadow btn-submit"
                      style={{
                        backgroundColor: "#ff7a00",
                        color: "#ffffff",
                        minWidth: "150px",
                        position: "relative",
                      }}
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                          }}
                        >
                          <span
                            style={{
                              display: "inline-block",
                              width: "14px",
                              height: "14px",
                              border: "2px solid #ffffff",
                              borderTop: "2px solid transparent",
                              borderRadius: "50%",
                              animation: "spin 0.8s linear infinite",
                            }}
                          />
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                    <style>{`
                      @keyframes spin {
                        to { transform: rotate(360deg); }
                      }
                    `}</style>
                  </div>
                  {result && (
                    <div className="col-12">
                      <div
                        style={{
                          marginTop: "20px",
                          padding: "20px",
                          borderRadius: "8px",
                          fontSize: "16px",
                          fontWeight: "500",
                          animation: "slideIn 0.3s ease-out",
                          backgroundColor: result.includes("Success")
                            ? "#d4edda"
                            : "#f8d7da",
                          color: result.includes("Success")
                            ? "#155724"
                            : "#721c24",
                          border: `2px solid ${result.includes("Success") ? "#c3e6cb" : "#f5c6cb"}`,
                          textAlign: "center",
                        }}
                      >
                        {result.includes("Success") ? (
                          <div>
                            <div
                              style={{ fontSize: "28px", marginBottom: "10px" }}
                            >
                              ✓
                            </div>
                            <div
                              style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "5px",
                              }}
                            >
                              Thank You!
                            </div>
                            <div>{result}</div>
                          </div>
                        ) : (
                          result
                        )}
                      </div>
                      <style>{`
                        @keyframes slideIn {
                          from {
                            opacity: 0;
                            transform: translateY(-10px);
                          }
                          to {
                            opacity: 1;
                            transform: translateY(0);
                          }
                        }
                      `}</style>
                    </div>
                  )}
                </form>
                {/* end contact form */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

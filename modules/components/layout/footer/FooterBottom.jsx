import React from "react";

import { footerBottomContent } from "@/modules/components/layout/footer/footerData";

const FooterBottom = () => {
  return (
    <div className="row align-items-center fs-16 fw-300">
      <div className="col-md-4 last-paragraph-no-margin order-2 order-md-1 text-center text-md-start">
        <p>
          © Copyright {footerBottomContent.copyright.year}{" "}
          <a
            href={footerBottomContent.copyright.brandHref}
            target="_blank"
            rel="noreferrer"
            className="text-decoration-line-bottom text-white"
          >
            {footerBottomContent.copyright.brandLabel}
          </a>
        </p>
      </div>
      <div className="col-md-8 text-md-end order-1 order-md-2 text-center text-md-end sm-mb-10px">
        <ul className="footer-navbar sm-lh-normal">
          {footerBottomContent.menuLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterBottom;

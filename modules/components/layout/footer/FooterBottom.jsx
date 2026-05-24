import React from "react";

import { footerBottomContent } from "@/modules/components/layout/footer/footerData";

const FooterBottom = () => {
  const visibleMenuLinks = footerBottomContent.menuLinks.filter(
    (link) => link.href && link.href !== "#",
  );

  return (
    <div className="site-footer__bottom fs-16 fw-300">
      <p className="site-footer__bottom-copy mb-0">
        © Copyright {footerBottomContent.copyright.year}{" "}
        {footerBottomContent.copyright.brandLabel}. All rights reserved.
      </p>
      {visibleMenuLinks.length > 0 ? (
        <ul className="site-footer__bottom-links">
          {visibleMenuLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default FooterBottom;

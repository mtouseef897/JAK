import React from "react";

import { footerTopContent } from "@/modules/components/layout/footer/footerData";

const FooterTopAction = ({ action }) => {
  return (
    <a href={action.href} className={action.className}>
      <i className={action.iconClassName} />
      {action.label}
    </a>
  );
};

const FooterTop = () => {
  return (
    <div className="site-footer__top border-bottom border-1 border-color-transparent-white-light">
      <div className="container">
        <div className="site-footer__top-panel">
          <div className="site-footer__top-copy">
            <h3 className="text-white mb-10px fw-500 ls-minus-1px">
              {footerTopContent.title}
            </h3>
            <span className="site-footer__top-description fs-20 widget-text fw-300">
              {footerTopContent.description}
            </span>
          </div>
          <div className="site-footer__top-actions">
            {footerTopContent.actions.map((action) => (
              <FooterTopAction key={action.label} action={action} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;

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
    <div className="footer-top pt-50px pb-50px sm-pt-35px sm-pb-35px border-bottom border-1 border-color-transparent-white-light">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 text-center text-xl-start lg-mb-30px sm-mb-20px">
            <h3 className="text-white mb-5px fw-500 ls-minus-1px">
              {footerTopContent.title}
            </h3>
            <span className="fs-20 widget-text fw-300">
              {footerTopContent.description}
            </span>
          </div>
          <div className="col-xl-6 text-center text-xl-end">
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

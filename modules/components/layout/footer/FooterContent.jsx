import React from "react";

import {
  footerBrand,
  footerContact,
  footerLinkGroups,
  footerNewsletter,
} from "@/modules/components/layout/footer/footerData";

const FooterBrand = () => {
  return (
    <div className="col-6 col-lg-3 order-sm-1 md-mb-40px xs-mb-30px last-paragraph-no-margin">
      <a href={footerBrand.href} className="footer-logo mb-15px d-inline-block">
        <img
          src={footerBrand.logoSrc}
          data-at2x={footerBrand.retinaLogoSrc}
          alt=""
        />
      </a>
      <p className="w-85 xl-w-95 sm-w-100">{footerBrand.description}</p>
      <div className="elements-social social-icon-style-02 mt-20px lg-mt-20px">
        <ul className="small-icon light">
          {footerBrand.socialLinks.map((link) => (
            <li key={link.name}>
              <a
                className={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <i className={link.iconClassName} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FooterLinkGroup = ({ group }) => {
  return (
    <div className={group.className}>
      <span className="fs-18 fw-400 d-block text-white mb-5px">
        {group.title}
      </span>
      <ul>
        {group.links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterContactBlock = () => {
  return (
    <div className={footerContact.className}>
      <span className="fs-18 fw-400 d-block text-white mb-5px">
        {footerContact.title}
      </span>
      {footerContact.items.map((item) => (
        <React.Fragment key={item.label}>
          <p className="mb-5px">{item.label}</p>
          <a href={item.href} className={item.linkClassName}>
            {item.value}
          </a>
        </React.Fragment>
      ))}
    </div>
  );
};

const FooterNewsletterBlock = () => {
  return (
    <div className={footerNewsletter.className}>
      <span className="fs-18 fw-400 d-block text-white mb-5px">
        {footerNewsletter.title}
      </span>
      <p className="mb-20px">{footerNewsletter.description}</p>
      <div className="d-inline-block w-100 newsletter-style-02 position-relative">
        <form
          action={footerNewsletter.formAction}
          method="post"
          className="position-relative"
        >
          <input
            className="border-color-transparent-white-light bg-transparent border-radius-4px w-100 form-control lg-ps-15px required fs-16"
            type="email"
            name="email"
            placeholder={footerNewsletter.emailPlaceholder}
          />
          <input type="hidden" name="redirect" defaultValue="" />
          <button className="btn pe-20px submit" aria-label="submit">
            <i className="bi bi-envelope icon-small text-white" />
          </button>
          <div className="form-results border-radius-4px pt-5px pb-5px ps-15px pe-15px fs-14 lh-22 mt-10px w-100 text-center position-absolute d-none" />
        </form>
      </div>
    </div>
  );
};

const FooterContent = () => {
  return (
    <div className="row justify-content-center fs-17 fw-300 mt-5 mb-4 md-mt-45px md-mb-45px xs-mt-35px xs-mb-35px">
      <FooterBrand />
      {footerLinkGroups.map((group) => (
        <FooterLinkGroup key={group.title} group={group} />
      ))}
      <FooterContactBlock />
      <FooterNewsletterBlock />
    </div>
  );
};

export default FooterContent;

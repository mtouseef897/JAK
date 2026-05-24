import React from "react";

import {
  footerBrand,
  footerContact,
  footerLinkGroups,
  footerNewsletter,
} from "@/modules/components/layout/footer/footerData";

const FooterBrand = () => {
  return (
    <div className="site-footer__brand-card site-footer__card last-paragraph-no-margin">
      <a href={footerBrand.href} className="footer-logo mb-15px d-inline-block">
        <img
          src={footerBrand.logoSrc}
          data-at2x={footerBrand.retinaLogoSrc}
          alt=""
        />
      </a>
      <p className="site-footer__brand-copy">{footerBrand.description}</p>
      <div className="elements-social social-icon-style-02 mt-20px lg-mt-20px">
        <ul className="small-icon light site-footer__social-list">
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
    <div className="site-footer__card site-footer__link-card">
      <span className="site-footer__section-title d-block text-white mb-5px">
        {group.title}
      </span>
      <ul className="site-footer__link-list">
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
    <div className="site-footer__card site-footer__contact-card">
      <span className="site-footer__section-title d-block text-white mb-5px">
        {footerContact.title}
      </span>
      <div className="site-footer__contact-list">
        {footerContact.items.map((item) => (
          <div key={item.label} className="site-footer__contact-item">
            <p className="site-footer__contact-label mb-5px">{item.label}</p>
            <a href={item.href} className={item.linkClassName}>
              {item.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const FooterNewsletterBlock = () => {
  return (
    <div className="site-footer__card site-footer__newsletter-card">
      <span className="site-footer__section-title d-block text-white mb-5px">
        {footerNewsletter.title}
      </span>
      <p className="site-footer__newsletter-copy mb-20px">
        {footerNewsletter.description}
      </p>
      <div className="d-inline-block w-100 newsletter-style-02 position-relative site-footer__newsletter-form">
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
    <div className="site-footer__content fs-17 fw-300 mt-5 mb-4 md-mt-45px md-mb-45px xs-mt-35px xs-mb-35px">
      <FooterBrand />
      <div className="site-footer__links-grid">
        {footerLinkGroups.map((group) => (
          <FooterLinkGroup key={group.title} group={group} />
        ))}
      </div>
      <div className="site-footer__stack">
        <FooterContactBlock />
        <FooterNewsletterBlock />
      </div>
    </div>
  );
};

export default FooterContent;

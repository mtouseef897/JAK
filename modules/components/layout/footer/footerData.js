export const footerTopContent = {
  title: "Get a consultation services.",
  description: "We will take care of your business accounting services.",
  actions: [
    {
      href: "/contact",
      iconClassName: "feather icon-feather-mail",
      label: "Let's Talk",
      className:
        "btn btn-extra-large btn-yellow left-icon btn-box-shadow btn-rounded text-transform-none d-inline-block align-middle me-15px xs-m-10px",
    },
    {
      href: "tel:+92-309-5004300",
      iconClassName: "feather icon-feather-phone-call",
      label: "+92 309 5004300",
      className:
        "btn btn-extra-large btn-base-color left-icon btn-box-shadow btn-rounded d-inline-block align-middle xs-m-10px",
    },
  ],
};

export const footerBrand = {
  href: "/",
  logoSrc: "/images/JAK.jpeg",
  retinaLogoSrc: "/images/JAK.jpeg",
  description: "The Confidence of Being Clear",
  socialLinks: [
    {
      name: "facebook",
      href: "https://www.facebook.com/share/18WzykTc7V/",
      iconClassName: "fa-brands fa-facebook-f",
    },
    {
      name: "youtube",
      href: "https://youtube.com/@mr.jakca_1",
      iconClassName: "fa-brands fa-youtube",
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/jamal-ahmad-khan-3b3b30289",
      iconClassName: "fa-brands fa-linkedin",
    },
    {
      name: "whatsapp",
      href: "https://wa.me/923095004300",
      iconClassName: "fa-brands fa-whatsapp",
    },
  ],
};

export const footerLinkGroups = [
  {
    title: "About",
    className: "col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-3 order-lg-2",
    links: [
      { href: "/", label: "Company" },
      { href: "/services", label: "Services" },
      { href: "/", label: "Process" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    className: "col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-4 order-lg-3",
    links: [
      { href: "/services/audit", label: "Audit" },
      { href: "/services/audit-assurance", label: "Audit Assurance" },
      { href: "/services/bookkeeping", label: "Bookkeeping" },
      { href: "/services/budgeting", label: "Budgeting" },
      { href: "/services/business-planning", label: "Business Planning" },
      { href: "/services/financial-planning", label: "Financial Planning" },
      {
        href: "/services/financial-projections",
        label: "Financial Projections",
      },
      { href: "/services/incorporation", label: "Incorporation" },
      { href: "/services/investment", label: "Investment" },
      { href: "/services/payroll", label: "Payroll" },
      { href: "/services/strategic-planning", label: "Strategic Planning" },
      { href: "/services/tax-filing", label: "Tax Filing" },
    ],
  },
];

export const footerContact = {
  title: "Get in touch",
  className: "col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-5 order-lg-4",
  items: [
    {
      label: "Need support?",
      href: "mailto:jamalkhanca@gmail.com",
      value: "jamalkhanca@gmail.com",
      linkClassName: "text-white lh-16 d-block mb-15px",
    },
    {
      label: "Customer care?",
      href: "tel:+923095004300",
      value: "+92 309 5004300",
      linkClassName: "text-white lh-16 d-block",
    },
  ],
};

export const footerNewsletter = {
  title: "Subscribe to newsletter",
  description: "Enter your email and we contact you!",
  className: "col-lg-3 col-sm-6 md-mb-40px xs-mb-0 order-sm-2 order-lg-5",
  formAction: "email-templates/subscribe-newsletter.php",
  emailPlaceholder: "Enter your email",
};

export const footerBottomContent = {
  copyright: {
    year: "2026",
    brandHref: "/",
    brandLabel: "JAK Global",
  },
  menuLinks: [
    { href: "#", label: "Privacy policy" },
    { href: "#", label: "Terms and conditions" },
    { href: "#", label: "Copyright" },
  ],
};

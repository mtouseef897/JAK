export const footerTopContent = {
  title: "Get a consultation services.",
  description: "We will take care of your business accounting services.",
  actions: [
    {
      href: "demo-accounting-contact.html",
      iconClassName: "feather icon-feather-mail",
      label: "Free consultation",
      className:
        "btn btn-extra-large btn-yellow left-icon btn-box-shadow btn-rounded text-transform-none d-inline-block align-middle me-15px xs-m-10px",
    },
    {
      href: "tel:12345678910",
      iconClassName: "feather icon-feather-phone-call",
      label: "+1 234 567 8910",
      className:
        "btn btn-extra-large btn-base-color left-icon btn-box-shadow btn-rounded d-inline-block align-middle xs-m-10px",
    },
  ],
};

export const footerBrand = {
  href: "demo-accounting.html",
  logoSrc: "images/demo-accounting-logo-white.png",
  retinaLogoSrc: "images/demo-accounting-logo-white@2x.png",
  description: "Lorem ipsum amet adipiscing elit to eiusmod ad tempor.",
  socialLinks: [
    {
      name: "facebook",
      href: "https://www.facebook.com/",
      iconClassName: "fa-brands fa-facebook-f",
    },
    {
      name: "dribbble",
      href: "http://www.dribbble.com",
      iconClassName: "fa-brands fa-dribbble",
    },
    {
      name: "twitter",
      href: "http://www.twitter.com",
      iconClassName: "fa-brands fa-twitter",
    },
    {
      name: "instagram",
      href: "http://www.instagram.com",
      iconClassName: "fa-brands fa-instagram",
    },
  ],
};

export const footerLinkGroups = [
  {
    title: "About",
    className: "col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-3 order-lg-2",
    links: [
      { href: "demo-accounting-company.html", label: "Company" },
      { href: "demo-accounting-services.html", label: "Services" },
      { href: "demo-accounting-process.html", label: "Process" },
      { href: "demo-accounting-contact.html", label: "Contact" },
    ],
  },
  {
    title: "Services",
    className: "col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-4 order-lg-3",
    links: [
      { href: "demo-accounting-services.html", label: "Financial" },
      { href: "demo-accounting-services.html", label: "Investment" },
      { href: "demo-accounting-services.html", label: "Banking" },
      { href: "demo-accounting-services.html", label: "Consulting" },
    ],
  },
];

export const footerContact = {
  title: "Get in touch",
  className: "col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-5 order-lg-4",
  items: [
    {
      label: "Need support?",
      href: "mailto:hi@domain.com",
      value: "hi@domain.com",
      linkClassName: "text-white lh-16 d-block mb-15px",
    },
    {
      label: "Customer care?",
      href: "tel:12345678910",
      value: "+1 234 567 8910",
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
    year: "2024",
    brandHref: "index.html",
    brandLabel: "Crafto",
  },
  menuLinks: [
    { href: "#", label: "Privacy policy" },
    { href: "#", label: "Terms and conditions" },
    { href: "#", label: "Copyright" },
  ],
};

export const headerTopBar = {
  message: "10+ Years in Accounting, Taxation & Financial Advisory",
  contactLink: {
    href: "/contact",
    label: "Contact now",
  },
  phone: {
    href: "tel:+92-309-5004300",
    iconClassName: "feather icon-feather-message-circle",
    label: "+92-309-5004300",
  },
  location: {
    iconClassName: "feather icon-feather-mail",
    label: "jamalkhanca@gmail.com",
  },
};

export const logoImages = [
  {
    className: "default-logo",
    src: "images/jak-logo.jpg",
    retinaSrc: "images/jak-logo@2x.jpg",
  },
  {
    className: "alt-logo",
    src: "images/jak-logo.jpg",
    retinaSrc: "images/jak-logo@2x.jpg",
  },
  {
    className: "mobile-logo",
    src: "images/jak-logo.jpg",
    retinaSrc: "images/jak-logo-mobile@2x.jpg",
  },
];

export const navigationItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about-us",
    label: "About Us",
  },
  {
    href: "/services",
    label: "Services",
    children: [
      {
        href: "/services/tax-filing",
        iconSrc: "images/demo-accounting-company-icon02.svg",
        label: "Tax Filing",
      },
      {
        href: "/services/bookkeeping",
        iconSrc: "images/demo-accounting-company-icon03.svg",
        label: "Bookkeeping",
      },
      {
        href: "/services/financial-planning",
        iconSrc: "images/demo-accounting-company-icon-04.svg",
        label: "Financial Planning",
      },
      {
        href: "/services/audit",
        iconSrc: "images/demo-accounting-company-icon-05.svg",
        label: "Audit",
      },
      {
        href: "/services/payroll",
        iconSrc: "images/demo-accounting-company-icon-06.svg",
        label: "Payroll",
      },
      {
        href: "/services/incorporation",
        iconSrc: "images/demo-accounting-company-icon02.svg",
        label: "Incorporation",
      },
      {
        href: "/services/investment",
        iconSrc: "images/demo-accounting-company-icon03.svg",
        label: "Investment",
      },
      {
        href: "/services/budgeting",
        iconSrc: "images/demo-accounting-company-icon-04.svg",
        label: "Budgeting",
      },
    ],
  },
  {
    href: "/tax-compliance-hub",
    label: "Tax Hub",
  },
  {
    href: "/team",
    label: "Team",
  },
  {
    href: "/pricing",
    label: "Pricing",
  },
  {
    href: "/testimonials",
    label: "Testimonials",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export const headerCta = {
  href: "/contact",
  label: "Let's Talk",
};

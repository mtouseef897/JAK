import React from "react";

import FooterBottom from "@/modules/components/layout/footer/FooterBottom";
import FooterContent from "@/modules/components/layout/footer/FooterContent";
import FooterTop from "@/modules/components/layout/footer/FooterTop";

const Footer = () => {
  return (
    <footer className="footer-dark bg-dark-gray pt-0 pb-2 lg-pb-35px">
      <FooterTop />
      <div className="container">
        <FooterContent />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;

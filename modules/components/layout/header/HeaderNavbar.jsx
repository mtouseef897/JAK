import React from "react";

import {
  headerCta,
  logoImages,
  navigationItems,
} from "@/modules/components/layout/header/headerData";

const HeaderLogo = () => {
  return (
    <a className="navbar-brand" href="/">
      {logoImages.map((image) => (
        <img
          key={image.className}
          src={image.src}
          data-at2x={image.retinaSrc}
          alt=""
          className={image.className}
        />
      ))}
    </a>
  );
};

const DropdownMenuItem = ({ item }) => {
  return (
    <li>
      <a href={item.href}>
        {item.iconSrc ? <img src={item.iconSrc} alt="" /> : null}
        {item.label}
      </a>
    </li>
  );
};

const NavigationMenuItem = ({ item }) => {
  if (!item.children) {
    return (
      <li className="nav-item">
        <a href={item.href} className="nav-link">
          {item.label}
        </a>
      </li>
    );
  }

  return (
    <li className="nav-item dropdown dropdown-with-icon-style02">
      <a href={item.href} className="nav-link">
        {item.label}
      </a>
      <i
        className="fa-solid fa-angle-down dropdown-toggle"
        id="navbarDropdownMenuLink"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      />
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {item.children.map((child) => (
          <DropdownMenuItem key={child.label} item={child} />
        ))}
      </ul>
    </li>
  );
};

const HeaderNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg header-light bg-white responsive-sticky">
      <div className="container-fluid">
        <div className="col-auto col-lg-2 me-lg-0 me-auto">
          <HeaderLogo />
        </div>
        <div className="col-auto menu-order position-static">
          <button
            className="navbar-toggler float-start"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-line" />
            <span className="navbar-toggler-line" />
            <span className="navbar-toggler-line" />
            <span className="navbar-toggler-line" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav fw-600">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.label} item={item} />
              ))}
            </ul>
          </div>
        </div>
        <div className="col-auto col-lg-2 text-end d-none d-sm-flex">
          <div className="header-icon">
            <div className="header-button">
              <a
                href={headerCta.href}
                className="btn btn-small btn-rounded btn-base-color btn-box-shadow"
                style={{
                    backgroundColor:"#E87722"
                }}
              >
                {headerCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;

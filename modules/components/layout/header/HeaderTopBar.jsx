import React from 'react'

import { headerTopBar } from '@/modules/components/layout/header/headerData'

const HeaderTopBar = () => {
  return (
    <div className="header-top-bar top-bar-dar" style={{
        backgroundColor:"#1B3A6B",

    }}>
      <div className="container-fluid">
        <div className="row h-45px xs-h-auto align-items-center m-0 xs-pt-5px xs-pb-5px">
          <div className="col-lg-6 col-md-7 text-center text-md-start xs-px-0">
            <div className="fs-15 text-white fw-500">
              {headerTopBar.message}{' '}
              {/* <a
                href={headerTopBar.contactLink.href}
                className="text-white text-decoration-line-bottom fw-600"
              >
                {headerTopBar.contactLink.label}
              </a> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-5 text-end d-none d-md-flex">
            <div className="widget fs-15 fw-500 me-35px lg-me-25px md-me-0 text-white">
              <a href={headerTopBar.phone.href}>
                <i className={headerTopBar.phone.iconClassName} />
                {headerTopBar.phone.label}
              </a>
            </div>
            <div className="widget fs-15 fw-500 text-white d-none d-lg-inline-block">
              <i className={headerTopBar.location.iconClassName} />
              {headerTopBar.location.label}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTopBar
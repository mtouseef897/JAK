import React from 'react'

import HeaderNavbar from '@/modules/components/layout/header/HeaderNavbar'
import HeaderTopBar from '@/modules/components/layout/header/HeaderTopBar'

const Header = () => {
  return (
    <header className="header-with-topbar">
      <HeaderTopBar />
      <HeaderNavbar />
    </header>
  )
}

export default Header
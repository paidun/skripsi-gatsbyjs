import React from 'react'
import Navbar from './Navbar'
import HeaderComponent from './Header'
import { Helmet } from 'react-helmet'
import NavbarCombination from './NavbarCombination'

export default function Layout({ children, type, title }) {
  return (
    <div>
      <Helmet>
        <title>TESTING | {title}</title>
      </Helmet>
      <LayoutType type={type} />
      <main>
        {children}
      </main>
    </div>
  )
}

const LayoutType = ({ type }) => {
  if (type === "Navbar") {
    return (
      <Navbar />
    )
  } else if (type === "Combination") {
    return (
      <NavbarCombination />
    )
  }
  else {
    return (
      <HeaderComponent />
    )
  }
}

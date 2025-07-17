'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'
import Navbar from './Navbar'

export default function FooterController({ children }) {
  const pathname = usePathname()

  const hideFooterOn = ['/generate', '/About']

  // Check if current path is a known static route
  const isStaticPage = hideFooterOn.includes(pathname)

  // Dynamic user page: any single segment path that is NOT a known static page
  const isDynamicUserPage = /^\/[^\/]+\/?$/.test(pathname) && !isStaticPage

  const showFooter = !isStaticPage && !isDynamicUserPage
  const showNavbar = !isDynamicUserPage

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
      {showFooter && <Footer />}
    </>
  )
}

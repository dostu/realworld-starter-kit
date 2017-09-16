import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Page = ({ children, className }) =>
  <div>
    <Header />
    <div className={className}>
      {children}
    </div>
    <Footer />
  </div>

export default Page

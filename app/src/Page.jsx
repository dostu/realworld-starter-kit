import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

import Header from './Header'
import Footer from './Footer'

const Page = ({ viewer: { headerUser }, children, className }) =>
  <div>
    <Header user={headerUser} />
    <div className={className}>
      {children}
    </div>
    <Footer />
  </div>

export default createFragmentContainer(
  Page,
  graphql`
    fragment Page_viewer on Viewer {
      headerUser: user {
        ...Header_user
      }
    }
  `
)


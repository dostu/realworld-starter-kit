import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

const ProfilePicture = ({ user, className }) => {
  const imageUrl = user.profilePictureUrl || 'https://static.productionready.io/images/smiley-cyrus.jpg'

  return (
    <img src={imageUrl} className={className} />
  )
}

export default createFragmentContainer(
  ProfilePicture,
  graphql`
    fragment ProfilePicture_user on User {
      profilePictureUrl
    }
  `
)


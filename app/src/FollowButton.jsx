import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

import followUser from './mutations/FollowUser'

const FollowButton = ({ user, followedUser, className }) => {
  const follow = async () => {
    await followUser({ userId: user.id, followedUserId: followedUser.id})
  }

  return (
    <button onClick={follow} className={`btn btn-sm btn-outline-secondary ${className}`}>
      <i className="ion-plus-round"></i>
      &nbsp;
      Follow {followedUser.name} <span className="counter">({followedUser.followedBy.count})</span>
    </button>
  )
}

export default createFragmentContainer(
  FollowButton,
  graphql`
    fragment FollowButton_user on User {
      id
      name
    }

    fragment FollowButton_followedUser on User {
      id
      followedBy {
        count
      }
    }
  `
)


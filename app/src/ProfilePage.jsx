import React from 'react'
import { graphql } from 'react-relay'
import { withRouter, Link } from 'react-router-dom'

import QueryComponent from './relay/QueryComponent'
import Page from './Page'
import FollowButton from './FollowButton'
import ArticlePreview from './ArticlePreview'

const ProfilePage = ({ viewer, viewer: { user, currentUser } }) => {
  const renderSettingsButton = () => (
    <Link to={`/profile/${user.name}`} className="btn btn-sm btn-outline-secondary action-btn">
      <i className="ion-gear-a"></i> Edit Profile Settings
    </Link>
  )

  const renderFollowButton = () => (
    <FollowButton followedUser={user} user={currentUser} className="action-btn" />
  )

  return (
    <Page viewer={viewer} className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={user.profilePictureUrl} className="user-img" />
              <h4>{user.name}</h4>
              <p>{user.bio}</p>
              {user.name === currentUser.name ? renderSettingsButton() : renderFollowButton()}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link active" href="">My Articles</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Favorited Articles</a>
                </li>
              </ul>
            </div>

            {user.articles.edges.map((edge, index) => <ArticlePreview article={edge.node} key={index} />)}
          </div>
        </div>
      </div>
    </Page>
  )
}

const ProfilePageQuery = graphql`
  query ProfilePageQuery($name: String!) {
    viewer {
      ...Page_viewer
      currentUser: user {
        name
        ...FollowButton_user
      }
      user: User(name: $name) {
        profilePictureUrl
        name
        bio
        articles {
          edges {
            node {
              ...ArticlePreview_article
            }
          }
        }
        ...FollowButton_followedUser
      }
    }
  }
`

export default withRouter((props) => (
  <QueryComponent
    query={ProfilePageQuery}
    component={ProfilePage}
    variables={{ name: props.match.params.name }}
    {...props}
  />
))

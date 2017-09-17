import React from 'react'
import { graphql } from 'react-relay'

import QueryComponent from './relay/QueryComponent'
import Page from './Page'
import ArticlePreview from './ArticlePreview'

const HomePage = ({ viewer, viewer: { articles } }) =>
  <Page viewer={viewer} className="home-page">
    {
      viewer.user &&
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
    }

    <div className="container page">
      <div className="row">

        <div className="col-md-9">
          <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
              <li className="nav-item">
                <a className="nav-link disabled" href="">Your Feed</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>

          {articles.edges.map(edge => <ArticlePreview article={edge.node} key={edge.node.id} />)}
        </div>

        <div className="col-md-3">
          <div className="sidebar">
            <p>Popular Tags</p>

            <div className="tag-list">
              <a href="" className="tag-pill tag-default">programming</a>
              <a href="" className="tag-pill tag-default">javascript</a>
              <a href="" className="tag-pill tag-default">emberjs</a>
              <a href="" className="tag-pill tag-default">angularjs</a>
              <a href="" className="tag-pill tag-default">react</a>
              <a href="" className="tag-pill tag-default">mean</a>
              <a href="" className="tag-pill tag-default">node</a>
              <a href="" className="tag-pill tag-default">rails</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </Page>

const HomePageQuery = graphql`
  query HomePageQuery {
    viewer {
      ...Page_viewer
      articles: allArticles {
        edges {
          node {
            id
            ...ArticlePreview_article
          }
        }
      }
    }
  }
`

export default () =>
  <QueryComponent
    query={HomePageQuery}
    component={HomePage}
  />

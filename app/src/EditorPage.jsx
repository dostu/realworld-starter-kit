import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-relay'

import QueryComponent from './relay/QueryComponent'
import Page from './Page'
import createArticle from './mutations/CreateArticle'
import EditorForm from './EditorForm'

const EditorPage = ({ viewer, handleSubmit, history }) => {
  const submit = async (values) => {
    const articleSlug = await createArticle({ ...values, authorId: viewer.user.id })
    history.push(`/article/${articleSlug}`)
  }

  return (
    <Page viewer={viewer} className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <EditorForm onSubmit={submit} />
          </div>
        </div>
      </div>
    </Page>
  )
}

const EditorPageQuery = graphql`
  query EditorPageQuery {
    viewer {
      ...Page_viewer
      user {
        id
      }
    }
  }
`

export default withRouter((props) => (
  <QueryComponent
    query={EditorPageQuery}
    component={EditorPage}
    {...props}
  />
))

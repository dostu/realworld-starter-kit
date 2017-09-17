import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-relay'

import QueryComponent from './relay/QueryComponent'
import Page from './Page'
import updateArticle from './mutations/UpdateArticle'
import EditorForm from './EditorForm'

const EditorEditPage = ({ viewer, viewer: { article }, handleSubmit, history }) => {
  const submit = async (values) => {
    const articleSlug = await updateArticle({ ...values, id: article.id })
    history.push(`/article/${articleSlug}`)
  }

  return (
    <Page viewer={viewer} className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <EditorForm initialValues={article} onSubmit={submit} />
          </div>
        </div>
      </div>
    </Page>
  )
}

const EditorEditPageQuery = graphql`
  query EditorEditPageQuery($slug: String!) {
    viewer {
      ...Page_viewer
      user {
        id
      }
      article: Article(slug: $slug) {
        id
        title
        description
        body
      }
    }
  }
`

export default withRouter((props) => (
  <QueryComponent
    query={EditorEditPageQuery}
    component={EditorEditPage}
    variables={{ slug: props.match.params.slug }}
    {...props}
  />
))

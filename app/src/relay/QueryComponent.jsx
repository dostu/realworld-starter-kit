import React from 'react'
import { QueryRenderer } from 'react-relay'

import environment from './environment'

const QueryComponent = ({
  query,
  variables,
  component: Component,
  loadingPlaceholder: LoadingPlaceholder,
  ...componentProps
}) =>
  <QueryRenderer
    environment={environment}
    query={query}
    variables={variables}
    render={({ error, props: fetchedProps }) => {
      if (error) {
        throw error
      }

      if (fetchedProps) {
        return <Component {...componentProps} {...fetchedProps} />
      }

      if (LoadingPlaceholder) {
        return <LoadingPlaceholder />
      }

      return null
    }}
  />

export default QueryComponent

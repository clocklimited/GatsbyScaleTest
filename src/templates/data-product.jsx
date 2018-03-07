import React from 'react'

const DataProduct = ({ data }) =>
  <div>
    <h2>{data.site.id}</h2>
    <p>{data.site.siteMetadata.title}</p>
  </div>

export default DataProduct

export const pageQuery = graphql`
  query MyQueryName {
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`

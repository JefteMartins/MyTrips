import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPAges {
    pages {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

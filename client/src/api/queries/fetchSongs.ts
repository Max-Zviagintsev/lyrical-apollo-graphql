import { gql } from '@apollo/client'

export const FETCH_SONGS = gql`
  query FetchSongs {
    songs {
      id
      title
    }
  }
`

import { gql } from '@apollo/client'

export const FETCH_SONG = gql`
  query FetchSong($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`

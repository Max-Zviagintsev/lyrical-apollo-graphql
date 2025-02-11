import { gql } from '@apollo/client'

export const ADD_LYRICS = gql`
  mutation AddLyrics($songId: ID!, $content: String!) {
    addLyrics(songId: $songId, content: $content) {
      id
      lyrics {
        id
        content
      }
    }
  }
`

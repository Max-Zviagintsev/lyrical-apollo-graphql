import { gql } from '@apollo/client'

export const ADD_SONG = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      title
    }
  }
`
export const DELETE_SONG = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id)
  }
`

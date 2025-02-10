import { useQuery } from '@apollo/client'
import { FETCH_SONGS } from '../../api/queries/songQueries'
import {
  Wrapper,
  Heading,
  List,
  ListItem,
  LinkButton,
} from './StyledComponents'
import { Song } from '../../types'

function SongList() {
  const { loading, error, data } = useQuery(FETCH_SONGS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  const listItems = data.songs.map(({ id, title }: Song) => (
    <ListItem key={id}>{title}</ListItem>
  ))

  return (
    <Wrapper>
      <Heading>Song list</Heading>
      <List>{listItems}</List>
      <LinkButton to="/songs/new">Add song</LinkButton>
    </Wrapper>
  )
}

export default SongList

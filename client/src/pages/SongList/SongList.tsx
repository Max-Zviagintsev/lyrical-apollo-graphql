import { useQuery, useMutation } from '@apollo/client'
import { FETCH_SONGS } from '../../api/queries/songQueries'
import { DELETE_SONG } from '../../api/mutations/songMutations'
import {
  Wrapper,
  Heading,
  List,
  ListItem,
  LinkButton,
  DeleteIcon,
  Title,
} from './StyledComponents'
import { Song } from '../../types'

function SongList() {
  const { loading, error, data } = useQuery(FETCH_SONGS)
  const [deleteSong] = useMutation(DELETE_SONG, {
    refetchQueries: [FETCH_SONGS, 'FetchSongs'],
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  const handleDelete = (id: string) => {
    deleteSong({ variables: { id } })
  }

  const listItems = data.songs.map(({ id, title }: Song) => (
    <ListItem key={id}>
      <Title to={`/songs/${id}`}>{title}</Title>
      <DeleteIcon onClick={() => handleDelete(id)} />
    </ListItem>
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

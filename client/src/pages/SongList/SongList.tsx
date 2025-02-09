import { useQuery } from '@apollo/client'
import { FETCH_SONGS } from '../../api/queries/songQueries'
import { ListItem } from './StyledComponents'
import { Song } from '../../types'

function SongList() {
  const { loading, error, data } = useQuery(FETCH_SONGS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return data.songs.map(({ id, title }: Song) => (
    <ListItem key={id}>{title}</ListItem>
  ))
}

export default SongList

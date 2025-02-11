import { useParams } from 'react-router'
import { useQuery } from '@apollo/client'
import LyricsCreate from './components/LyricsCreate'
import LyricsList from './components/LyricsList'
import { PageWrapper, Heading, LinkButton } from './StyledComponents'
import { FETCH_SONG } from '../../api/queries/songQueries'

const SongDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { loading, error, data } = useQuery(FETCH_SONG, {
    variables: { id },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  const { title, lyrics } = data.song

  return (
    <PageWrapper>
      <Heading>Song Details</Heading>
      <h3>{title}</h3>
      {lyrics.content && <LyricsList lyrics={lyrics} />}
      <LyricsCreate songId={id} />

      <LinkButton to="/">Back</LinkButton>
    </PageWrapper>
  )
}

export default SongDetails

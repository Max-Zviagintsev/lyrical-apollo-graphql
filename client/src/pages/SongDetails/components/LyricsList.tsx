import { Lyrics } from '../../../types'
import { LyricsWrapper, Text, LikeIcon } from '../StyledComponents'

interface Props {
  lyrics: Lyrics
}

function LyricsList({ lyrics }: Props) {
  return (
    <LyricsWrapper>
      <Text>{lyrics.content}</Text>
      <div>
        <LikeIcon />
      </div>
    </LyricsWrapper>
  )
}

export default LyricsList

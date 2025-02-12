import { useMutation } from '@apollo/client'
import { LIKE_LYRICS } from '../../../api/mutations/lyricsMutations'
import { Lyrics } from '../../../types'
import {
  List,
  ListItem,
  Text,
  LikesWrapper,
  LikeIcon,
  Likes,
} from '../StyledComponents'

interface Props {
  lyrics: Lyrics[]
}

function LyricsList({ lyrics }: Props) {
  const [likeLyrics] = useMutation(LIKE_LYRICS)

  const handleLike = (id: string) => {
    likeLyrics({ variables: { id } })
  }

  const listItems = lyrics.map(({ id, content, likes }: Lyrics) => (
    <ListItem key={id}>
      <Text>{content}</Text>

      <LikesWrapper>
        <LikeIcon onClick={() => handleLike(id)} />
        <Likes>{likes}</Likes>
      </LikesWrapper>
    </ListItem>
  ))

  return <List>{listItems}</List>
}

export default LyricsList

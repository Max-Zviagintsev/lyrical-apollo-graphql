import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { FormRow, StyledInput, Button } from '../StyledComponents'
import { ADD_LYRICS } from '../../../api/mutations/lyricsMutations'
import { AddLyricsBody } from '../../../types'

interface Props {
  songId?: string
}

function LyricsCreate({ songId }: Props) {
  const { register, handleSubmit } = useForm<AddLyricsBody>()
  const [addLyrics] = useMutation(ADD_LYRICS)

  const onSubmit: SubmitHandler<AddLyricsBody> = (submittedData) => {
    const { content } = submittedData

    addLyrics({
      variables: {
        songId,
        content,
      },
    })
  }

  return (
    <div>
      <h3>Add Lyrics</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <StyledInput type="text" id="content" {...register('content')} />
        </FormRow>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default LyricsCreate

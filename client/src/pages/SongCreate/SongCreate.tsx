import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useMutation } from '@apollo/client'
import { ADD_SONG } from '../../api/mutations/songMutations'
import { FETCH_SONGS } from '../../api/queries/songQueries'
import {
  FormRow,
  Label,
  Button,
  Wrapper,
  Heading,
  LinkButton,
  StyledInput,
} from './StyledComponents'
import { SongCreateBody } from '../../types'

const SongCreate = () => {
  const { register, handleSubmit } = useForm<SongCreateBody>()
  const navigate = useNavigate()

  const [addSong, { loading, error }] = useMutation(ADD_SONG, {
    refetchQueries: [FETCH_SONGS, 'FetchSongs'],
    onCompleted() {
      navigate('/')
    },
  })

  const onSubmit: SubmitHandler<SongCreateBody> = (title) => {
    addSong({ variables: title })
  }

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  return (
    <Wrapper>
      <Heading>Add a new song</Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Label htmlFor="title">Song title</Label>
          <StyledInput type="text" id="title" {...register('title')} />
        </FormRow>

        <Button type="submit">Submit</Button>
      </form>

      <LinkButton to="/">Back</LinkButton>
    </Wrapper>
  )
}

export default SongCreate

import styled from '@emotion/styled'
import { Link } from 'react-router'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  min-width: 400px;
`
export const Heading = styled.h1`
  font-size: 22px;
`
export const LinkButton = styled(Link)`
  margin-top: 15px;
  margin-left: auto;
  color: var(--font-color);
`
export const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`
export const StyledInput = styled.input`
  width: 100%;
`
export const Button = styled.button`
  margin-top: 15px;
  padding: 5px 15px;
  color: var(--font-color);
  border-style: none;
  border-radius: 4px;
  font-size: 16px;
  background-color: var(--button-color);
  box-shadow: 1px 1px 2px var(--button-color);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 1px 1px 2px 2px var(--button-color);
  }
  cursor: pointer;
`
export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  border-bottom: 1px solid var(--font-color);
  padding: 10px 5px;
`
export const Text = styled.div`
  margin-right: 15px;
`
export const LikesWrapper = styled.div`
  display: flex;
`
export const LikeIcon = styled(ThumbUpIcon)`
  color: var(--button-color);
  cursor: pointer;
`
export const Likes = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 14px;
  margin-left: 5px;
`

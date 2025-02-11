import styled from '@emotion/styled'
import { Link } from 'react-router'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  min-width: 400px;
`

export const Heading = styled.h1`
  font-size: 22px;
  margin-bottom: 0;
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
export const DeleteIcon = styled(DeleteForeverOutlinedIcon)`
  color: rgb(92, 11, 11);
  cursor: pointer;
`

export const LinkButton = styled(Link)`
  width: fit-content;
  margin-top: 15px;
  margin-left: auto;
  padding: 5px 15px;
  color: var(--font-color);
  text-decoration: none;
  border-radius: 4px;
  background-color: var(--button-color);
  box-shadow: 1px 1px 2px var(--button-color);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 1px 1px 2px 2px var(--button-color);
  }
`
export const Title = styled(Link)`
  cursor: pointer;
  color: var(--font-color);
  text-decoration: none;
`

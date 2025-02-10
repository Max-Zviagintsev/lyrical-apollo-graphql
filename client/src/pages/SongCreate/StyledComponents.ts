import styled from '@emotion/styled'
import { Link } from 'react-router'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`
export const Heading = styled.h1`
  font-size: 22px;
`
export const FormRow = styled.div`
  margin-bottom: 15px;
`
export const Label = styled.label`
  margin-right: 15px;
`
export const StyledInput = styled.input``
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

export const LinkButton = styled(Link)`
  margin-top: 15px;
  margin-left: auto;
  color: var(--font-color);
`

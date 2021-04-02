import styled from 'styled-components/macro'
import Button from './Button'
import Input from './Input'

export default function Form() {
  return (
    <FormWrapper>
      <SearchButton />
      <Input placeholde="" />
      <ResetButton />
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  display: flex;
  height: 38px;
  border-radius: 50px;
  justify-content: space-between;
  align-items: center;
  background: #eee;
`

const SearchButton = styled(Button)`
  border: none;
  background: hotpink;
  width: 30px;
  height: 30px;
`

const ResetButton = styled(Button)`
  border: none;
  background: hotpink;
  width: 30px;
  height: 30px;
`

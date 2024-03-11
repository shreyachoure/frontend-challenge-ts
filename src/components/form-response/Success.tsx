import Button from '../button'
import Container from '../../layout/container'
import profile from '../../assets/katie.png'
import { useNavigate } from 'react-router-dom'
import * as Styled from './styles'
import { useContext } from 'react'
import { FormContext } from '../../context/FormProvider'

const Success = () => {
  const {
    userData
  } = useContext(FormContext)
  console.log(userData.name)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
  <Container>
  <Styled.FormSuccess>
  <Styled.FormSuccessContent>
  <img src={profile} alt='profilephoto' />
  <Styled.SuccessContent>
   Hi, {userData.name} thank you for submitting the form. We will check and
   get back to you within 2 business days.
  </Styled.SuccessContent>
  </Styled.FormSuccessContent>
  <Button onClick={handleClick} id="form-redirect">Submit Another</Button>
  </Styled.FormSuccess>
  </Container>
  )
}
export default Success

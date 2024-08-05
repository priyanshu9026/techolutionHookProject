import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
`
export const Heading = styled.h1`
  display: flex;
`
export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
`
export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
`
export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const CustomLabel = styled.label`
  display: flex;
`
export const CustomInput = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  height: 40px;
  border-radius: 5px;
`
export const CustomSelect = styled.select`
  display: flex;
`
export const CustomOption = styled.option`
  display: flex;
`
export const GenerateButton = styled.button`
  display: flex;
`

import React from "react"
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react"
import styled from "styled-components"
import getNewValue from "./utils/getNewValue"

const StyledFormControl = styled(FormControl)`
  input[type="time"]::-webkit-inner-spin-button,
  input[type="time"]::-webkit-calendar-picker-indicator {
  }
`

const InputTime = () => {
  return (
    <StyledFormControl
      paddingRight={5}
      paddingLeft={40}
      isDisabled={false}
      isInvalid={false}
      isRequired={true}
      variant="filled"
    >
      <FormLabel>YOPAAA</FormLabel>
      <InputGroup size={"lg"}>
        <Input
          {...props}
          type="text"
          width={"auto"}
          value={value}
          onChange={(e) => setValue(getNewValue(value, e.target.value))}
        />
        <InputRightAddon border={"1px"} borderColor={"gray.100"} children="@" />
      </InputGroup>
      <FormHelperText>Need help ? </FormHelperText>
      <FormErrorMessage>rentrer du texte</FormErrorMessage>
    </StyledFormControl>
  )
}

export default InputTime

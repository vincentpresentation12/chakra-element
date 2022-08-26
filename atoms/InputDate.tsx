import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Stack,
} from "@chakra-ui/react"
import React from "react"
import styled from "styled-components"

// const StyledFormControl = styled(FormControl)`
//   input[type="time"]::-webkit-inner-spin-button,
//   input[type="time"]::-webkit-calendar-picker-indicator {
//     display: none;
//   }
// `

const InputDate = () => {
  return (
    <Box>
      <FormControl
        isInvalid={false}
        paddingRight={5}
        paddingLeft={40}
        isDisabled={false}
        isRequired={true}
        variant="filled"
      >
        <FormLabel>YOPAAA</FormLabel>
        <InputGroup size={"lg"}>
          <Input
            type={"date"}
            width={"auto"}
            defaultValue={"2302-01-01"}
            onChange={() => console.log("Hello")}
            errorBorderColor={"red.500"}
            _placeholder={{ opacity: 1, color: "gray.500" }}
            border={"1px"}
            borderColor={"gray.100"}
          />
        </InputGroup>
        <FormHelperText>Need help ? </FormHelperText>
        <FormErrorMessage>rentrer du texte</FormErrorMessage>
      </FormControl>
    </Box>
  )
}

export default InputDate

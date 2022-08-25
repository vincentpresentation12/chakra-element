import React from "react"
import {
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
} from "@chakra-ui/react"

const InputText = () => {
  return (
    <FormControl
      paddingRight={5}
      paddingLeft={40}
      isDisabled={false}
      isInvalid={false}
      isRequired={true}
      variant="filled"
    >
      <FormLabel>YOPAAA</FormLabel>
      <InputGroup size={"lg"}>
        <InputLeftAddon children="@" />
        <InputLeftElement children="twitter.com" marginLeft={-20} />
        <Input
          placeholder={"Hello"}
          width={"auto"}
          // value={""}
          onChange={() => console.log("Hello")}
          focusBorderColor={"green.500"}
          errorBorderColor={"red.500"}
          _placeholder={{ opacity: 1, color: "gray.500" }}
        />
        <InputRightAddon children="@" />
        <InputRightElement children="twitter.com" />
      </InputGroup>
      <FormHelperText>Need help ? </FormHelperText>
      <FormErrorMessage>rentrer du texte</FormErrorMessage>
    </FormControl>
  )
}

export default InputText

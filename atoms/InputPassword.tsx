import React from "react"
import {
  Button,
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

const InputPassword = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

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
          type={show ? "text" : "password"}
          // value={""}
          onChange={() => console.log("Hello")}
          focusBorderColor={"green.500"}
          errorBorderColor={"red.500"}
          _placeholder={{ opacity: 1, color: "gray.500" }}
        />
        <InputRightAddon
          children={
            <Button onClick={handleClick}>{show ? "Hide" : "Show"}</Button>
          }
        />
        <InputRightElement children="twitter.com" />
      </InputGroup>
      <FormHelperText>Need help ? </FormHelperText>
      <FormErrorMessage>rentrer du texte</FormErrorMessage>
    </FormControl>
  )
}

export default InputPassword

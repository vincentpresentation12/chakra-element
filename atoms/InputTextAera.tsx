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
  Textarea,
} from "@chakra-ui/react"

const InputTextArea = () => {
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
      <Textarea
        size={"lg"}
        placeholder={`Hello area`}
        //value={''}
        onChange={() => console.log("Hello")}
        focusBorderColor={"green.500"}
        errorBorderColor={"red.500"}
        _placeholder={{ opacity: 1, color: "gray.500" }}
        maxLength={200}
        minW={10}
        maxW={500}
        maxH={300}
        minH={10}
        resize={"horizontal"}
        isDisabled={false}
        isInvalid={false}
      />
      <FormHelperText>Need help ? </FormHelperText>
      <FormErrorMessage>rentrer du texte</FormErrorMessage>
    </FormControl>
  )
}

export default InputTextArea

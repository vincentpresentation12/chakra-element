import React from "react"
import {
  Box,
  Flex,
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
  Select,
} from "@chakra-ui/react"
import { hasDisplayNone } from "@chakra-ui/utils"

const InputPhone = () => {
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
        <InputLeftAddon
          children={
            <Flex>
              <Box>
                <Image width={"20px"} src={"banque.png"} />
                <Select border={"none"}>
                  <option>+33</option>
                </Select>
              </Box>
            </Flex>
          }
        />
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

export default InputPhone

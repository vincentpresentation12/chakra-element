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
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react"

const InputNumber = () => {
  return (
    <NumberInput>
      <FormControl
        paddingRight={5}
        paddingLeft={40}
        isDisabled={false}
        isInvalid={false}
        isRequired={true}
        variant="filled"
      >
        <FormLabel>YOPAAA</FormLabel>
        <NumberInput allowMouseWheel>
          <InputGroup size={"lg"}>
            <InputLeftAddon
              children={
                <Button
                // onClick={} fonction décrement
                >
                  -
                </Button>
              }
            />
            <InputLeftElement children="twitter.com" marginLeft={-20} />

            <Input
              placeholder={"number"}
              width={"auto"}
              type={"number"}
              // value={""}
              onChange={() => console.log("Hello")}
              focusBorderColor={"green.500"}
              errorBorderColor={"red.500"}
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />

            <InputRightAddon
              children={
                <Button
                // onClick={} fonction incrémenter
                >
                  +
                </Button>
              }
            />
            <InputRightElement children="twitter.com" />
          </InputGroup>
        </NumberInput>
        <FormHelperText>Need help ? </FormHelperText>
        <FormErrorMessage>rentrer du texte</FormErrorMessage>
      </FormControl>
    </NumberInput>
  )
}

export default InputNumber

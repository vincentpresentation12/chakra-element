import React, { FunctionComponent } from "react"
import {
  FormControl,
  FormControlOptions,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HTMLChakraProps,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  ThemingProps,
  chakra,
} from "@chakra-ui/react"
import styled from "styled-components"

interface IProps {}

type Omitted = "disabled" | "required" | "readOnly" | "size"

interface InputOptions {
  focusBorderColor?: string
  errorBorderColor?: string
  htmlSize?: number
  error?: string
  hint?: string
}

export interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    ThemingProps<"Input">,
    FormControlOptions {}

const StyledFormControl = styled(FormControl)`
  input[type="time"]::-webkit-inner-spin-button,
  input[type="time"]::-webkit-calendar-picker-indicator,
  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`

const InputDateTime: FunctionComponent<InputProps> = (props) => {
  return (
    <StyledFormControl
      paddingRight={5}
      paddingLeft={40}
      isDisabled={false}
      isInvalid={false}
      isRequired={true}
      variant="filled"
      //size={"lg"}
    >
      <FormLabel>YOPAAA</FormLabel>
      <InputGroup>
        <Input
          type={"date"}
          width={"auto"}
          defaultValue={"2022-05-21"}
          onChange={() => console.log(value)}
          focusBorderColor={props.focusBorderColor}
          errorBorderColor={props.errorBorderColor}
          _placeholder={{ opacity: 1, color: "gray.500" }}
          borderColor={"gray.100"}
          borderRight={0}
        />
        <InputRightAddon
          border={"1px"}
          borderColor={"gray.100"}
          children="@"
          borderRightRadius={0}
          borderRight={"0px"}
        />
        <Input
          focusBorderColor={"green.500"}
          width={"auto"}
          type={"time"}
          step={900}
          defaultValue={"20:00"}
          colorScheme={"dark"}
          borderRight={0}
          borderLeftRadius={0}
        />
        <InputRightAddon border={"1px"} borderColor={"gray.100"} children="@" />
      </InputGroup>
      <FormHelperText>Need help ? </FormHelperText>
      <FormErrorMessage>rentrer du texte</FormErrorMessage>
    </StyledFormControl>
  )
}

export default InputDateTime

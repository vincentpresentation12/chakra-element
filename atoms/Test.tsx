import type { FC } from "react"
import React, {
  useState,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type ReactElement,
} from "react"
import getNewValue from "./utils/getNewValue"
import {
  Box,
  FormControl,
  FormControlOptions,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HTMLChakraProps,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  ThemingProps,
} from "@chakra-ui/react"
import SelectHour from "./SelectHour"
import SelectMinute from "./SelectMinute"

type Omitted = "disabled" | "required" | "readOnly" | "size"

interface InputOptions {
  focusBorderColor?: string
  errorBorderColor?: string
  label?: string
  hint?: string
  onTimeChange: (e: string) => void
  error?: string
  formPadding?: string
  formMargin?: string
  initialTime: string
}

export interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    ThemingProps<"Input">,
    FormControlOptions {}

const TimeInput: FC<InputProps> = ({ initialTime, onChange, ...props }) => {
  const [value, setValue] = useState(initialTime)

  return (
    <Box>
      <FormControl
        paddingRight={5}
        paddingLeft={40}
        isDisabled={false}
        isInvalid={false}
        isRequired={true}
        variant="filled"
      >
        <FormLabel>YOPAAA</FormLabel>
        <InputGroup size={"sm"}>
          <Input
            {...props}
            type="text"
            value={value}
            onChange={(e) => setValue(getNewValue(value, e.target.value))}
          />
          <InputRightElement>
            <Image
              src="https://img.icons8.com/color/48/000000/clock.png"
              width={"80%"}
              onClick={() => setValue(getNewValue(value, "00:00"))}
            />
          </InputRightElement>
        </InputGroup>
        <FormHelperText>{props.hint}</FormHelperText>
        <FormErrorMessage>{props.error}</FormErrorMessage>
      </FormControl>

      <SelectHour />
      <SelectMinute />
    </Box>
  )
}

export default TimeInput

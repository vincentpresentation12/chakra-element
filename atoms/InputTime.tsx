import React, { useState } from "react"
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
} from "@chakra-ui/react"
import { AisTime } from "@akkurateio/icons"

const hourArray = Array.from({ length: 24 }, (v, k) => {
  return k.toString().padStart(2, "0")
})
const minuteArray = Array.from({ length: 60 }, (v, k) => {
  return k.toString().padStart(2, "0")
})

const InputTime = () => {
  const [hourValue, setHourValue] = useState("00")
  const [minuteValue, setMinuteValue] = useState("00")
  const [time, setTime] = useState("00:00")

  const handleHourChange = (e: any) => {
    setHourValue(e.target.value)
    setTime(`${e.target.value}:${minuteValue}`)
  }
  const handleMinuteChange = (e: any) => {
    setMinuteValue(e.target.value)
    setTime(`${hourValue}:${e.target.value}`)
  }

  // This will be a prop in the future
  const minuteStep = null

  const hourOptions = hourArray.filter((hour, index) => {
    return index % 1 === 0
  })

  const minuteOptions = minuteArray.filter((hour, index) => {
    if (minuteStep === null || minuteStep === 0) {
      return index % 1 === 0
    } else {
      return index % minuteStep === 0
    }
  })

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
        <InputGroup size={"lg"} position={"relative"}>
          <Input
            type={"time"}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            step={minuteStep ? minuteStep * 60 : 60}
            //readOnly={true}
          />
          <Flex
            position={"absolute"}
            top={0}
            right={0}
            bottom={0}
            w={10}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <Popover placement={"bottom-end"}>
              <PopoverTrigger>
                <Button
                  variant={"unstyled"}
                  color={"red.500"}
                  _hover={{ color: "red.700" }}
                  _active={{ color: "red.700" }}
                >
                  <AisTime boxSize={6} />
                </Button>
              </PopoverTrigger>
              <PopoverContent overflow={"hidden"} w={44} h={72}>
                <PopoverBody overflow={"hidden"}>
                  <SimpleGrid
                    columns={2}
                    spacing={4}
                    h={"full"}
                    overflow={"hidden"}
                  >
                    <Box pr={3} h={"full"} overflowY={"auto"}>
                      <SimpleGrid spacingY={0.5}>
                        {hourOptions.map((h) => (
                          <Button
                            size={"xs"}
                            value={h}
                            bg={h === hourValue ? "purple.500" : "blue.100"}
                            color={h === hourValue ? "white" : "blue.500"}
                            key={h}
                            onClick={handleHourChange}
                          >
                            {h}
                          </Button>
                        ))}
                      </SimpleGrid>
                    </Box>
                    <Box pr={3} h={"full"} overflowY={"auto"}>
                      <SimpleGrid spacingY={0.5}>
                        {minuteOptions.map((m) => (
                          <Button
                            size={"xs"}
                            bg={m === minuteValue ? "blue.300" : "blue.100"}
                            color={m === minuteValue ? "white" : ""}
                            key={m}
                            value={m}
                            onClick={handleMinuteChange}
                          >
                            {m}
                          </Button>
                        ))}
                      </SimpleGrid>
                    </Box>
                  </SimpleGrid>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </InputGroup>

        <FormHelperText>Need help ? </FormHelperText>
        <FormErrorMessage>rentrer du texte</FormErrorMessage>
      </FormControl>
    </Box>
  )
}

export default InputTime

import React from "react"
import { background, Box, Flex, Image, Select, Text } from "@chakra-ui/react"

const Checkbox = () => {
  const image = {
    backgroundImage: "url(banque.png)",
  }

  return (
    <Box>
      {/*<Image src={"banque.png"} width={10} />*/}
      <Select p={4}>
        <option value={"Hello"}>
          <Flex>
            <Box bg={"red.200"} width={"20px"} height={"20px"} />
          </Flex>
        </option>
      </Select>
    </Box>
  )
}

export default Checkbox

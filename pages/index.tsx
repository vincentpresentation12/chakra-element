import type { NextPage } from "next"
import InputText from "../atoms/InputText"
import InputNumber from "../atoms/InputNumber"
import { Box, Container } from "@chakra-ui/react"
import React from "react"
import InputDate from "../atoms/InputDate"
import InputFile from "../atoms/InputFile"
import InputTextArea from "../atoms/InputTextAera"
import InputPassword from "../atoms/InputPassword"
import InputDateTime from "../atoms/InputDateTime"
import InputTime from "../atoms/InputTime"
import Checkbox from "../atoms/Checkbox"
import InputPhone from "../atoms/InputPhone"
import Test from "../atoms/Test"
import SelectHour from "../atoms/SelectHour"

const Home: NextPage = () => {
  return (
    <Container size={"3xl"} pt={10}>
      <h1>Hello Next.js</h1>
      {/*<InputText />*/}
      {/*<InputNumber />*/}
      {/*<InputDate />*/}
      {/*<InputDateTime />*/}
      <InputTime />
      {/*<Test initialTime={"18:00"} />*/}
      {/*<InputFile />*/}
      {/*<Checkbox />*/}
      {/*<InputTextArea />*/}
      {/*<InputPassword />*/}
      {/*<InputPhone />*/}
    </Container>
  )
}

export default Home

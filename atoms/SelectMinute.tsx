import React from "react"
import Select from "react-select/creatable"
import { Box } from "@chakra-ui/react"

const minute = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
]

// export const Select = {
//   parts: ["field", "icon"],
//   sizes: {
//     md: {
//       field: {
//         h: "5rem",
//       },
//     },
//   },
// }

//select with limited scrolable 10 options

// const SelectMinute = () => {
//   return (
//     <Select size={"sm"}>
//       {minute.map((minute, index) => {
//         return (
//           <option key={index} value={minute}>
//             {minute}
//           </option>
//         )
//       }).slice(0, 10)}
//     </Select>
//   )
// }

const SelectMinute = () => {
  // div with scrollable options

  const options = minute.map((minute, index) => {
    return {
      value: minute,
      label: minute,
    }
  })

  return (
    <Box width={"100px"}>
      <Select options={options} placeholder={"00"} width={"20px"}></Select>
    </Box>
  )
}
export default SelectMinute

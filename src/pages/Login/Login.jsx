
import { Box } from '@mui/material'
import React from 'react'
import InputText from '../../common/InputText/InputText'

import MyButton from '../../common/Button/MyButton'
export default function Login() {
  return (
    <Box>
      <Box>
        <InputText />
        <InputText />

      </Box>
      <Box>
        <MyButton name={"Login"} width={'50%'} background={"#000080"} hoverColor={"#008080"}/>
      </Box>
    </Box>
  )
}
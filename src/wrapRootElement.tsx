import React, { ReactElement } from "react"
import { ThemeProvider } from "styled-components"

import theme from "./theme"

interface RootElementProps {
  element: ReactElement[] | ReactElement
}

const WrapRootElement: React.FC<RootElementProps> = ({
  element,
}: RootElementProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </>
  )
}

export default WrapRootElement

import React, { ReactElement } from "react"

import Layout from "./components/Layout"

interface PageElementProps {
  element: ReactElement[] | ReactElement
}

const WrapPageElement: React.FC<PageElementProps> = ({
  element,
  ...props
}: PageElementProps) => {
  return (
    <>
      <Layout {...props}>{element}</Layout>
    </>
  )
}

export default WrapPageElement

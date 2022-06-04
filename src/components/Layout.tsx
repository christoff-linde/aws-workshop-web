import React, { ReactNode } from "react"
import Navigation from "./Navigation"

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout

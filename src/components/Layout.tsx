import React, { ReactNode } from "react"
import Navigation from "./Navigation"

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <div className="container mx-auto px-4">
        <Navigation />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout

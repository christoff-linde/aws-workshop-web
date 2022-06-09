import { Menu, MenuItem } from "@aws-amplify/ui-react"
import { Link } from "gatsby"
import React from "react"

const Pages = [
  { name: "Home", path: "/" },
  { name: "Facial Recognition", path: "/facial-recognition" },
  { name: "Chat", path: "/chat" },
]

const Navigation: React.FC = () => {
  return (
    <>
      <nav className="py-4">
        <div className="container mx-auto flex-1 flex items-center sm:items-stretch sm:justify-start">
          <Menu>
            {Pages.map(({ name, path }, index) => (
              <MenuItem key={index}>
                <Link to={path}>{name}</Link>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </nav>
    </>
  )
}

export default Navigation

import { Link } from "gatsby"
import React from "react"

const Pages = [
  { name: "Home", path: "/" },
  { name: "404", path: "/404" },
]

const Navigation: React.FC = () => {
  return (
    <>
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex-1 flex items-center sm:items-stretch sm:justify-start">
          <div className="flex space-x-4">
            {Pages.map(({ name, path }, index) => (
              <Link
                className="bg-gray-900 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-gray-700 "
                to={path}
                key={index}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation

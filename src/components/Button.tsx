import React from "react"

type Props = {
  className?: string
  icon?: React.ReactElement | null
  isSecondary?: boolean
  title: string
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  className,
  icon = null,
  isSecondary = false,
  title,
  onClick,
}: Props) => {
  return (
    <>
      {isSecondary ? (
        <button
          className={`${className} transition ease-in-out border-2 border-blue-500 hover:bg-blue-100 font-medium py-2 px-4 rounded max-w-max`}
          onClick={onClick}
        >
          <div className="flex">
            <div className="flex items-center">{icon}</div>
            <div className="ml-2">{title}</div>
          </div>
        </button>
      ) : (
        <button
          className={`${className} bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded`}
          onClick={onClick}
        >
          <div className="flex">
            <div className="flex items-center">{icon}</div>
            <div className="ml-2">{title}</div>
          </div>
        </button>
      )}
    </>
  )
}

export default Button

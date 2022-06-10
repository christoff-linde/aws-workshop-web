import React from "react"

const IndexPage = () => {
  return (
    <>
      <h1 className="font-sans font-extrabold text-5xl">AWS Mini Workshop</h1>
      <div className="w-1/2 mt-4">
        <p>
          This is a simple <strong>GatsbyJS</strong> project that uses{" "}
          <strong>AWS Rekognition</strong> to detect celebrities in a uploaded
          image, and <strong>Amazon Lex</strong> for a ChatBot.
        </p>
      </div>
    </>
  )
}

export default IndexPage

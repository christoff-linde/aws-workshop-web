import React from "react"
import { FileUploadForm } from "../components/FileUpload"

const FacialRecognitionPage = () => {
  return (
    <>
      <h1 className="font-sans font-extrabold text-3xl lg:text-5xl">
        Facial Recognition
      </h1>
      <FileUploadForm />
    </>
  )
}

export default FacialRecognitionPage

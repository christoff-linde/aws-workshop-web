import { Badge, Flex, Loader, View } from "@aws-amplify/ui-react"
import { Predictions } from "aws-amplify"
import React, { useEffect, useState } from "react"
import Alert from "../Alert"
import Button from "../Button"

const FileUploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>(null)
  const [labels, setLabels] = useState<string[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  const identifyFaces = async (file: File | undefined) => {
    if (file && data == null) {
      setLoading(true)
      const entities = await Predictions.identify({
        entities: {
          source: {
            file,
          },
          celebrityDetection: true,
        },
      })
        .then(({ entities }) => {
          setData(entities)
          setLoading(false)
        })
        .catch(err => {
          setLoading(false)
          setError(err.message)
        })

      return entities
    }
  }

  useEffect(() => {
    if (file) identifyFaces(file)
  }, [file])

  useEffect(() => {
    generateLabels()
  }, [data])

  const generateLabels = () => {
    if (data) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore-next-line
      setLabels(data.map(({ metadata }): any => metadata.name))
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      setFile(file)
    }
  }

  return (
    <>
      {error !== null ? (
        <Alert text={"This is some error"} onClick={() => setError(null)} />
      ) : null}
      {loading ? (
        <>
          <div className="flex">
            <Loader
              size="large"
              emptyColor={"#3B82F6"}
              filledColor={"#18181B"}
            />
            <div>...identifying </div>
          </div>
        </>
      ) : null}
      {!data ? (
        <>
          <h5 className="text-fs-md">
            Upload an image containing one or more celebrities
          </h5>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md w-full md:w-1/3">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-6 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleChange}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="mt-4 font-bold text-xl lg:text-2xl">
              Uploaded Image
            </h4>
            {file ? (
              <img
                className="mt-1 w-auto"
                src={URL.createObjectURL(file) || undefined}
              />
            ) : null}
          </div>
          <div>
            <h4 className="mt-4 font-bold text-xl lg:text-2xl">
              Celebrities Identified
            </h4>
            <Flex
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              alignContent="space-between"
              wrap="wrap"
              gap="1rem"
            >
              {labels?.map((label, index) => (
                <View key={index}>
                  <Badge>{label}</Badge>
                </View>
              ))}
            </Flex>
          </div>
          <Button
            className="mt-4"
            isSecondary={true}
            title={"Upload new image"}
            onClick={() => {
              setFile(null)
              setData(null)
            }}
          />
        </div>
      )}
    </>
  )
}

export default FileUploadForm

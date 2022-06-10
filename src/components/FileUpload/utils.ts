// export const useIdentifyFaces = async () => {
//   const [loading, setLoading] = useState(false)
//   const [data, setData] = useState<any>(undefined)

//   const identifyFaces = async (file: File | undefined) => {
//     if (file) {
//       setLoading(true)
//       const entities = await Predictions.identify({
//         entities: {
//           source: {
//             file,
//           },
//           celebrityDetection: true, // boolean. It will only show detected celebrities
//         },
//       })
//         .then(({ entities }) => {
//           entities.forEach(({ boundingBox, landmarks, metadata }) => {
//             const { name, urls } = metadata // celebrity info

//             console.log(boundingBox, landmarks, metadata)
//           })
//           setData(entities)
//           setLoading(false)
//         })
//         .catch(err => console.log({ err }))

//       return entities
//     }
//   }
//   return { identifyFaces, loading, data }
// }

// export const useIdentifyFaces = (): ((event: any) => Promise<void>) => {
//   const [data, setData] = useState<any>(undefined)
//   const [isLoading, setIsLoading] = useState(false)
//   const [isError, setIsError] = useState(false)

//   useEffect(() => {
//     const identifyFaces = async (event: any) => {
//       const uploadedFiles = (event?.target as HTMLInputElement)?.files
//       const file = uploadedFiles?.[0]

//       if (file) {
//         setIsLoading(true)
//         setIsError(false)
//         await Predictions.identify({
//           entities: {
//             source: {
//               file,
//             },
//             celebrityDetection: true, // boolean. It will only show detected celebrities
//           },
//         })
//           .then(({ entities }) => {
//             setData(entities)
//             setIsLoading(false)
//           })
//           .catch(err => {
//             setIsError(true)
//             setIsLoading(false)
//             console.log({ err })
//           })
//       }
//     }

//     identifyFaces(event)
//   }, [event])

//   return { data, isLoading, isError }
// }

// const useHackerNewsApi = () => {
//   const [data, setData] = useState({ hits: [] })
//   const [url, setUrl] = useState(
//     "https://hn.algolia.com/api/v1/search?query=redux"
//   )
//   const [isLoading, setIsLoading] = useState(false)
//   const [isError, setIsError] = useState(false)

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsError(false)
//       setIsLoading(true)

//       try {
//         const result = await axios(url)

//         setData(result.data)
//       } catch (error) {
//         setIsError(true)
//       }

//       setIsLoading(false)
//     }

//     fetchData()
//   }, [url])

//   return [{ data, isLoading, isError }, setUrl]
// }

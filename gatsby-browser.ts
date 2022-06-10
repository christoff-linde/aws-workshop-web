import "./src/styles/global.css"

import wrapRootElement from "./src/wrapRootElement"
import wrapPageElement from "./src/wrapPageElement"

import { Auth, Amplify } from "aws-amplify"
import {
  Predictions,
  AmazonAIPredictionsProvider,
} from "@aws-amplify/predictions"
import awsconfig from "./src/aws-exports"

Auth.configure(awsconfig)
Amplify.configure(awsconfig)
Amplify.configure({
  Storage: {
    AWSS3: {
      bucket: "awsworkshopweb46b3522cb2d944cf8eb11519b8f295a3121114-dev",
      region: "eu-west-1",
    },
  },
})
Predictions.addPluggable(new AmazonAIPredictionsProvider())

export { wrapRootElement, wrapPageElement }

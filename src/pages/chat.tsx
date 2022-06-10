import React from "react"
import { AmplifyChatbot } from "@aws-amplify/ui-react/legacy"

const Chat = () => (
  <AmplifyChatbot
    botName="BookTrip_dev"
    botTitle="Book a Trip"
    welcomeMessage="Hello, how can I help you?"
  />
)

export default Chat

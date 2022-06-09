import React from "react"
import { AmplifyChatbot } from "@aws-amplify/ui-react/legacy"

const Chat = () => (
  <AmplifyChatbot
    botName="yourBotName"
    botTitle="My ChatBot"
    welcomeMessage="Hello, how can I help you?"
  />
)

export default Chat

import React from "react"
import { AmplifyChatbot } from "@aws-amplify/ui-react/legacy"

const Chat = () => (
  <AmplifyChatbot
    botName="ScheduleAppointment_dev"
    botTitle="Schedule Appointment"
    welcomeMessage="Hello, how can I help you?"
  />
)

export default Chat

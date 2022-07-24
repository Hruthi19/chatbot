import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import {Link} from "react-router-dom";
import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "FinEd",
  initialMessages: [
    createChatBotMessage(`Hello. Welcome to FinEd. How may I help you?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "View Courses",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "View Courses",
            answer:
              <Link to="#">View Courses</Link>,
            id: 1,
          },
          
        ],
      },
    },
    {
      widgetName: "Check Progress",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Check Your progress here",
            answer:
              <Link to="#">Check Progress</Link>,
            id: 1,
          },
          
        ],
      },
    },
    {
      widgetName: "Other Questions",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Any Other Questions?",
            answer:
            <textarea>Contact Us</textarea>,
            id: 1,
          },
          
        ],
      },
    },
  ],
};

export default config;

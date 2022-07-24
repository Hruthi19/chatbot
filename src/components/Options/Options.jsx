import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "View Courses",
      handler: props.actionProvider.ViewCourses,
      id: 1,
    },
    { text: "Check Progress", handler: () => {}, id: 2 },
    { text: "Other Questions?", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;

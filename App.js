import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement(
    "h1",
    { className: "greeting" },
    "Namaste React"
  );

  const heading2 = React.createElement("h1", {className: "greeting"},"Heading 2");

  const container = React.createElement("div", {className: "greetings"},[heading, heading2])
  
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(container); 
import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { className: "greeting", key:"h1" },
//   "Namaste React"
// );

const Title = <h1>Namaste React</h1>


const HeaderComponent = () => {
  return (
    <>
    {Title}
    <div>Hello everyone have  afreate future ahead</div>
    </>
  )
}

// const container = React.createElement("div", { className: "greetings" }, [
//   heading,
//   heading2,
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);

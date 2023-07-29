import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { className: "greeting", key:"h1" },
//   "Namaste React"
// );

const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7"
    />
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restrauant = [
  {
      data: {
        id:"1",
        name: "Burger King",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
        cusines: ["Burger", "American"],
        rating: "4.2",
      },
    },
  {
    data: {
      id:"2",
      name: "Bobby King",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cusines: ["Burger", "American"],
      rating: "4.2",
    },
  },
  {
    data: {
      id:"3",
      name: "Bobby King",
      image:
       "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/od1sechvzj5pz4nwfimm",
      cusines: ["Burger", "American"],
      rating: "4.2",
    },
  },
  {
    data: {
      id:"4",
      name: "Bobby King",
      image:
       "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/08eee882fda81b68e5c36e3a5d89d8c0",
      cusines: ["Burger", "American"],
      rating: "4.2",
    },
  },
];

const RestrauantCard = ({name, image, cusines, rating}) => {
  return (
    <div className="card">
      <img src={image} />
      <h2>{name}</h2>
      <h3>{cusines.join(", ")}</h3>
      <h4>{rating}stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restraurent-list">
      {restrauant.map((res) => {
        return <RestrauantCard {...res.data} key={res.data.id}/>;
      })}
    </div>
  );
};
const Footer = () => {
  return <h2>Footer</h2>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// const container = React.createElement("div", { className: "greetings" }, [
//   heading,
//   heading2,
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

import { RestrauantCard } from "./RestaurantCard";
import { restrauant } from "../src/config";
import { useState } from "react";

const Body = () => {
  const [serachInput, setSearchInput] = useState("KFC"); //to create state variable
  const [restautantList, setRestaurantList] = useState(restrauant);

  const filteredData = (serachInput, restautantList) => {
    const updatedData = restautantList.filter((res) =>
      res.data.name.includes(serachInput)
    );
    return updatedData;
  };
  return (
    <>
      <div className="serach-container">
        <input
          type="text"
          className="serach-input"
          placeholder="serach..."
          value={serachInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filteredData(serachInput, restautantList);
            setRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraurent-list">
        {restautantList.map((res) => {
          return <RestrauantCard {...res.data} key={res.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;

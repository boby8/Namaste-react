import { RestrauantCard } from "./RestaurantCard";
import { restrauant } from "../src/config";
import { useState,useEffect } from "react";

const Body = () => {
  const [serachInput, setSearchInput] = useState("KFC"); //to create state variable
  const [restautantList, setRestaurantList] = useState(restrauant);

  const filteredData = (serachInput, restautantList) => {
    const updatedData = restautantList.filter((res) =>
      res.data.name.includes(serachInput)
    );
    return updatedData;
  };
  // empty depandency array => once after render
  // dep array [searchtext]=? once after render + 
  useEffect(()=>{
    //API call
    getRestaurant()
  },[]);

  async function getRestaurant(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93519229&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const json =  await data.json()
    console.log(json?.data);
     setRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
  }

  console.log("render")
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

import { RestrauantCard } from "./RestaurantCard";
import { restrauant } from "../src/config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [serachInput, setSearchInput] = useState("KFC"); //to create state variable
  const [restautantList, setRestaurantList] = useState([]);
  const [filteredrestautantList, setfilteredRestaurantList] = useState([]);
  const [images, setImages] = useState([]);

  const filteredData = (serachInput, restautantList) => {
    const updatedData = restautantList.filter((res) =>
      res?.name?.toLowerCase().includes(serachInput.toLowerCase())
    );
    return updatedData;
  };
  // empty depandency array => once after render
  // dep array [searchtext]=? once after render +
  useEffect(() => {
    //API call
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93519229&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    json?.data?.cards.map((res, index) => {
      res?.card.card?.imageGridCards?.info.map((res) => {
        const newObj = {
          key: res?.imageId,
        };
        setImages((prevState) => [...prevState, newObj]);
      });
      res?.card.card?.gridElements?.infoWithStyle?.restaurants &&
        res?.card.card?.gridElements?.infoWithStyle?.restaurants.map((data) => {
          setRestaurantList((prevState) => [...prevState, data?.info]);
          setfilteredRestaurantList((prevState) => [...prevState, data?.info]);
        });
    });
  }
  console.log("render");
  // if(filteredrestautantList.length === 0 ) return <h1>No Data Found!!</h1>
  return restautantList.length === 0 ? (
    <Shimmer />
  ) : (
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
            setfilteredRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraurent-list">
        {filteredrestautantList.length === 0 ? <h1>No Data Found!!</h1>: filteredrestautantList.map((res, index) => {
          return <Link to={"restaurent/" + res.id}><RestrauantCard {...res} key={index} image={images} /></Link> 
        })}
      </div>
    </>
  );
};

export default Body;

import { useEffect } from "react";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
    const {id} = useParams();
    useEffect(()=>{
        fetchData()
    },[])
    async function fetchData() {
        try {
          const response = await fetch(
            'https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=229'
          );
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      }
  return (
    <div>
      <h1>Resraurent id : {id}</h1>
      <h2>Namaste</h2>
    </div>
  );
};

export default RestaurantMenu;

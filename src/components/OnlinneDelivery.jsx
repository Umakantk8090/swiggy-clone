import React, { useEffect, useState } from "react";
import Card from "./Card";

const OnlinneDelivery = () => {
  const [data, setData] = useState([]);
  const fetchTopRestaurant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setData(apiData);

    
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto mb-[100px]">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px]">Restaurants with online food delivery in Lucknow</div>
        </div>
        <div className='grid grid-cols-4 gap-3'>
        {
            data.map(
                (d,i)=>{
                    return <Card {...d}/>

                }
            )
        }

        </div>
      </div>
    
  );
};

export default OnlinneDelivery;

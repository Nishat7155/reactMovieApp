import React, { useState } from "react";
import { homeData } from "../../dummyData";
export const Homes = () => {
   const[items, setItems] = useState(homeData)
  return (
    <>
      Homes
    </>
  )
}
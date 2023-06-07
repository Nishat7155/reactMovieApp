import React, {useState} from "react";
import { Homes } from "../components/homes/Homes";
import { latest, recommended, upcome, series, recSeries } from "../dummyData";
import Upcomming from "../components/upcoming/Upcomming";

import Trending from "../components/trending/Trending";
import Series from "../components/series/Series";
import RecSeries from "../components/recseries/RecSeries";





export const HomePages = () => {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)
  const [seriesData, setSeriesData] = useState(series);
  const [recSeriesData, setRecSeriesData] = useState(recSeries);
  
  
  
  
  
  return (
    <>
     <Homes />
      <Upcomming items={items} title='Upcomming Movies' />
      <Upcomming items={item} title='Latest Movies' />
      <Trending />
      <Upcomming items={rec} title='Recommended Movies' />
      <Series items={seriesData} title="Latest Series" />
      <RecSeries items={recSeriesData} title="Recommended Series" />
      
      
       
      
     
    </>
  )
}
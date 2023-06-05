import React, { useState, useEffect } from "react"
import "./style.css"
import { useParams } from "react-router-dom"
import { homeData, recommended } from "../../dummyData"
import Upcomming from "../upcoming/Upcomming"

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])
  const [rec, setRec] = useState(recommended)

  return (
    <>
      {item ? (
        <>
          <section className='singlePage'>
            <div className='singleHeading'>
              <h1>{item.name} </h1> <span> | {item.time} | </span> <span> HD </span>
            </div>
            <div className='container'>
              <video src={item.video} controls></video>
              <div className='para'>
                <h3>Date : {item.date}</h3>
                <p>{item.desc}</p>
                <p>Videos have become an integral part of our daily lives, capturing our attention and transporting us into a world of visual storytelling. With just a click, we can immerse ourselves in a vast array of videos, ranging from captivating documentaries to thrilling action sequences and heartwarming tales. Each video has the power to evoke emotions, educate, entertain, or simply provide a momentary escape from reality</p>
                <p>Videos have become an integral part of our daily lives, capturing our attention and transporting us into a world of visual storytelling. With just a click, we can immerse ourselves in a vast array of videos, ranging from captivating documentaries to thrilling action sequences and heartwarming tales. Each video has the power to evoke emotions, educate, entertain, or simply provide a momentary escape from reality</p>
                <p>Videos have become an integral part of our daily lives, capturing our attention and transporting us into a world of visual storytelling. With just a click, we can immerse ourselves in a vast array of videos, ranging from captivating documentaries to thrilling action sequences and heartwarming tales. Each video has the power to evoke emotions, educate, entertain, or simply provide a momentary escape from reality</p>
                <p>Videos have become an integral part of our daily lives, capturing our attention and transporting us into a world of visual storytelling. With just a click, we can immerse ourselves in a vast array of videos, ranging from captivating documentaries to thrilling action sequences and heartwarming tales. Each video has the power to evoke emotions, educate, entertain, or simply provide a momentary escape from reality</p>
                
              </div>
             <div className='social'>
               <h3>Share:</h3>
                  <img src="https://img.icons8.com/color/48/ffff00/facebook-new.png" alt="Yellow Facebook Icon" />
                  <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png' />
                  <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png' />
             </div>

            </div>
          </section>
          <Upcomming items={rec} title='Recommended Movies' />
        </>
      ) : (
        "no"
      )}
    </>
  )
}

export default SinglePage;
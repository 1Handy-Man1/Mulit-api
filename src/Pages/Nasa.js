import React, { useState, useEffect, useContext } from 'react'
import data from '../Components/Look'
import '../style/main.css'



const url = 'https://api.nasa.gov/planetary/apod?api_key=44cDozr3HF7RdLbJ7xUvI4DxWsrg5gRnJVwTalUi'; 

const SpaceContext = React.createContext();

const Nasa = () => {
    const [readMore, setReadMore] = useState(data)

    return (
        <SpaceContext.Provider value={{ readMore }}>
            <List />
        </SpaceContext.Provider>
    )
}

const List = () => {
    const mainData = useContext(SpaceContext);
    console.log(mainData);
    return(
        <>
        {mainData.readMore.map((readMore) => {
            return <NasaInfo {...readMore} />
        })}
        </>
    )
}

const NasaInfo = ({ date, explanation, hdurl, title, service_version, copyright }) => {

    const { readMore, setReadMore } = useContext(SpaceContext);

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    setTimeout(() => setIsLoading(false), 5000);




    if (isLoading) {
        return(
            <div className='bodyEarth'>
                <div className='planet planetEarth'>
                    <h2>Loading ...</h2>
                    <div className='planetContainer'>
                        <div className='loader'><span></span></div>
                        <div className='earth'></div>
                    </div>
                </div>
            </div>
        )
    }

    if (isError) {
        return(
            <div className='bodyEarth'>
                <div className='planet planetMars'>
                    <h2>ERROR:WHERE ARE WE!?!?!?!?</h2>
                    <div className='planetContainer'>
                        <div className='loader'><span></span></div>
                        <div className='mars'></div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <article key={service_version} className='InfoRow'>
            <div className='imgContainer'>
                <img src={hdurl} alt={copyright} className='NasaImg'></img>
            </div>
            
            <div className='NasaInfo'>
                <div className='row'>
                    <p>{title}</p>
                    <p>{date}</p>
                </div>
                <hr></hr>
                <p>
                    {explanation}
                    {/* {readMore ? explanation : explanation.slice(0, 200)}
                    <button onClick={() => setReadMore(!readMore)}>{readMore ? `Read less` : `...Read more`}</button> */}
                </p>
            </div>
        </article>
    )

}

export default Nasa;

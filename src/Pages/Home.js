import React, { useState } from 'react'
import '../style/main.css';


const url = 'https://api.nasa.gov/planetary/apod?api_key=44cDozr3HF7RdLbJ7xUvI4DxWsrg5gRnJVwTalUi'; 

const Home = () => {

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

    return (
        <div>
            <h1>Information Page</h1>
            <p className='reason'>
                This website is for the user `you` to know something that you didn't ask nor care but will learn something 
                interesting when browsing. Both page for Nasa has something always interesting and The animal page is were you will learn an animal
                . Either you know it or not is not the important thing, important thing is that you learn something off of this page.
            </p>
        </div>
    )
}

export default Home;

import React, { useState } from 'react'

const Api = () => {

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
            <p>No Animals Information</p>
            <p>{`{in progress}`}</p>
        </div>
    )
}

export default Api;

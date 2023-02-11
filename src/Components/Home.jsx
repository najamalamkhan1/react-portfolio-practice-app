import React from 'react'
import About from './About'
import Goal from './Goal'
import Portfolio from './Portfolio'
import './styleSheets/Home.css'

function Home() {
    return (
        <>
            <div className='home_div'>
                <img src={'https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg'} className={'image-1'} />
                <h1 className="display-3 text-light">Let's Begin</h1>
                <hr className={'w-50 h-0 m-auto text-light'} />
                <h6 className="display-6 text-light">
                    Website Developer-Website Designer-Software Engineer
                </h6>
            </div>
            <Goal />
            <About />
            <Portfolio />
        </>

    )
}

export default Home
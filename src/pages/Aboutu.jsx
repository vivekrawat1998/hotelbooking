import React from 'react'
import Abouutus from '../components/Aboutus'
import Profile from '../ui/Profile'
import Videocontent from '../components/Videocontent'
import Testinomonials from '../components/Testinomonials'
import Gallery from '../components/Gallery'

const AboutusMain = () => {
    return (
        <div>
            <Profile title={"Aboutus"} height='h-[50vh]' />


            <div>
                <Abouutus />
                <Videocontent />
                <Testinomonials />
                <Gallery />
            </div>
        </div>
    )
}

export default AboutusMain
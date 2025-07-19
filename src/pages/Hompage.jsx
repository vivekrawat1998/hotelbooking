import React from 'react'
import Hero from '../components/Hero'
import Categorydetailcard from '../components/Categorydetailcard'
import Findhotel from '../components/Findhotel'
import Videocontent from '../components/Videocontent'
import Facilities from '../components/Facilities'
import Faq from '../components/Faq'
import BookingRoom from '../components/Bookroom'
import { Paragraph, Title } from '../ui/StyledComponent'
import Testinomonials from '../components/Testinomonials'
import Gallery from '../components/Gallery'
import Mantra from '../components/Mantra'

const Hompage = () => {
  return (
    <div>
      <Hero />
      <Mantra />
      <Categorydetailcard />
      <Findhotel />
      <div className='md:block hidden'>
        <Videocontent />
      </div>
      <Facilities />
      <Faq />
      <div className='bg-[#2A2825] px-3 pt-20 grid place-items-center  w-full h-screen'>
        <h1 className='text-white text-xl md:text-md'>REACH US</h1>
        <Title className="text-white">Book Your Rooms</Title>
        <Paragraph className="max-w-3xl text-white mb-10">Maecenas rutrum lacus ipsum, non finibus ante consectetur rutrit amet mauris ac, volutpat mquis ornare augue. Nam sitollis massa.</Paragraph>
        <BookingRoom />
      </div>
      <Testinomonials />
      <Gallery />
    </div>
  )
}


export default Hompage
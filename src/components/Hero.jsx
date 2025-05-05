import React from 'react'
import { Paragraph } from '../ui/StyledComponent'
import { Title } from '../ui/StyledComponent'
import BookingForm from '../ui/BookingForm'
const Hero = () => {
    return (
        <section className='bg-gray-900 px-5 text-white py-2 h-screen bg-cover bg-center bg-no-repeat reltive flex items-center justify-center'
            style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/b/luxurious-five-star-hotel-suite-d-background-room-floor-to-ceiling-windows-overlooking-city-skyline-elegant-marble-floors-368960513.jpg)' }}
        >
            <div className='absolute inset-0 bg-gradient-to-b from-white/90 via-white/20 to-white/90 '></div>
            <div className=' relative z-10 text-center grid md:grid-cols-2 place-items-center'>

                <div className='grid place-items-start'>
                    <div className='space-y-3'>
                        <h1 className='text-4xl md:text-xl uppercase text-start  text-primary font-bold mb-4'>Welcome to Our Hotel</h1>
                        <Title className="text-start" >Discover Your Paradise Where You Are</Title>
                        <Paragraph className="text-start"> Sed imperdiet dignissim odio dignissim bibendum. Praesent porttitor tristique velit. efficitur, a pulvinar sem hasellus .</Paragraph>
                    </div>
                </div>
                <div className='mt-10'>
                    <BookingForm />
                </div>
            </div>
        </section>
    )
}

export default Hero
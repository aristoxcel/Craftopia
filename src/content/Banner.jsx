import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {  Pagination, Navigation,  Autoplay } from 'swiper/modules';

function Banner() {
  return (
    <>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className='relative'><img className=' w-full h-[650px] object-cover' src={'https://i.ibb.co/DpKbGQw/pexels-samerdaboul-1212811.jpg'} alt="" />
        <div className='absolute top-[63%] left-10'>
          <div>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white'>Crafting Dreams - </h1>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white pb-4'>Unleash Your Creativity with Our Artisanal Wonders!</h1>
            <div className='md:flex-row gap-5 md:items-center flex flex-col-reverse'>
              <button  className=' px-4 btn bg-transparent text-white rounded-3xl ring-purple-200 font-poppins font-medium font-2xl  hover:bg-white hover:text-gray-500'><a href='/#card'>Get Started</a> </button>
      
              </div>
          </div>
        </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='relative'><img className=' w-full h-[650px] object-cover' src={'https://i.ibb.co/RCLNSw9/pexels-yankrukov-6611464.jpg'} alt="" />
        <div className='absolute top-[63%] left-10'>
          <div>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white'>Crafting Dreams - </h1>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white pb-4'>Unleash Your Creativity with Our Artisanal Wonders! </h1>
            <div className='md:flex-row gap-5 md:items-center flex flex-col-reverse'>
              <button  className=' px-4 btn bg-transparent text-white rounded-3xl ring-purple-200 font-poppins font-medium font-2xl  hover:bg-white hover:text-gray-500'><a href='/#card'>Get Started</a> </button>
            
              </div>
          </div>
        </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='relative'><img className=' w-full h-[650px] object-cover' src={'https://i.ibb.co/4mKHKrB/pexels-roman-odintsov-5975980.jpg'} alt="" />
        <div className='absolute top-[63%] left-10'>
          <div>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white'>Crafting Dreams - </h1>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white pb-4'>Unleash Your Creativity with Our Artisanal Wonders!</h1>
            <div className='md:flex-row gap-5 md:items-center flex flex-col-reverse'>
              <button  className=' px-4 btn bg-transparent text-white rounded-3xl ring-purple-200 font-poppins font-medium font-2xl  hover:bg-white hover:text-gray-500'><a href='/#card'>Get Started</a> </button>

              </div>
          </div>
        </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='relative'><img className=' w-full h-[650px] object-cover' src={'https://i.ibb.co/XC5W0cc/pexels-yogeshkumar-320577.jpg'} alt="" />
        <div className='absolute top-[63%] left-10'>
          <div>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white'>Crafting Dreams - </h1>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white pb-4'>Unleash Your Creativity with Our Artisanal Wonders!</h1>
            <div className='md:flex-row gap-5 md:items-center flex flex-col-reverse'>
              <button  className=' px-4 btn bg-transparent text-white rounded-3xl ring-purple-200 font-poppins font-medium font-2xl  hover:bg-white hover:text-gray-500'><a href='/#card'>Get Started</a> </button>

              </div>
          </div>
        </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='relative'><img className=' w-full h-[650px] object-cover' src={'https://i.ibb.co/fq6DYqj/pexels-mccutcheon-1407278.jpg'} alt="" />
        <div className='absolute top-[63%] left-10'>
          <div>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white'>Crafting Dreams -</h1>
            <h1 className='font-franklin font-bold text-3xl md:text-4xl lg:text-5xl text-white pb-4'>Unleash Your Creativity with Our Artisanal Wonders! </h1>
            <div className='md:flex-row gap-5 md:items-center flex flex-col-reverse'>
              <button  className=' px-4 btn bg-transparent text-white rounded-3xl ring-purple-200 font-poppins font-medium font-2xl  hover:bg-white hover:text-gray-500'><a href='/#card'>Get Started</a> </button>

              </div>
          </div>
        </div>
        </div></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner
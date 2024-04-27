import { Link, useLoaderData } from "react-router-dom";
import Banner from "../content/Banner";
import Marquee from "react-fast-marquee";
import Card from "../content/Card";
import ClintsComment from "../content/ClientsComment";


function Home() {
  const crafts = useLoaderData()

  return (
    <div>
    <div className=""> <Banner/></div>
    <Marquee>
    <h1 className="font-poppins font-semibold text-xl md:text-2xl h-12 pt-2 bg-gradient-to-r from-base-100 via-red-300 to-base-100">Don't miss out! Exclusive flash sale happening now! Limited time offer, grab your favorites before they're gone!"</h1>
  </Marquee>
   <div className="mx-auto text-center mt-24 px-3">
     <h3 className="font-franklin  font-semibold uppercase text-gray-400 mb-5 hover:text-[#2596BE] hover:text-lg hover:mb-4" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="800">About Everything Art & Craft</h3>
     <h1 className="font-cursive lg:text-[33px] md:text-3xl text-2xl font-semibold text-gray-600 lg:w-3/5 md:w-2/3 w-11/12 text-center mx-auto" data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-delay="100">Welcome – you’re in the perfect place for all your art and craft inspiration. We want to help you express your personality, have more fun and learn through creativity. With stacks of new ideas, hints and tips, blogs, tutorials, news and free events, we’re everything art and craft!.</h1>
     </div>
   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-4/5 mx-auto  mt-14 px-3">
   {/* {
     estate.map(property=><CardEstate key={property.id} property={property}/>)
   } */}
   </div>



{/* craft collection section */}
   <div className="mx-auto text-center mt-16 px-3 mb-4">
     <h3 className="font-franklin  font-semibold uppercase text-gray-400 mb-5 hover:text-violet-900 hover:text-lg hover:mb-4" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="800">Browse Our Collections</h3>
     <h1 className="font-cursive lg:text-[33px] md:text-3xl text-2xl font-semibold text-gray-600 lg:w-3/5 md:w-2/3 w-11/12 text-center mx-auto" data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-delay="100"><hr /></h1>
     </div>
   <div className="grid md:grid-cols-6 gap-5 l mx-auto px-3 lg:px-10 ">
    <div className="bg-teal-600 md:col-span-1 col-span-6 mt-14 rounded-2xl pt-6 px-3"><h1 className="font-semibold font-franklin text-2xl text-base-200 mb-4">Browse our Art & Craft</h1>
    <button className="group relative ml-5 flex w-36 items-center rounded-lg border-2 border-violet-900 p-3 light:text-violet-800 dark:text-sky-200 font-medium"><span><Link to={'/allitem'} className="text-base-200">View All</Link></span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-violet-400 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
    </div>

    <div className="md:col-span-5 col-span-6 gap-3 ">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto  mt-14 px-3">
 {

    crafts?.slice(0, 6).map(craft=><Card key={craft._id} craft={craft}/>)
   
 }
  </div>
   </div>
   </div>
   <ClintsComment/>
   <Marquee>
    <img src={"https://i.ibb.co/dQbmfmw/download.jpg"} alt="" className="w-28 mr-24  rounded-2xl"/>
    <img src={"https://i.ibb.co/xz6N8KR/download.png"} alt="" className="w-28 mr-24 rounded-2xl"/>
    <img src={"https://i.ibb.co/Rptmkrk/images-1.png"} alt=""className="w-28 mr-24 rounded-2xl" />
    <img src={"https://i.ibb.co/KK18V2Z/images.jpg"} alt="" className="w-24 mr-24 rounded-2xl"/>
    <img src={"https://i.ibb.co/jMj2Ssv/images.png"} alt=""className="w-28 rounded-2xl" />
  </Marquee>
   </div>
  )
}

export default Home
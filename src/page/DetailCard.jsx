import { BiAperture } from "react-icons/bi"
import { FaRegCalendarAlt } from "react-icons/fa"
import { FaBusinessTime } from "react-icons/fa6"
import { GiPriceTag } from "react-icons/gi"
import { useLoaderData } from "react-router-dom"


function DetailCard() {
  const crafts = useLoaderData()
  const {image, iname, subcategory_Name, stock, price, ptime, _id, description, customize}=crafts
  return (
    <div className="bg-gray-50 pt-16">
        <div className="  mx-auto lg:w-4/5 px-1 lg:px-0 border-2 rounded-2xl">
      <div className="p-2">
        <button className="rounded px-2 bg-[#2596BE] text-base font-poppins font-medium text-white mr-4">
          For {stock}
        </button>
        <button className="rounded px-2 bg-[#2596BE] text-base font-poppins font-medium text-white">
          {" "}
          {subcategory_Name}
        </button>
      </div>
      <div className="flex justify-between space-y-2 pb-4 px-2">
        <h1 className="font-franklin text-4xl text-gray-600 font-semibold">
          {iname}
        </h1>
        <h2 className="font-poppins text-[#2596BE] font-semibold text-4xl ">
         Price: $ {price}
        </h2>
      </div>
     
      <div className="pb-5 px-2" data-aos="zoom-in"
     data-aos-easing="ease-in-sine"
     data-aos-duration="500">
        <img
          className="w-full h-[850px] rounded-2xl object-cover"
          src={image}
          alt=""
        />
      </div>

      {/* overvies section start here */}
      <div className="px-2">
        <div className="footer p-10 text-neutral  rounded-2xl bg-teal-50" data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="500">
          <div>
            <h6 className="footer-title text-black text-xl font-franklin">
              Overview
            </h6>
            <div className="flex gap-3 items-center text-orange-600">
              <FaRegCalendarAlt className="text-xl" />
              <h3 className="text-[#2596BE] text-lg font-semibold">
                Updated on:
              </h3>
            </div>
            <h3 className="text-xl font-semibold opacity-50">April 14th, 2024</h3>
          </div>
          <nav className="font-poppins">
            <h6 className="footer-title mb-6"></h6>
            <div className="flex gap-3 items-center">
              {" "}
              <FaBusinessTime  className="text-2xl" />
              <a className="pt-2 text-[#2596BE] text-lg font-semibold">
              {ptime} hour
              </a>
            </div>
            <a className="text-xl font-semibold opacity-50">Processing hour</a>
          </nav>
          <nav>
            <h6 className="footer-title mb-6"></h6>
            <div className="flex gap-3 items-center text-orange-600">
              {" "}
              <BiAperture className="text-2xl" />
              <a className=" text-[#2596BE] text-lg font-semibold capitalize">
                {customize}
              </a>
            </div>
            <a className="text-xl font-semibold opacity-50">Customizable </a>
          </nav>
          <nav>
            <h6 className="footer-title mb-6"></h6>
            <div className="flex gap-3 items-center text-orange-600">
              {" "}
              <GiPriceTag className="text-2xl" />
              <a className="pt-1 text-[#2596BE] text-lg font-semibold">
                {price}$
              </a>
            </div>
            <a className="text-xl font-semibold opacity-50">Demand Price</a>
          </nav>
        </div>
      </div>


      {/* Description section start here */}
      <section className="px-2">
        <div className="p-5 rounded-2xl  my-5 bg-orange-50" data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="500">
            <h1 className="font-franklin text-black text-xl font-bold  opacity-60 py-4">DESCRIPTION</h1>
            <p className="font-poppins opacity-70 pb-5 ">{description}</p>
        </div>
      </section>

      <section className="px-2">
        <div className="p-5 rounded-2xl  my-5 bg-transparent" data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="500">
            <h1 className="font-franklin  text-xl font-bold  opacity-60  btn btn-block bg-violet-300 hover:bg-violet-500">Buy</h1>
        </div>
      </section>


     
    </div>
    </div>
    
  )
}

export default DetailCard
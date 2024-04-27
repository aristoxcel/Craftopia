import { FaLocationDot } from "react-icons/fa6";
import { FcFactory } from "react-icons/fc";
import { BiAperture } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { FaCircleNodes } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";

function DetailCard() {
  const estate = useLoaderData();
  const { id } = useParams();
  const card = estate.find((i) => i.id == id);
  const {
    image,
    title,
    segment_name,
    facilities,
    area,
    status,
    price,
    location,
    description
  } = card;
  return (
    <main className="bg-gray-50 pt-16">
        <div className="  mx-auto lg:w-4/5 px-1 lg:px-0 border-2 rounded-2xl">
      <div className="p-2">
        <button className="rounded px-2 bg-[#2596BE] text-base font-poppins font-medium text-white mr-4">
          For {status}
        </button>
        <button className="rounded px-2 bg-[#2596BE] text-base font-poppins font-medium text-white">
          {" "}
          {segment_name}
        </button>
      </div>
      <div className="flex justify-between space-y-2 px-2">
        <h1 className="font-franklin text-4xl text-gray-600 font-semibold">
          {title}
        </h1>
        <h2 className="font-poppins text-[#2596BE] font-semibold text-4xl ">
          {price}
        </h2>
      </div>
      <div className="flex items-center gap-2 pb-3 px-2">
        <FaLocationDot className="text-[#2596BE] text-xl" />
        <p className="py-2 text-lg font-medium font-poppins text-gray-400">
          {location}
        </p>
      </div>
      <div className="pb-5 px-2" data-aos="zoom-in"
     data-aos-easing="ease-in-sine"
     data-aos-duration="500">
        <img
          className="w-full h-[550px] rounded-2xl "
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
              <FcFactory className="text-2xl" />
              <a className="pt-3 text-[#2596BE] text-lg font-semibold">
                {area}
              </a>
            </div>
            <a className="text-xl font-semibold opacity-50">Property Size</a>
          </nav>
          <nav>
            <h6 className="footer-title mb-6"></h6>
            <div className="flex gap-3 items-center text-orange-600">
              {" "}
              <BiAperture className="text-2xl" />
              <a className="pt-1 text-[#2596BE] text-lg font-semibold">
                {status}
              </a>
            </div>
            <a className="text-xl font-semibold opacity-50">Status</a>
          </nav>
          <nav>
            <h6 className="footer-title mb-6"></h6>
            <div className="flex gap-3 items-center text-orange-600">
              {" "}
              <GiPriceTag className="text-2xl" />
              <a className="pt-1 text-[#2596BE] text-lg font-semibold">
                {price}
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


      {/* Feature section start here */}
      <section className="pb-5 px-2 ">
        <div className="p-5 rounded-2xl  my-5 bg-sky-50" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="500">
            <h1 className="font-franklin text-black text-xl font-bold  opacity-60 py-4">Facilities</h1>
            {
               facilities.map((i,b)=><div key={b} className="flex gap-5"> <FaCircleNodes className="opacity-60"/> <p  className="font-poppins opacity-70 pb-5 ">{i}</p></div>)
            }
        </div>
      </section>
    </div>
    </main>
  );
}

export default DetailCard;

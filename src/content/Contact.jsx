import { FaPhoneVolume } from "react-icons/fa6"
import { IoLocationOutline } from "react-icons/io5"
import { MdOutlineAttachEmail } from "react-icons/md"
import Typewriter from 'typewriter-effect';


function Contact() {
  return (
    <div className="my-16">
         <div className="lg:w-4/5 lg:px-24 px-8 mx-auto lg:py-12 py-8">
        <hr className="border-dashed lg:my-8 my-6"></hr>
        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500" className="lg:text-4xl text-2xl font-extrabold py-4 lg:py-6 text-center text-[#2596BE] playfair">
          <Typewriter
  options={{
    strings: ['Contact', 'With Us'],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
        <p className="text-pera lg:text-base text-sm font-medium text-center lg:w-1/2 md:w-2/3 mx-auto">
          Contact with us to explore exciting opportunities, share feedback, or
          inquire about our services.
        </p>
        <hr className="border-dashed lg:my-8 my-6 row-end-auto  " />

        <div className="grid lg:grid-cols-12 grid-cols-1 gap-4 ">
          <div className="col-span-5">
            <div className="grid grid-rows-3 lg:gap-4 gap-6 border border-[#13131837] rounded-2xl lg:p-8 p-4">
              <div className="bg-[#BCED6D1A] rounded-2xl lg:p-8 lg:pb-9 p-5">
                <FaPhoneVolume className="text-3xl text-[#23BE0A]" />
                <p className="text-pera">Phone Number : </p>
                <h4 className="text-heading text-lg md:text-base lg:text-lg lg:font-extrabold md:font-semibold font-extrabold">
                  (+880) 01911-309454
                </h4>
              </div>

              <div className="bg-[#fddb5f19] rounded-2xl lg:p-8 lg:pb-9 p-5">
                <MdOutlineAttachEmail className="text-info text-3xl" />
                <p className="text-pera">Email : </p>
                <h4 className="text-heading text-lg md:text-base lg:text-lg lg:font-extrabold md:font-semibold font-extrabold">
                  aristoxcel@gmail.com
                </h4>
              </div>

              <div className="bg-[#629cf319] rounded-2xl lg:p-8 lg:pb-9 p-5">
                <IoLocationOutline className="text-3xl text-[#23BE0A]" />
                <p className="text-pera">Location : </p>
                <h4 className="text-heading text-lg md:text-base lg:text-lg lg:font-extrabold md:font-semibold font-extrabold">
                  Gandaria, Dhaka, Bangladesh
                </h4>
              </div>
            </div>
          </div>

          <div className="col-span-7 ">
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-3 pb-2">
              <label className="form-control w-full">
                <div className="label text-xl font-bold">Your Name</div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full  bg-[#13131805]"
                />
              </label>

              <label className="form-control w-full">
                <div className="label text-xl font-bold">Your Email</div>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered w-full  bg-[#13131805]"
                />
              </label>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-3 pb-4">
              <label className="form-control w-full ">
                <div className="label text-xl font-bold">Subject</div>
                <input
                  type="text"
                  placeholder="Enter your subject"
                  className="input input-bordered w-full bg-[#13131805]"
                />
              </label>

              <label className="form-control w-full ">
                <div className="label text-xl font-bold">Phone Number</div>
                <input
                  type="text"
                  placeholder="Enter your phone numberEnter your email"
                  className="input input-bordered w-full  bg-[#13131805]"
                />
              </label>
            </div>

            <label className="form-control w-full lg:h-[52%] pb-4">
              <div className="label text-xl font-bold">Message</div>
              <textarea
                className="textarea input-bordered w-full h-full bg-[#13131805]"
                placeholder="Write your message"
                rows="3"
              ></textarea>
            </label>

            {/* <button className="btn bg-[#2596BE] w-full text-white font-bold text-xl">
              Send us Message
            </button> */}
            <button className="rounded-2xl w-full  group relative z-10 h-14  overflow-hidden bg-teal-700 text-xl text-base-300"><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-teal-700 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-teal-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">Submit</span>Send Us Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
function ClintsComment() {
    return (
      <div className="lg:w-4/5 mx-auto my-24 px-5">
        <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-4">
          <div className="col-span-2  h-72 space-y-3 py-10 my-auto " data-aos="fade-left"
      data-aos-easing="ease-in-sine"
      data-aos-duration="300">
            <h3 className="uppercase font-franklin font-medium text-lg opacity-70">
              <span className="text-orange-500">__</span> Reviews
            </h3>
            <h1 className="font-poppins text-3xl font-semibold opacity-80 pb-2">
            Crafty Customer Voices: 
            </h1>
            <p className="  lg:pr-10 opacity-60 font-poppins ">
            We are very proud of the service we provide. Hear What Our Art & Craft Store Shoppers Have to Say!
            </p>
            <button type="submit" className=" px-5 mb-2  mt-4 shadow-lg rounded-md   block group relative h-10 w-48 overflow-hidden border-2 border-violet-700 text-xl text-violet-500 hover:text-violet-200"><span className="bg-violet-800  ease-in absolute w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12"></span><span className="bg-violet-600 ease-in absolute w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span >Contact Us</button>
          </div>
          <div className="col-span-3  gap-3 grid md:grid-cols-2 grid-cols-1">
            <div className="grid-cols-1 ">
              <div className="card  bg-base-100 shadow-xl rounded-none" data-aos="fade-right"
       data-aos-easing="ease-in-sine"
       data-aos-delay="200">
                <figure className="px-10 pt-10">
                  <img
                    src={"pic.jpg"}
                    alt="jhon"
                    className="rounded-full w-28 h-28"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  </div>
                  <p className="font-poppins opacity-60 font-medium text-sm py-7 text-balance"> "Absolutely love the unique selection! Found the perfect piece for my DIY project. Will definitely be back for more."</p>
                  <p className="px-7 font-franklin opacity-90 font-semibold text-sm">Johnathan Smith, CEO of Sonar Bangla Ltd.</p>
                </div>
              </div>
            </div>
            <div className="grid-cols-1  ">
            <div className="card  bg-base-100 rounded-none shadow-xl" data-aos="fade-right"
       data-aos-easing="ease-in-sine"
       data-aos-delay="400" >
                <figure className="px-10 pt-10">
                  <img
                    src={"pic3.jpg"}
                    alt="emily"
                    className="rounded-full w-28 h-28"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  </div>
                  <p className="font-poppins opacity-60 font-medium text-sm py-7 text-balance"> "Impressed with the quality and variety. Great customer service too! Highly recommend this store for all craft enthusiasts."</p>
                  <p className="px-7 font-franklin opacity-90 font-semibold text-sm">Emily Chen, Manager at FrostyFoods Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ClintsComment;
  
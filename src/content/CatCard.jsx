

import PropTypes from 'prop-types'


function CatCard({cat}) {
    const {image, iname, subcategory_Name}=cat

  return (
    <div className="mx-auto w-full overflow-hidden flex" id="card">
      <div className="card  bg-base-100 shadow-xl flex-grow">
        <figure className="relative" data-aos="zoom-out"
     data-aos-easing="ease-in-sine"
     data-aos-duration="300">
            <button className="rounded px-3 font-poppins bg-violet-600 border-none text-base-300 font-bold text-xl p-[-1px] absolute right-8 top-6">{stock}</button>
          <img className="w-full object-fill h-96 overflow-hidden"
            src={image}
            alt="craft"
          />

        </figure>
        <div className="card-body p-4 pb-6">
        <h1>{subcategory_Name}</h1>
        </div>
      </div>
    </div>
  );
}

export default CatCard;

CatCard.propTypes={
  cat: PropTypes.object.isRequired,
}

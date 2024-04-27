

import PropTypes from 'prop-types'


function CatCard({cat}) {
    const {image, iname, subcategory_Name}=cat

  return (
    <div className="mx-auto w-full overflow-hidden flex" id="card">
      <div className="card  bg-base-100 shadow-xl flex-grow">
        <figure className="relative" data-aos="zoom-out"
     data-aos-easing="ease-in-sine"
     data-aos-duration="300">
          <img className="w-full object-fill h-96 overflow-hidden"
            src={image}
            alt="craft"
          />

        </figure>
        <div className="card-body p-6 bg-teal-700">
        <h1 className='text-center font-cursive font-semibold text-violet-900 text-2xl'>{subcategory_Name}</h1>
        </div>
      </div>
    </div>
  );
}

export default CatCard;

CatCard.propTypes={
  cat: PropTypes.object.isRequired,
}

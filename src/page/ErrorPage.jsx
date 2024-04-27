import  {useRouteError,  Link } from 'react-router-dom'


const ErrorPage = () => {

    const error = useRouteError()
    console.error(error);

    return (
       <>
      <div className="mx-auto text-center bg-gradient-to-r to-sky-100 from-sky-400  flex-col justify-center items-center py-10">
          <img src={'err.png'} alt="" className='mx-auto'/>
          <div className='flex-col'>
          <p className="font-bold text-teal-700 text-3xl pb-3 text-center font-franklin">Error Message: Page {error.statusText || error.message}</p>
          <button><Link className="btn bg-[#2596BE] hover:bg-gradient-to-r hover:from-[#2596be] hover:to-[#62b4d2] hover:ring-2 hover:ring-offset-2 hover:ring-[#62b4d2] transition-all ease-out duration-300 font-semibold text-xl text-white rounded-xl font-poppins">Return Home</Link></button>
          </div>
      </div>

       </>
    );

}

export default ErrorPage

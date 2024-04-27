
import { useContext, useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Context';
import Swal from 'sweetalert2';


export const NavBar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();
    const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    Swal.fire({
      icon: "success",
      title: "you logout successfully",
      showConfirmButton: false,
      timer: 1500
    });
    navigate("/login");
  };

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <nav className="flex items-center justify-between bg-sky-100 px-4 py-2 text-violet-900 font-semibold text-base">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <img src={'https://i.ibb.co/1njBSqL/brand.png'} alt="" className='h-10'/>
        </div>
        <ul className="hidden items-center justify-between gap-10 md:flex">
          <NavLink to={'/'} className="group flex  cursor-pointer flex-col">
            Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink to={'/allitem'} className="group flex  cursor-pointer flex-col">
          All Item<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
         
         {
          user && (
            <>
              <NavLink to={'/addcard'} className="group flex  cursor-pointer flex-col">
              Add Item<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              <NavLink to={'/mylist'} className="group flex  cursor-pointer flex-col">
              My List<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </>
          )
         }
        

         {user?.email ? (
           <li className="relative" ref={dropDownMenuRef}>
            <button onClick={() => setDropDownState(!dropDownState)} className="relative flex items-center gap-1 py-2 ">
                <span><img src={user?.photoURL || "logo.png"}  alt="" className='w-8 rounded-full hover:ring-2 '/></span>
                <svg className={`${dropDownState ? '' : 'rotate-180'}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
            </button>
              {dropDownState && (
                  <ul className="absolute top-10 z-10 space-y-2 rounded-lg bg-sky-100 p-2 text-violet-900 font-medium text-base">
                      <NavLink  className="group flex  cursor-pointer flex-col ">
                      {user?.displayName || "User Name"}<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                      <NavLink  className="group flex  cursor-pointer flex-col" onClick={handleLogout}>
                      Logout<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                      </NavLink>
                  </ul>
              )}
            </li>
         )
         : user?.displayName ?(
          <li className="relative" ref={dropDownMenuRef}>
                <button onClick={() => setDropDownState(!dropDownState)} className="relative rounded-full flex items-center gap-1 py-2 hover:ring-2 ">
                    <span><img src={user?.photoURL || "logo.png"}  alt="" /></span>
                    <svg className={`${dropDownState ? '' : 'rotate-180'}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                </button>
                {dropDownState && (
                    <ul className="absolute top-10 z-10 space-y-2 rounded-lg bg-gray-700 p-2 text-gray-100">
                        <NavLink  className="group flex  cursor-pointer flex-col">
                        {user?.displayName || "User Name"}<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                         </NavLink>
                        <NavLink  className="group flex  cursor-pointer flex-col" onClick={handleLogout}>
                        Logout<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                    </ul>
                )}
          </li>
         )
         :(
          <>
            <NavLink to={'/login'} className="group flex  cursor-pointer flex-col">
            Login<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink to={'/signup'} className="group flex  cursor-pointer flex-col">
            Registration<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </>
         )
         
        
        
        }
          



                {/* theme controller */}
            <label className="swap swap-rotate">
  
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" className="theme-controller" value="synthwave" />
              
              {/* sun icon */}
              <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
              
              {/* moon icon */}
              <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
              
            </label>

        </ul>


        {/* small device */}
        <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
          {dropDownState && (
            <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
              <NavLink to={'/'} className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                Home
              </NavLink>
              <NavLink to={'/allitem'} className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                All Item
              </NavLink>
            {
              user && (
                <>
                    <NavLink to={'/addcard'} className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                      Add Item
                    </NavLink>
                    <NavLink to={'/mylist'} className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                      My List
                    </NavLink>
                </>
              )
            }
              <NavLink to={'/login'} className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                Login
              </NavLink>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 " onClick={handleLogout}>
                Logout
              </li>
            </ul>
          )}
        </div>
</nav>
  

    );
};

   
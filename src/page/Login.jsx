
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/Context";
// import { FaEye, FaEyeSlash} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";

const Login = () => {
const [registers, setRegisters] = useState(false);
const [error, setError]= useState(null);
// const [show, setShow]=useState(false);
const [success, setSuccess]=useState(null)
const navigate = useNavigate()
const location = useLocation()
const from = location?.state || '/';


const { signIn, signInWithGoogle}= useContext(AuthContext);


const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, 
  } = useForm()


      // login Submit function
      const loginData = (data) => {
        setError('')
        setSuccess('')
        console.log(data);
        signIn(data.email, data.password)
        .then(()=>{
            setSuccess('you logged in successfully')
            Swal.fire({
              icon: "success",
              title: "you logged in successfully",
              showConfirmButton: false,
              timer: 1500
            });
          navigate(from)
        })
        .catch(()=>setError('Email or Password is not matching'))
        console.log(data);
        reset()
      }
      console.log(errors);


          // google Sign function
    const handleSignInGoogle=()=>{
        signInWithGoogle()
        .then(()=>{
          setSuccess('you logged in successfully')
          Swal.fire({
            icon: "success",
            title: "you logged in successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from)
        })
        .catch(error=>console.log(error.message))
      }


return (
    <div className="w-80 md:w-96 lg:w-[800px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl my-6">
                {/* register form  */}
               <form className={`p-8 w-full ${registers ? 'lg:translate-x-0' : 'lg:-translate-x-full hidden lg:block'} duration-500`} ></form>
                {/* img */}
                <div className={`hidden lg:block absolute w-1/2 h-full top-0 z-50 duration-500 overflow-hidden bg-black/20 ${registers ? 'translate-x-full rounded-bl-full duration-500' : 'rounded-br-full'}`}>
                    <img src="https://source.unsplash.com/random" className="object-cover h-full" alt="card navigate ui" />
                </div>


                {/* login form */}
                <form className={`p-8 w-full mr-0 ml-auto duration-500 ${registers ? 'lg:translate-x-full hidden lg:block' : ''}`} onSubmit={handleSubmit(loginData)}>
                    <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4 text-violet-600">Login</h1>
                    <div className="space-y-5">
                        <label htmlFor="_email" className="block text-violet-600">Email</label>
                        <input 
                            className='p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black' 
                            type="email" 
                            placeholder="Email" 
                            {...register("email", {required:
                            {value:true,
                            message:"This is required"} , pattern: /^\S+@\S+$/i})} 
                            aria-invalid={errors.email ? "true" : "false"} />
                        {errors.email && <p className="text-red-500 font-semibold">{errors.email.message}</p>}
                


                        <label htmlFor="_password" className="block text-violet-600">Password</label>
                        <input className='p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black' 
                                type="password" 
                                placeholder="Password" 
                                {...register("password", 
                                {required: {
                                value:true,
                                message:"This is required"},
                                
                                minLength:{
                                value:6,
                                message:"Password at least 6 character"
                                },
                                pattern:{
                                value:/^(?=.*[a-z])(?=.*[A-Z]).+$/,
                                message:"Password at least one word Uppercase or Lowercase"
                                }}
                            )} 
                                aria-invalid={errors.Password ? "true" : "false"}/>
                                {errors.password  && <p className="text-red-500 font-semibold">{errors.password.message}</p>}

                    </div>
                    {/* button type will be submit for handling form submission*/}
                    <button type="submit" className=" px-5 mb-2 mx-auto mt-4 shadow-lg rounded-md   block group relative h-10 w-48 overflow-hidden border-2 border-sky-400 text-xl text-sky-400 hover:text-sky-200"><span className="bg-sky-800  ease-in absolute w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12"></span><span className="bg-sky-600 ease-in absolute w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>Submit</button>
                    <p className="mb-3 text-center text-violet-600">Don&apos;t have an account?<Link to={'/signup'} onClick={() => {setRegisters(!registers);}} className="underline font-semibold text-base-600">Register</Link></p>
                    <hr />
                    <button type="button" className="text-violet-600 py-2 px-5 mb-4 mt-4 mx-auto block shadow-lg border rounded-md border-black" onClick={handleSignInGoogle}><FcGoogle className="w-6 inline-block mr-3 text-3xl text-violet-600"/>Continue with Google</button>
                    <button type="button" className="text-violet-600 py-2 px-5 mb-4  mx-auto block shadow-lg border rounded-md border-black"><RxGithubLogo className="w-6 inline-block mr-3 text-3xl text-violet-600"/>Continue with GitHub</button>
                </form>
            </div>
);
};


export default Login
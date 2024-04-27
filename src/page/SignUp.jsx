import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Context";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import Swal from "sweetalert2";

function SignUp() {
  const [registers, setRegisters] = useState(true);
  const [error, setError]= useState(null);
  const [show, setShow]=useState(false);
  const [success, setSuccess]=useState(null)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state || '/';
  
  
  const {signUp, signInWithGoogle, updateUser}= useContext(AuthContext);
  
  
  const {
      register,
      handleSubmit,
      reset,
      formState: { errors }, 
    } = useForm()
  
  
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
    

  //   sign up onclick function
  const signUpData = (data) => {
    signUp(data.email, data.password)
    .then(()=>{
      updateUser(data.name, data.photo)
      .then(()=>{
        setSuccess('User Registered Successfully')
      })      
    })
    .catch(error=>setError(error.message))
    Swal.fire({
      icon: "success",
      title: "You Registered successfully. Please Sign In !",
      showConfirmButton: false,
      timer: 1500
    });
    reset()
  }
  console.log(errors);
  return (
    <div className="w-80 md:w-96 lg:w-[800px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">
    {/* register form  */}
   
    <form className={`p-8 w-full ${registers ? 'lg:translate-x-0' : 'lg:-translate-x-full hidden lg:block'} duration-500`} onSubmit={handleSubmit(signUpData)}>
        <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Register</h1>
        <div className="space-y-3">
            <label htmlFor="name" className="block">Name</label>
            <input 
                className='p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black' 
                type="text" 
                placeholder="Name" 
                {...register("name", {required:
                {value:true,
                message:"This is required"}})} 
                aria-invalid={errors.name ? "true" : "false"} />
            {errors.name && <p className="text-red-500 font-semibold">{errors.name.message}</p>}


            <label htmlFor="u_email" className="block">Email</label>
            <input 
                className='p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black' 
                type="email" 
                placeholder="Email" 
                {...register("email", {required:
                {value:true,
                message:"This is required"} , pattern: /^\S+@\S+$/i})} 
                aria-invalid={errors.email ? "true" : "false"} />
            {errors.email && <p className="text-red-500 font-semibold">{errors.email.message}</p>}



            <label htmlFor="u_password" className="block">Photo Url</label>
            <input 
                className='p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black' 
                type="url" 
                placeholder="Photo Url" 
                {...register("photo", {required:
                {value:true,
                message:"This is required"}})} 
                aria-invalid={errors.photo ? "true" : "false"} />
            {errors.photo && <p className="text-red-500 font-semibold">{errors.photo.message}</p>}

                <label htmlFor="u_password" className="block">Password</label>
                <div className="w-full relative">
                <input className='p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black' 
                    type={show? "text":"password"} 
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
                    aria-invalid={errors.Password ? "true" : "false"}/><span onClick={()=>setShow(!show)} className="absolute top-4 right-3">{show?<FaEyeSlash/>:<FaEye/>}</span>
                    {errors.password  && <p className="text-red-500 font-semibold">{errors.password.message}</p>}
                </div>
                            </div>  
        {/* button type will be submit for handling form submission*/}
        <button type="submit" className=" px-5 mb-2 mx-auto mt-4 shadow-lg rounded-md   block group relative h-10 w-48 overflow-hidden border-2 border-sky-400 text-xl text-sky-400 hover:text-sky-200"><span className="bg-sky-800  ease-in absolute w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12"></span><span className="bg-sky-600 ease-in absolute w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>Submit</button>
        
        <p className="mb-3 text-center">Already have an account?<Link to={'/login'} onClick={() => {setRegisters(!registers);}} className="underline font-semibold">Login</Link></p>
        <hr />
        <button type="button" className="py-2 px-5 mb-4 mt-4 mx-auto block shadow-lg border rounded-md border-black" onClick={handleSignInGoogle}><FcGoogle className="w-6 inline-block mr-3 text-3xl"/>Continue with Google</button>

        <button type="button" className="py-2 px-5 mb-2  mx-auto block shadow-lg border rounded-md border-black"><RxGithubLogo className="w-6 inline-block mr-3 text-3xl"/>Continue with GitHub</button>
    </form>
    {/* img */}
    <div className={`hidden lg:block absolute w-1/2 h-full top-0 z-50 duration-500 overflow-hidden bg-black/20 ${registers ? 'translate-x-full rounded-bl-full duration-500' : 'rounded-br-full'}`}>
        <img src="https://source.unsplash.com/random" className="object-cover h-full" alt="card navigate ui" />
    </div>

    <form className={`p-8 w-full mr-0 ml-auto duration-500 ${registers ? 'lg:translate-x-full hidden lg:block' : ''}`}></form>
   
</div>
);
}

export default SignUp
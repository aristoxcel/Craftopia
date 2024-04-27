import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function Form() {
 const {user}=useContext(AuthContext)
 const navigate = useNavigate();

  const handleSubmitForm=(e)=>{
    e.preventDefault();
    const form = e.target;
    const iname = form.iname.value;
    const price =form.price.value;
    const subcategory_Name =form.subcategory_Name.value;
    const description =form.description.value;
    const image=form.image.value;
    const ptime =form.ptime.value;
    const rating =form.rating.value;
    const customize =form.customize.value;
    const stock =form.stock.value;
    const user_name = user.displayName || 'user'
    const user_email = user.email
    const craft = {iname, price, subcategory_Name, description, image, ptime , rating, customize , stock, user_name, user_email}

    fetch('https://craftopia-server-psi.vercel.app/craft', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(craft)
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.insertedId){
        
        Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/mylist')
      } 
    })

  }


  return (
    <div className="mx-auto my-16">
      <div className="w-4/5 flex md:flex-row flex-col justify-between gap-5 mx-auto">
        <div className="md:basis-1/3 px-5">
          <h1 className="text-2xl font-franklin font-bold text-sky-900 text-center mb-6 ">Instructions for Add Data</h1>
          <ul className="text-base text-base-600 font-poppins">
            <li>Clear and User-Friendly Interface: Design the add form with a clear and intuitive layout. Use easy-to-understand labels and instructions to guide users through the process.</li>
            <li>Required Fields: Determine which fields are essential for users to fill out and mark them as required. These might include fields such as Title, Description, Category, and Image.</li>
            <li>Title: Ask users to provide a title for their submission. This could be the name of the subcategory or a brief description.</li>
            <li>Description: Provide a text box where users can write a detailed description of the Ceramics and Pottery subcategory they are adding. Encourage them to include relevant information such as techniques used, materials, and any special features.</li>
            <li>Category: Include a dropdown menu or radio buttons for users to select the main category or subcategory to which their submission belongs. For example, categories could include Hand-built Pottery, Wheel-thrown Ceramics, Sculptural Ceramics, Raku Pottery, etc.</li>
            <li>Image Upload: Allow users to upload images of their Ceramics and Pottery subcategory. Provide clear instructions on accepted file formats and maximum file size. You may want to require at least one image to accompany each submission.</li>
          </ul>
        </div>

        <div className="md:basis-3/5 mx-auto text-center">
          <h1 className="text-2xl font-franklin font-bold text-sky-900 text-center mb-2">Create a Art & Craft Item</h1>
          <form className="py-8" onSubmit={handleSubmitForm}>
            {/* Name and price */}
            <div className="flex gap-3  p-3 justify-between">
                    <div className="relative w-full rounded-lg ">
                        <input
                        className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                        type="text"
                        placeholder="" 
                        name="iname"
                        id="navigate_ui_input_33"
                        />
                        <label
                        className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-sky-400 dark:peer-focus:bg-[#0F172A]"
                        htmlFor="navigate_ui_input_33"
                        >
                        Item Name
                        </label>
                    </div>

                    <div className="relative w-full  rounded-lg">
                        <input
                        className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                        type="text"
                        placeholder="" name="price"
                        id="navigate_ui_input_33"
                        />
                        <label
                        className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-sky-400 dark:peer-focus:bg-[#0F172A]"
                        htmlFor="navigate_ui_input_33"
                        >
                        Price of Item
                        </label>
                    </div>
            </div>

{/* subcategory_Name */}
            <div className="flex gap-3  p-3 justify-between">
                    <div className="relative w-full rounded-lg ">
                        <input
                        className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                        type="text"
                        placeholder="" name="subcategory_Name"
                        id="navigate_ui_input_33"
                        />
                        <label
                        className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-sky-400 dark:peer-focus:bg-[#0F172A]"
                        htmlFor="navigate_ui_input_33"
                        >
                        Sub-Category Name
                        </label>
                    </div>
            </div>
{/* description */}
            <div className="flex gap-3  p-3 justify-between">
                    <div className="relative w-full rounded-lg ">
                        <textarea
                        className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                        rows={7}
                        placeholder="" name="description"
                        id="navigate_ui_input_33"
                        />
                        <label
                        className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-sky-400 dark:peer-focus:bg-[#0F172A]"
                        htmlFor="navigate_ui_input_33"
                        >
                        Short Description of Sub-Category
                        </label>
                    </div>
            </div>

     {/* Image and Time */}
            <div className="flex gap-3  p-3 justify-between">
                            <div className="relative w-full rounded-lg ">
                                <input
                                className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                                type="text"
                                placeholder="" name="image"
                                id="navigate_ui_input_33"
                                />
                                <label
                                className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-sky-400 dark:peer-focus:bg-[#0F172A]"
                                htmlFor="navigate_ui_input_33"
                                >
                                Image Url
                                </label>
                            </div>

                            <div className="relative w-full  rounded-lg">
                              <input
                              className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                              type="text"
                              placeholder="" 
                              name="ptime"
                              id="navigate_ui_input_33"
                              />
                              <label
                              className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-sky-400 dark:peer-focus:bg-[#0F172A]"
                              htmlFor="navigate_ui_input_33"
                              >
                              Processing Time
                              </label>
                          </div>
                           
            </div>

            
             {/* checkbox */}
             <div className="flex gap-3  p-3 justify-between">

                    <div className="relative w-full  rounded-lg">
                        <select
                        className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-gray-400 focus:outline-none"
                        type="text"
                        placeholder="" name="rating"
                        id="navigate_ui_input_33"
                        ><option disabled selected>Give the rating for this item</option>
                        <option value={1} >1</option>
                        <option  value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option></select>
                    </div>

                    <div className="relative w-full  rounded-lg">
                        <select
                        className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-gray-400 focus:outline-none"
                        type="text"
                        placeholder="" name="customize"
                        id="navigate_ui_input_33"
                        ><option disabled selected>Customization</option>
                        <option value={'yes'}>Yes</option>
                        <option value={'no'}>No</option></select>
                    </div>
                   
                    <div className="relative w-full  rounded-lg">
                        <select
                        className="w-full peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-gray-400 focus:outline-none"
                        type="text"
                        placeholder="" name="stock"
                        id="navigate_ui_input_33"
                        ><option disabled selected>Stock Status</option>
                        <option value={'stock'}>In Stock</option>
                        <option value={'order'}>Made to Order</option></select>
                    </div>

            </div>
    
           <div className="p-3">
           <button type="submit" className=" rounded-lg text-xl w-full h-12 text-white bg-sky-800 overflow-hidden relative z-10 group hover:text-sky-900 duration-700">Submit<span className="bg-sky-900 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 size-32 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-800 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 size-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 size-24 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 size-20 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] size-16 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span></button>
           </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;

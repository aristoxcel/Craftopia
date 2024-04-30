
import { useLoaderData } from "react-router-dom"
// import Card from "../content/Card"
import Marquee from "react-fast-marquee";
import TableItem from "../content/TableItem";

function AllACItem() {
  const loadData = useLoaderData()

  return (
    <div className="bg-base-200">
    <div className="space-y-5 px-3  lg:w-10/12 mx-auto rounded-2xl py-24 mb-3">
    <h1 className="font-cursive text-5xl font-bold text-base-600">Art & Craft Items</h1>
    <h1 className="font-poppins text-2xl font-semibold text-base-400">Total  - {loadData.length} Products</h1>
    <hr />
    <div>
      
    <div className="overflow-x-auto">
    <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6 rounded-t-2xl">
        <thead>
            <tr className="bg-violet-400 text-white">
                <th className="py-4 px-6 text-lg text-left border-b">Product Image</th>
                <th className="py-4 px-6 text-lg text-left border-b">Product Name</th>
                <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
        </thead>
        <tbody>
        {
      loadData?.map(craft=><TableItem key={craft._id} craft={craft}/>)
      
    }
          
        </tbody>
    </table>
</div>

  
    </div>
    </div>
    <Marquee>
    <img src={"https://i.ibb.co/dQbmfmw/download.jpg"} alt="" className="w-28 mr-24 rounded-3xl"/>
    <img src={"https://i.ibb.co/xz6N8KR/download.png"} alt="" className="w-28 mr-24 rounded-3xl"/>
    <img src={"https://i.ibb.co/Rptmkrk/images-1.png"} alt=""className="w-28 mr-24 rounded-3xl" />
    <img src={"https://i.ibb.co/KK18V2Z/images.jpg"} alt="" className="w-24 mr-24 rounded-3xl"/>
    <img src={"https://i.ibb.co/jMj2Ssv/images.png"} alt=""className="w-28 rounded-3xl" />
  </Marquee>
</div>
  )
}

export default AllACItem
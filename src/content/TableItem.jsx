import { Link } from "react-router-dom"


function TableItem({craft}) {
    const {image, iname, subcategory_Name, stock, price, rating, _id}=craft
  return (
    <tr className="hover:bg-gray-50 border-b transition duration-300">
    <td className="py-4 px-4 flex justify-start">
        <img src={image} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
    </td>
    <td className="py-4 px-6 border-b text-xl font-medium">{iname}</td>
    <td className="py-4 px-6 border-b text-lg font-medium">${price}</td>
    <td className="py-4 px-6 border-b text-end">
       <Link to={`craft/${_id}`}> <button className="bg-violet-900 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button></Link>
    </td>
</tr>
  )
}

export default TableItem
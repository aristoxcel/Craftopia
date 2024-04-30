import { useContext } from "react"
import { AuthContext } from "../context/Context"
import { useLoaderData } from "react-router-dom"
import MyCard from "../content/MyCard"


function MyACList() {
  const {user} =useContext(AuthContext)
  const loadCrafts = useLoaderData()
  console.log(loadCrafts)
  const userMail = user?.email;
  console.log(userMail)
  const crafts = loadCrafts.filter(craft => craft.user_email === userMail)
  console.log(crafts)

  return (
    <div className="md:w-4/5 mx-auto my-6">
      <h1 className="text-2xl font-cursive font-medium text-violet-900">{user.displayName}- Your Added item Quantity - {crafts.length}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto  mt-14 px-3">
 {

    crafts?.map(craft=><MyCard key={craft._id} craft={craft} />)
   
 }
  </div>
    </div>
  )
}

export default MyACList
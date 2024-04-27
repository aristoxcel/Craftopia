import { FaPhoneVolume, FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";

function Footer() {
  return (
    
 
    <footer className="flex flex-col text-black">
    <div className="flex flex-col items-start justify-around gap-5 bg-sky-50 p-10 py-10 md:flex-row md:gap-0 md:items-center">
        <aside className="text-xl">
        <img src={'https://i.ibb.co/1njBSqL/brand.png'} alt="" className="h-12"/>
            <p className="font-cursive text-sm">An Craft Lovers corporation</p>
        </aside>
        <nav className="text-lg">
            <ul className="space-y-1">
                
                <li className="text-violet-900">
                Craftopia Craft Ltd.
                </li>
                <li className="flex"> 
                <MdConnectWithoutContact className="text-violet-600 mr-2"/>Contact with Us
                </li>
                <li className="flex ">
                <FaPhoneVolume className="text-violet-600"/><span className="text-sm ml-3">01911-309454</span>
                </li>
                <li>
                    Gandaria
                </li>
                <li>
                    Dhaka.
                </li>
            </ul>
        </nav>
        <nav className="text-lg">
            <ul className="grid grid-flow-col gap-4">
            <a ><FaTwitter className="text-3xl text-sky-400"/></a>
      <a ><IoLogoYoutube className="text-3xl text-red-500"/></a>
      <a ><FaSquareFacebook className="text-3xl text-sky-800"/></a>
            </ul>
        </nav>
    </div>
    <aside className="bg-sky-100 py-5 text-center text-sm">
        <p className="text-violet-800">&copy; 2024 Md. Rakibul Hasan. All Rights Reserved.</p>
    </aside>
</footer>


  )
}

export default Footer
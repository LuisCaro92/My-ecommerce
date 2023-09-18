import { BeakerIcon, Bars3Icon, XMarkIcon, MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Nav() {
  let Links = [{ name: "Home" }, { name: "Profile" }, { name: "Setting" }];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="sm:px-10 py-4 px-7 sm:flex justify-between items-center bg-white">
        {/*logo */}
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <BeakerIcon className="w-7 h-7 text-blue-600" />
          <span className="font-bold">Ecommerce</span>
        </div>
        <div className="flex pl-9 md:pl-0 font-semibold">
          {/*Mrnu icons*/}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-7 h-7 absolute right-8 top-6 cursor-pointer sm:hidden"
          >
            {isOpen ? <XMarkIcon/> : <Bars3Icon />}
          </div>

          <ul className={`sm:flex pl-9 sm:pl-0 sm:items-center sm:pb-0 pb-12 absolute sm:static sm:z-auto z-[-1] left-0 w-full transition-all bg-white duration-500 ease-in 
          ${isOpen ? "top-12" : "top-[-490px]"}`}>
            <li> <input className="w-80 h-10 border rounded-md mr-60" type="text" placeholder="Buscar"/></li>
            {Links.map((link) => (
              <li className="my-7 sm:my-0 sm:ml-8">{link.name}</li>
             
            ))}
             
            <button className="btn bg-indigo-500 text-white py-1 px-8  rounded-md sm:ml-8 sm:static">
              SingIn
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;

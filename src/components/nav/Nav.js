import { BeakerIcon } from "@heroicons/react/24/solid";

function Nav() {

    let Links = [
        { name : "Home"},
        {name : "Profile"},
        {name : "Setting"} 
    ]
    

  return (
    <div className="shadow-md w-full">
      <div className="md:px-10 py-4 px-7">
        {/*logo */}
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <BeakerIcon className="w-7 h-7 text-blue-600" />
          <span className="font-bold">Ecommerce</span>
        </div>
        <div className="flex">
          <ul className="flex pl-9 md:pl-0">
            {Links.map(link=>(
                <li className="">
                    {link.name}
                </li>
            ))

            }
          </ul>
          <button className="flex">Sing in</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;



function Nav () {

    return(
        <div className="bg-blue-200">
            <nav className="container w-full h-16 justify-between">
                <div className="bg-red flex justify-between ">
                <div className="flex m-5 ">
                    <h1 className="ml-5">Logo</h1>
                    <ul className="ml-5 flex justify-end float-right">
                        <li className="ml-5">Home</li>
                        <li className="ml-5">Profile</li>
                        <li className="ml-5">Setting</li>
                    </ul>
                </div>
                </div>
            </nav>

        </div>
    )
}

export default Nav;
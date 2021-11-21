import { HomeIcon, QuestionMarkCircleIcon, SearchIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import "./BottomNavbar.css"

export default function BottomNavbar(){
    return(
        <div className="bottomnavbar px-10 py-2 flex justify-between border-gray-500 bg-white sticky bottom-0">  
            <Link to="/search">
                <div className="home flex flex-col justify-center">
                    <SearchIcon className="w-5 h-5 text-green-500 mx-auto" />
                    <p className="text-sm">
                        Search
                    </p>
                </div>
            </Link>

            <Link to="/">
                <div className="home flex flex-col justify-center">
                    <HomeIcon className="w-5 h-5 text-green-500 mx-auto" />
                    <p className="text-sm">
                        Home
                    </p>
                </div>
            </Link>

            <Link to="/about">
                <div className="about flex flex-col justify-center">
                    <QuestionMarkCircleIcon className="w-5 h-5 text-green-500 mx-auto" />
                    <p className="text-sm">
                        About
                    </p>
                </div>
            </Link>
        </div>
    )
}
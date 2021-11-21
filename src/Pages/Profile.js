import Profileimg from '../assets/profile.jpg'
import './Profile.css'
export default function Profile() {
    return(
        <div className="profile h-screen  bg-white mx-auto p-5 pt-1">
            <div className="top-sec flex flex-col">
                <div className="profile-pic rounded-md w-full h-80 my-auto mx-auto mt-10" style={{backgroundImage : `url(${Profileimg})`}}>
                </div>
                <p className="text-center font-semibold text-3xl">
                    Yaroslav mulvanon
                </p>
                <p className="text-center font-normal text-lg opacity-75">
                    Member
                </p>
            </div>

            <div className="px-2 py-10 bg-green-200 text-center rounded-xl mt-4">
                <p className="font-semibold opacity-60">
                    you haven't searched yet
                </p>
            </div>
        </div>
    )
}
import logo from "../assets/logo.png"
export default function About(){
    return(
        <div className="about flex flex-col h-screen overflow-hidden bg-white mx-auto p-5">
            <div className="my-auto">
                <img src={logo} alt="logo foodinfo" className="mx-auto mb-5"/> 
                <p className="text-green-700 font-semibold text-2xl text-center">
                    About this app
                </p>
                <p className="text-black text-lg text-center">
                    foodinfo is an application to view content data in food, hopefully this can help you in choosing good nutrition for your body
                </p>
                <p className="text-green-500 text-center">
                    Dimas Rafi , 21120119120022
                </p>
            </div>
        </div>
    )
}
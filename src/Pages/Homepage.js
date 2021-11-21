import hero from "../assets/hero.png"
import './Homepage.css'
import Card from "../Components/Card"
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import Loading from "./Loading"
import Profileimg from '../assets/profile.jpg'

export default function Homepage({dataApi, todetail}) {

    let recomend = []
    if(dataApi !== undefined){
        recomend = dataApi.hints
    }

    const navigate  = useNavigate()

    function sendDetail(item,e){
        e.preventDefault();
        todetail(item)
        navigate(`/detail`);
    }

    function gotoprofile() {
        navigate(`/profile`)
    }

    return(
        <div className="homepage h-screen overflow-y-scroll bg-white mx-auto p-5 pt-1">
            <div className="header flex justify-between h-20">

                <div className="flex justify-items-center w-full">
                    <img src={logo} alt="logo foodinfo " className="h-3/5 my-auto"/>
                    <p className="font-semibold text-green-500 my-auto">
                        Foodinfo
                    </p>
                </div>

                <div className="rounded-full w-9 h-9 bg-green-400 my-auto" onClick={gotoprofile} style={{backgroundImage : `url(${Profileimg})` , backgroundSize: "cover"}}>
                </div>
            </div>
            <div className="top-sec">
                <p className="text-2xl font-bold">
                    Hello, Dimas
                </p>
                <p className="text-md opacity-50">
                    Saturday, 07 November 2021
                </p>
                <div className="hero mt-14 h-40 px-2 bg-green-500 rounded-2xl w-full flex relative justify-between ">
                    <div className="flex flex-col my-auto">
                        <p className="text-white w-3/5 font-semibold text-xl text-left">
                            We provide nutritional information for you 
                        </p>
                        <p className="text-white text-left text-sm opacity-80">
                            Try it now to track your nutrition
                        </p>

                    </div>
                    <img src={hero} alt="hero-img" className="w-2/5 absolute right-2 bottom-0" />         

                </div>
            </div>

            <div className="recomend-sec mb-5">
                <p className="text-xl font-semibold mt-5">
                    Recomend : Rice
                </p>
                <div className="card-container w-full h-full overflow-x-scroll overflow-y-hidden flex">
                    {dataApi === undefined && (
                        <div className="w-screen h-full overflow-y-hidden">
                            <Loading />
                        </div>
                    )}
                    {dataApi !== undefined && (
                        <>
                        {recomend.map((item, index) => (
                            <div key={index} className="w-full min-w-full" onClick={(e) => sendDetail(item,e)}>
                                <Card  title={item.food.label} calories={item.food.nutrients.ENERC_KCAL} url={item.food.image} />
                            </div>
                        ))}
                        </>

                    )}
                    
                </div>
            </div>
            
        </div>
    )
}
import "./Search.css"
import Card from "../Components/Card"
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Loading from "./Loading";

export default function Search({sendsearch, dataApi, todetail}) {

    const [search, setsearch] = useState()

    let data;
    if(dataApi !== undefined){
        data = dataApi.parsed[0]
    }

    let bestmatch = []
    if(dataApi !== undefined){
        bestmatch = dataApi.hints
    }

    function getvalue(e) {
        setsearch(e.target.value)

    }

    function sendvalue(e) {
        e.preventDefault();
        sendsearch(search)
    }

    const navigate  = useNavigate()

    function sendbest(item,e){
        e.preventDefault();
        todetail(item)
        navigate(`/detail`);
    }

    function sendDetail(item,e){
        e.preventDefault();
        todetail(item)
        navigate(`/detail`);
    }

    return(
        <div className="search h-screen overflow-y-auto bg-white mx-auto p-5">
            <p className="text-2xl font-bold">
                Search
            </p>
            <div className="search-wrap flex flex-row justify-center align-middle  mt-5">
                <input onChange={getvalue} id="search-input" type="text" placeholder="search food..." className="w-full  "></input>
                <div onClick={sendvalue} className="py-2 px-4 ml-2 rounded-xl bg-white text-gray-700 border-2 font-semibold cursor-pointer">
                    Search
                </div>
            </div>  
            <p className="text-xl font-semibold mt-5 mb-2">
                Best match
            </p>
            {dataApi === undefined && (
                <div>
                    <Loading />
                </div>
            )}
            {dataApi !== undefined && (
                <div className="card-container flex flex-col" onClick={(e) => sendbest(data,e)}>
                    <Card title={dataApi.parsed[0].food.label} calories={dataApi.parsed[0].food.nutrients.ENERC_KCAL} url={dataApi.parsed[0].food.image}/>
                </div>

            )}
            <p className="text-xl font-semibold mt-5 mb-2">
                Other Results
            </p>

            {dataApi === undefined && (
                <div className="w-full">
                    <Loading />
                </div>
            )}
            {dataApi !== undefined && (
                <div className="card-container flex flex-col">
                    {bestmatch.map((item, index) => (
                        <div key={index} onClick={(e) => sendDetail(item,e)}>
                            <Card key={index} title={item.food.label} calories={item.food.nutrients.ENERC_KCAL} url={item.food.image}/>
                        </div>
                    ))}
                </div>

            )}

            
        </div>
    )
  }
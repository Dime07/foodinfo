import "./Card.css"
import card from "../assets/card-img.jpg"
export default function Card({title, calories, url}) {
    return(
        <div className="card min-h-3/5 w-full rounded-2xl p-5 mb-5 min-w-full mx-1 flex flex-col justify-between">
            <div className="card-img overflow-hidden rounded-md">
                {url !== undefined && (
                    <img src={url} alt="icon egg" className="w-2/5 mx-auto my-auto" />
                )}
                {url === undefined && (
                    <img src={card} alt="icon egg" className="w-2/5 mx-auto my-auto" />
                )}
            </div>
            <div >
                <p className="text-gray-800 font-bold text-2xl mt-5">
                    {title}
                </p>
                <p className="mt-2 opacity-80">
                    Calories : {calories} kkal
                </p>
            
                <p className="text-right opacity-90">
                    Detail
                </p>
            </div>
        </div>
    )
}
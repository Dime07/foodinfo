import './Loading.css'
export default function Loading(){
    return(
        <div className="loading h-full w-full overflow-y-scroll bg-white mx-auto p-5 pt-1 flex justify-center">
            <div className="loading-wrap flex w-1/5 justify-between my-auto">
                <div className="circle-1 w-5 h-5 rounded-full bg-green-400">
                </div>
                <div className="circle-2 w-5 h-5 rounded-full bg-green-400">
                </div>
                <div className="circle-3 w-5 h-5 rounded-full bg-green-400">
                </div>
            </div>
        </div>
    )
}
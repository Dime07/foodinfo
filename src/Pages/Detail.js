import { BookmarkIcon} from '@heroicons/react/solid'

export default function Detail({dataApi}){

    return  (
        <>
            {dataApi === undefined && (
                <div className="h-screen overflow-y-scroll bg-white mx-auto relative">
                    <p className="text-green-500 font-bold mx-auto my-auto ">
                        Tidak Ada Data yang dipilih
                    </p>
                </div>
            )}
            {dataApi !== undefined && (
                <div className="detail h-screen overflow-y-scroll bg-white mx-auto relative">
                    {dataApi !== undefined && (
                        <div className="preview-image w-full h-3/5" style={{backgroundImage: `url(${dataApi.food.image})`, backgroundSize: "cover"}}>
        
                        </div>
                    )}
                    {dataApi === undefined && (
                        <div className="preview-image w-full" >
                            
                        </div>
                    )}
                    <div className="desc-section p-5 rounded-t-3xl justify-between">
                        <p className="text-black text-3xl font-semibold">
                            {dataApi.food.label}
                        </p>
                        <p className="text-green-800 font-semibold mt-1">
                            {dataApi.food.categoryLabel}
                        </p>

                        <div className="flex justify-between mt-2">
                            <div>
                                <ul>
                                    {dataApi.food.nutrients.ENERC_KCAL === undefined && (
                                        <li className="font-medium">
                                            Calories : -
                                        </li>
                                    )}
                                    {dataApi.food.nutrients.ENERC_KCAL !== undefined && (
                                        <li className="font-medium">
                                            Calories : {dataApi.food.nutrients.ENERC_KCAL}
                                        </li>
                                    )}

                                    {dataApi.food.nutrients.PROCNT === undefined && (
                                        <li className="font-medium">
                                            Protein : -
                                        </li>
                                    )}
                                    {dataApi.food.nutrients.PROCNT !== undefined && (
                                        <li className="font-medium">
                                        Protein : {dataApi.food.nutrients.PROCNT}
                                        </li>
                                    )}

                                    {dataApi.food.nutrients.FAT === undefined && (
                                        <li className="font-medium">
                                            Fat : -
                                        </li>
                                    )}
                                    {dataApi.food.nutrients.FAT !== undefined && (
                                        <li className="font-medium">
                                            Fat : {dataApi.food.nutrients.FAT}
                                        </li>
                                    )}
    
                                    
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    {dataApi.food.nutrients.CHOCDF === undefined && (
                                        <li className="font-medium">
                                            Carbohydrate : -
                                        </li>
                                    )}
                                    {dataApi.food.nutrients.CHOCDF !== undefined && (
                                        <li className="font-medium">
                                            Carbohydrate : {dataApi.food.nutrients.CHOCDF}
                                        </li>
                                    )}

                                    {dataApi.food.nutrients.FIBTG === undefined && (
                                        <li className="font-medium">
                                            Dietary Fiber : -
                                        </li>
                                    )}
                                    {dataApi.food.nutrients.FIBTG !== undefined && (
                                        <li className="font-medium">
                                            Dietary Fiber : {dataApi.food.nutrients.FIBTG}
                                        </li>
                                    )}
                                    
                                    
                                </ul>
                            </div>
                        </div>

                        <div className="mx-auto inline" >
                            <div className="py-2 px-4 bg-green-500 font-semibold text-center text-white rounded-xl" style={{marginTop: "20px"}}>
                                <div className="flex justify-center">
                                    <BookmarkIcon className="w-6 h-6 mr-2"/>
                                    <p>
                                        Save for Later
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
        
    )
}
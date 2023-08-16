type BoxProps = {
    icon: string,
    textRange: string,
    quantity: number,
    percent: number,
    name:string,
}

export default function BoxNew(props: BoxProps){
    return(
        <div className="h-30 p-4 w-full md:w-80 rounded-2xl text-textPrimary bg-gradientSmallBox font-poppins mt-4">
            <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex flex-col gap-2">
                    <div className="flex">
                        <h1>{props.name}</h1>
                    </div>
                    <h4 className="text-textSecondary font-thin text-base flex-wrap">
                      
                    </h4>
                    <div className="flex space-x-6 ">
                        <h1 className="font-ABeeZee text-3xl ">
                            {props.quantity}
                        </h1>
                        <div className="bg-[#3D475F] rounded-2xl h-8 w-14">
                            <h1 className="font-ABeeZee text-lg mt-[2px] ml-1 ">{props.percent}%</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:gap-x-2 ">
                    {props.percent < 0 ? <i className={`fa-solid fa-arrow-trend-down text-red-800 h-fit -scale-x-100 text-3xl font-light `} /> : <i className={`fa-solid fa-arrow-trend-down text-textGreen -scale-y-100 text-3xl font-light h-fit `} />}
                    
                    <div className="flex flex-col items-center md:items-end">
                        <h1 className="text-textSecondary font-thin">{props.textRange}</h1>
                    </div>
                </div>
            </div>
        </div> 
    )
}
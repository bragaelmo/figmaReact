type BoxProps = {
    icon: string,
    textDefine: string,
    textRange: string,
    quantity: number,
    percent: number
}

export default function Box(props: BoxProps){
    return(
        <div className="p-8 w-full md:w-80 rounded-2xl text-textPrimary bg-gradientSmallBox font-poppins mt-4">
            <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex flex-col gap-2 items-center">
                    <div className="rounded-full bg-bgGreen w-12 h-12 flex">
                        <i className={`fa-solid fa-${props.icon} icon-gradient center mx-auto my-auto`}/>
                    </div>
                    <h4 className="text-textSecondary font-thin text-base flex-wrap">
                        {props.textDefine}
                    </h4>
                    <h1 className="font-semibold text-3xl">
                        {props.quantity}
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row md:gap-x-2 ">
                    {props.percent < 0 ? <i className={`fa-solid fa-arrow-trend-down text-red-800 h-fit -scale-x-100 text-3xl font-light `} /> : <i className={`fa-solid fa-arrow-trend-down text-textGreen -scale-y-100 text-3xl font-light h-fit `} />}
                    
                    <div className="flex flex-col items-center md:items-end">
                        <h1 className="text-2xl font-semibold">{props.percent} %</h1>
                        <h1 className="text-textSecondary font-thin">{props.textRange}</h1>
                    </div>
                </div>
            </div>
        </div> 
    )
}
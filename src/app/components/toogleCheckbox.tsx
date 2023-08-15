type toogleCheckBoxProps = {
    title: string,
    function: any,
    checked: any
}
export default function ToogleCheckbox(props: toogleCheckBoxProps){
    return (
        <div className='flex flex-row items-center'>
            <h1 className='font-abeezee text-sm my-auto '>{props.title}</h1>
            <div className=" relative ml-2 mt-1 mr-2 inline-block w-8 select-none align-middle transition duration-200 ease-in my-auto">
                <input
                    type="checkbox"
                    name={`toogle`}
                    id={`toogle`}
                    onChange={props.function != undefined ? props.function : undefined}
                    defaultChecked={props.checked}
                    className={`toggle-checkbox absolute block h-4 w-4 cursor-pointer appearance-none rounded-full border-4 border-red-800 bg-red-800 transition-all duration-500 checked:right-0 checked:border-textGreen checked:bg-textGreen`}
                />
                <label
                    htmlFor={`toogle`}
                    className={`toggle-label block h-4 cursor-pointer overflow-hidden rounded-full border-2 border-solid border-grayLight2 transition-all duration-500 ${
                        props.checked
                            ? "bg-textGreen/60"
                            : "bg-red-800/60"
                    }`}
                ></label>
            </div>
        </div>
    )
}
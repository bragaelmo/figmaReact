type CircleIconProps = {
    icon: string
}
export default function CircleIcon(props: CircleIconProps){
    return (
        <div className="rounded-full bg-bgGreen w-12 h-12 flex ">
            <i className={`fa-solid fa-${props.icon} text-white center mx-auto my-auto`}/>
        </div>
    )
}
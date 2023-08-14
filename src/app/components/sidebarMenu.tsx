type SidebarMenuProps = {
    buttons: string[],
    title: string,
    urls: string[],
    protected?: boolean,
    icon: string,
}
export default function SidebarMenu(props: SidebarMenuProps) {
    return (
        <div className="w-full flex flex-row items-start gap-x-4 mt-8 mx-auto">
            <i className={`fas fa-${props.icon} text-textSecondary mt-1`}></i>
            <div className="text-textSecondary flex flex-col text-lg items-start">
                <h1 className="text-base">{props.title}</h1>
                {
                    props.buttons.map((button, index) => (
                        <div className="text-sm items-start" key={index}>
                            <a className="text-textGreen hover:text-textGreen/70" href={props.urls[index]}>{button}</a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

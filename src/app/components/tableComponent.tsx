import CircleIcon from "./circleIcon";

type TableComponentProps = {
    title: string,
    headers: (string | JSX.Element)[],
    values: (string | JSX.Element)[],
    pattern: number
}

export default function TableComponent(props: TableComponentProps){

    return (

            <>
            {
                props.pattern == 1 ? 
                <table>
                <thead className="text-start font-normal text-sm text-textSecondary border-b border-solid border-bgCards">
            {
                props.headers.map((header, index) => {
                    if (typeof header === 'string') {
                        return (
                            <th key={index} className={`${header.includes('-center') ? "" : "text-start"} font-normal pb-2`}>
                                {header.replace("-center","")}
                            </th>
                        );
                    }
                    return <th key={index}>{header}</th>;
                })
            }
                </thead>
                <tbody className="text-sm">
                    <tr className="border-b border-solid border-bgCards">
                        <td className="flex flex-row items-center gap-x-4 pb-4">
                            <div className="bg-textGreen w-8 h-8 items-center flex rounded-md mt-4"><h1 className="mx-auto my-auto">1</h1></div>
                            <div className="flex flex-col mt-4">
                                <h1 className="text-sm text-textPrimary">Tigrão Milionário</h1>
                                <h1 className="text-sm text-textSecondary">Aviator</h1>
                            </div>
                        </td>
                        <td><div className="bg-textGreen rounded-md text-center text-sm">Ativo</div></td>
                        <td><h1 className="text-center">12/08/23</h1></td>
                        <td><h1 className="ml-2">48</h1></td>
                        <td>
                            <div className="flex flex-col gap-y-2">
                                <a href="#" className="uppercase flex flex-row text-xs gap-3 items-center"><i className="fas fa-pen" /><h1>Editar sala</h1></a>
                                <a href="#" className="uppercase flex flex-row text-xs gap-3 items-center text-textSecondary"><i className="fas fa-plus" /><h1>Estratégias</h1></a>
                                <a href="#" className="uppercase flex flex-row text-xs gap-3 items-center text-red-600"><i className="fas fa-trash " /><h1>Deletar</h1></a>
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b border-solid border-bgCards">
                        <td className="flex flex-row items-center gap-x-4 pb-4">
                            <div className="bg-textGreen w-8 h-8 items-center flex rounded-md mt-4"><h1 className="mx-auto my-auto">2</h1></div>
                            <div className="flex flex-col mt-4">
                                <h1 className="text-sm text-textPrimary">Tigrão Milionário</h1>
                                <h1 className="text-sm text-textSecondary">Aviator</h1>
                            </div>
                        </td>
                        <td><div className="bg-transparent border border-solid border-white rounded-md text-center text-sm">Offline</div></td>
                        <td><h1 className="text-center">12/08/23</h1></td>
                        <td><h1 className="ml-2">48</h1></td>
                        <td>
                            <div className="flex flex-col gap-y-2">
                                <a href="#" className="uppercase flex flex-row text-xs gap-3 items-center"><i className="fas fa-pen" /><h1>Editar sala</h1></a>
                                <a href="#" className="uppercase flex flex-row text-xs gap-3 items-center text-textSecondary"><i className="fas fa-plus" /><h1>Estratégias</h1></a>
                                <a href="#" className="uppercase flex flex-row text-xs gap-3 items-center text-red-600"><i className="fas fa-trash " /><h1>Deletar</h1></a>
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
                : 
                <table>
                <thead className="text-start font-normal text-sm text-textSecondary border-b border-solid border-bgCards">
                {
                    props.headers.map((header, index) => {
                        if (typeof header === 'string') {
                            return (
                                <th key={index} className={`${header.includes('-center') ? "" : "text-start"} font-normal pb-2`}>
                                    {header.replace("-center","")}
                                </th>
                            );
                        }
                        return <th key={index}>{header}</th>;
                    })
                }
                </thead>
                <tbody className="text-sm">
                    
                    <tr className="border-b border-solid border-bgCards">
                        <td className="flex flex-row items-center gap-x-4 pb-4">
                            <div className="bg-textGreen w-8 h-8 items-center flex rounded-md mt-4"><h1 className="mx-auto my-auto">1</h1></div>
                            <div className="flex flex-col mt-4">
                                <h1 className="text-sm text-textPrimary">Tigrão Milionário</h1>
                                <h1 className="text-sm text-textSecondary">Aviator</h1>
                            </div>
                        </td>
                        <td><div className="bg-textGreen rounded-md text-center text-sm">Ativo</div></td>
                        <td><h1 className="text-center">12/08/23</h1></td>
                        <td><h1 className="ml-2">48</h1></td>
                        <td>
                            <div className="flex flex-col gap-y-2">
                                <a href="#" className="uppercase flex flex-row text-xs gap-3 items-center"><i className="fas fa-pen" /><h1>Editar sala</h1></a>
                                <a href="#" className="uppercase flex flex-row text-xs gap-3 items-center text-textSecondary"><i className="fas fa-plus" /><h1>Estratégias</h1></a>
                                <a href="#" className="uppercase flex flex-row text-xs gap-3 items-center text-red-600"><i className="fas fa-trash " /><h1>Deletar</h1></a>
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b border-solid border-bgCards">
                        <td className="flex flex-row items-center gap-x-4 pb-4">
                            <div className="bg-textGreen w-8 h-8 items-center flex rounded-md mt-4"><h1 className="mx-auto my-auto">2</h1></div>
                            <div className="flex flex-col mt-4">
                                <h1 className="text-sm text-textPrimary">Tigrão Milionário</h1>
                                <h1 className="text-sm text-textSecondary">Aviator</h1>
                            </div>
                        </td>
                        <td><div className="bg-transparent border border-solid border-white rounded-md text-center text-sm">Offline</div></td>
                        <td><h1 className="text-center">12/08/23</h1></td>
                        <td><h1 className="ml-2">48</h1></td>
                        <td>
                            <div className="flex flex-col gap-y-2">
                                <a href="#" className="uppercase flex flex-row text-xs gap-3 items-center"><i className="fas fa-pen" /><h1>Editar sala</h1></a>
                                <a href="#" className="uppercase flex flex-row text-xs gap-3 items-center text-textSecondary"><i className="fas fa-plus" /><h1>Estratégias</h1></a>
                                <a href="#" className="uppercase flex flex-row text-xs gap-3 items-center text-red-600"><i className="fas fa-trash " /><h1>Deletar</h1></a>
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            }
        </>
    )
}
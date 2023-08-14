import CircleIcon from "./circleIcon";

export default function TableComponent(){
    return (
        <div className='flex flex-col min-h-screen h-auto'>
            <div className="flex flex-row gap-4 items-center justify-between">
                <div className="flex flex-row gap-4 items-center">
                    <CircleIcon icon="rocket" />
                    <h1 className="text-lg text-textPrimary">Lista de sala de Sinais</h1>
                </div>
                <div>
                    <div className="input-group mt-4 w-full my-auto">
                        <input type="text" className="input-text-new w-full" placeholder="Buscar" />
                    </div>
                </div>
            </div>
            <div className="box-general font-abeezee" >
                <table>
                    <thead className="text-start font-normal text-sm text-textSecondary border-b border-solid border-[#56577A]">
                        <th className="text-start font-normal pb-2">Nome do Canal</th>
                        <th className="text-start font-normal pb-2">Status</th>
                        <th className="font-normal pb-2">Data de ativação</th>
                        <th className="text-start font-normal pb-2">Membros</th>
                        <th className="text-start font-normal pb-2">Opções</th>
                    </thead>
                    <tbody className="text-sm">
                        <tr className="border-b border-solid border-[#56577A]">
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
                        <tr className="border-b border-solid border-[#56577A]">
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
            </div>
        </div>
    )
}
import CircleIcon from "../../components/circleIcon";

export default function TableComponent(){
    return (
        <div className='flex flex-col min-h-screen h-auto'>
            <div className="flex flex-row gap-4 items-center justify-between">
                <div className="flex flex-row gap-4 items-center">
                    <CircleIcon icon="rocket" />
                    <h1 className="text-lg text-textPrimary">Gerenciar Notícias</h1>
                </div>
            </div>
            <div className="box-general font-abeezee" >
                <table>
                    <thead className="text-start font-normal text-sm text-textSecondary border-b border-solid border-bgCards">
                        <th className="text-start font-normal pb-2">Título</th>
                        <th className="text-start font-normal pb-2">Data de Ativação</th>
                        <th className="font-normal pb-2">Dias Ativo</th>
                        <th className="text-start font-normal pb-2">Opções</th>
                    </thead>
                    <tbody className="text-sm">
                        <tr className="border-b border-solid border-bgCards">
                            <td className="flex flex-row items-center gap-x-4 pb-4">
                                <div className="bg-textGreen w-8 h-8 items-center flex rounded-md mt-4"><h1 className="mx-auto my-auto">1</h1></div>
                                <div className="flex flex-col mt-4">
                                    <h1 className="text-sm text-textPrimary">São Paulo ser Campeão da Copa do Brasil</h1>
                                </div>
                            </td>
                            <td>14/06/2021</td>
                            <td><h1 className="text-center">45</h1></td>
                 
                            <td>
                                <div className="flex flex-col gap-y-2">
                                    <a href="#" className="bg-danger rounded-md flex flex-row text-xs gap-3 w-32 h-6 "><h1 className="text-center mt-1 ml-6">Deletar Notícia</h1></a>
                                    <a href="#" className="bg-bgCards rounded-md flex flex-row text-xs gap-3 w-32 h-6 "><h1 className="text-center mt-1 ml-6">Editar Notícia</h1></a>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-solid border-bgCards">
                            <td className="flex flex-row items-center gap-x-4 pb-4">
                                <div className="bg-textGreen w-8 h-8 items-center flex rounded-md mt-4"><h1 className="mx-auto my-auto">1</h1></div>
                                <div className="flex flex-col mt-4">
                                    <h1 className="text-sm text-textPrimary">Rodada Grátis de Mines</h1>
                                </div>
                            </td>
                            <td>14/06/2021</td>
                            <td><h1 className="text-center">50</h1></td>
             
                            <td>
                                <div className="flex flex-col gap-y-2">
                                    <a href="#" className="bg-danger rounded-md flex flex-row text-xs gap-3 w-32 h-6 "><h1 className="text-center mt-1 ml-6">Deletar Notícia</h1></a>
                                    <a href="#" className="bg-bgCards rounded-md flex flex-row text-xs gap-3 w-32 h-6 "><h1 className="text-center mt-1 ml-6">Editar Notícia</h1></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
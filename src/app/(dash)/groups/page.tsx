import CircleIcon from "@/app/components/circleIcon";
import TableComponent from "@/app/components/tableComponent";

export default function Groups(){
    return (
        <div className='flex flex-col min-h-screen h-auto'>
            <div className="flex flex-row gap-4 items-center justify-between">
                <div className="flex flex-row gap-4 items-center">
                    <CircleIcon icon="rocket" />
                    <h1 className="text-lg text-textPrimary">Lista de Sala de Sinais</h1>
                </div>
                <div>
                    <div className="input-group mt-4 w-full my-auto">
                        <input type="text" className="input-text-new w-full" placeholder="Buscar" />
                    </div>
                </div>
            </div>
            
            <div className="box-general font-abeezee" >
                <TableComponent pattern={1} title="Lista de Sala de Sinais" headers={[
                "Nome da Estratégia / Jogo", "Status", "Nome da Sala-center", "Gales", "Opções"
            ]} values={[]} /> 
            </div>
        </div>
    )
}
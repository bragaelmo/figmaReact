import Button from "@/app/components/button";
import CircleIcon from "@/app/components/circleIcon";
import TableComponent from "@/app/components/tableComponent";

export default function Strategies(){
    return (
        <div className='flex flex-col min-h-screen h-auto'>
            <div className="flex flex-row gap-4 items-center justify-between">
                <div className="flex flex-row gap-4 items-center">
                    <CircleIcon icon="rocket" />
                    <h1 className="text-lg text-textPrimary">Suas estratégias</h1>
                </div>
                <div>
                    <div className="input-group mt-4 w-full my-auto">
                        <input type="text" className="input-text-new w-full" placeholder="Buscar" />
                    </div>
                </div>
            </div>
            <div className="py-4 w-full flex flex-row flex-wrap gap-4">
                <Button pattern={1}  className="h-8 rounded-md text-sm px-3 flex flex-row gap-x-4 items-center">
                    <i className="fas fa-plus text-textPrimary" /><h1 className="text-sm">Rei da Roleta</h1>
                </Button>
                <Button pattern={1}  className="h-8 rounded-md text-sm px-3 flex flex-row gap-x-4 items-center">
                    <i className="fas fa-plus text-textPrimary" /><h1 className="text-sm">Rei da Roleta</h1>
                </Button>
                <Button pattern={1}  className="h-8 rounded-md text-sm px-3 flex flex-row gap-x-4 items-center">
                    <i className="fas fa-plus text-textPrimary" /><h1 className="text-sm">Rei da Roleta</h1>
                </Button>
                <Button pattern={1}  className="h-8 rounded-md text-sm px-3 flex flex-row gap-x-4 items-center">
                    <i className="fas fa-plus text-textPrimary" /><h1 className="text-sm">Rei da Roleta</h1>
                </Button>
                <Button pattern={1}  className="h-8 rounded-md text-sm px-3 flex flex-row gap-x-4 items-center">
                    <i className="fas fa-plus text-textPrimary" /><h1 className="text-sm">Rei da Roleta</h1>
                </Button>
                <Button pattern={1}  className="h-8 rounded-md text-sm px-3 flex flex-row gap-x-4 items-center">
                    <i className="fas fa-plus text-textPrimary" /><h1 className="text-sm">Rei da Roleta</h1>
                </Button>
                <Button pattern={1}  className="h-8 rounded-md text-sm px-3 flex flex-row gap-x-4 items-center">
                    <i className="fas fa-plus text-textPrimary" /><h1 className="text-sm">Rei da Roleta</h1>
                </Button>
                <Button pattern={1}  className="h-8 rounded-md text-sm px-3 flex flex-row gap-x-4 items-center">
                    <i className="fas fa-plus text-textPrimary" /><h1 className="text-sm">Rei da Roleta</h1>
                </Button>
                <Button pattern={1}  className="h-8 rounded-md text-sm px-3 flex flex-row gap-x-4 items-center">
                    <i className="fas fa-plus text-textPrimary" /><h1 className="text-sm">Rei da Roleta</h1>
                </Button>
                <Button pattern={1}  className="h-8 rounded-md text-sm px-3 flex flex-row gap-x-4 items-center">
                    <i className="fas fa-plus text-textPrimary" /><h1 className="text-sm">Rei da Roleta</h1>
                </Button>
                <Button pattern={1}  className="h-8 rounded-md text-sm px-3 flex flex-row gap-x-4 items-center">
                    <i className="fas fa-plus text-textPrimary" /><h1 className="text-sm">Rei da Roleta</h1>
                </Button>
                <Button pattern={1}  className="h-8 rounded-md text-sm px-3 flex flex-row gap-x-4 items-center">
                    <i className="fas fa-plus text-textPrimary" /><h1 className="text-sm">Rei da Roleta</h1>
                </Button>
            </div>
            <div className="box-general font-abeezee" >
                <TableComponent pattern={1} title="Suas estratégias" headers={[
                "Nome da Estratégia / Jogo", "Status", "Nome da Sala-center", "Gales", "Opções"
            ]} values={[]} /> 
            </div>
        </div>
        
    )
}
import Logo from "../../../public/assets/img/logo.svg"
import Image from "next/image"
import SidebarMenu from "./sidebarMenu"
import Button from "./button"

export default function Sidebar(){
    return (
        <div className="flex flex-col border-b-2 border-bgGreen ml-12 justify-between w-64 py-10 px-5 fixed mt-8">
            <div>
                <Image src={Logo} width={200} alt="Logo" />
                <div className="flex flex-col ">
                    <SidebarMenu title="Salas" icon="people-group" buttons={['Criar salas', 'Editar salas']} urls={['/group/new-group', '/groups']}/>
                    <SidebarMenu title="Resultados" icon="chart-pie" buttons={['Resultados por salas', 'Resultados por estratégia']} urls={['/results/room', '/results/strategy']}/>
                    <SidebarMenu title="Noticias" icon="newspaper" protected buttons={['Adicionar notícias', 'Gerenciar notícias']} urls={['/notices/new-notice', '/notices']}/>
                    <SidebarMenu title="Administrador" protected icon="user-gear" buttons={['Criar usuário', 'Editar usuário', 'Edição de Call to Action', 'Relatórios de salas ativas']} urls={['/users/create', '/results/strategy', '#', '#']}/>
                    <SidebarMenu title="Catalogador" icon="envelope" buttons={[]} urls={[]}/>
                    <br />
                    <Button pattern={2} className="h-5 w-40 flex justify-center items-center p-0" ><div className="flex flex-row my-auto items-center justify-center"><span className="text-xs font-thin">Sair do sistema</span><i className="fa-solid fa-right-from-bracket ml-4 text-xs font-thin" /></div></Button>
                </div>
            </div>
        </div>
    )
}
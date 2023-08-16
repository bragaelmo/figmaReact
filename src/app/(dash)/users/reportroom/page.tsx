'use client';
import Box from '../../../components/box'
import CircleIcon from "../../../components/circleIcon";
import DataTable from "react-data-table-component";

export default function ResultsStrategy(){
    const data = [
        {
            id: 1,
            name: "Tigrão Milionário",
            role: "Aviator",
            date: "12/08/23",
            number: 48,
            members: 30,
            days: 15,
        },
        {
            id: 2,
            name: "Tigrão Milionário",
            role: "Aviator",
            date: "12/08/23",
            number: 48,
            members: 30,
            days: 15,
        }
    ];

    const columnsFilled = [
        {
            name: 'Nome',
            selector: 'name',
            cell: (row: any) => (
                <h1 className="text-sm text-textPrimary">{row.name}</h1>
            )
        },
        {
            name: 'Data',
            selector: 'date',
            center: true
        },
        {
            name: 'Membros',
            selector: 'members',
            align: 'left'
        },
        {
            name: 'Dias Ativos',
            selector: 'days',
            align: 'left'
        },
        {
            name: 'Ações',
            cell: (row: any) => (
                <div className="flex flex-col gap-y-2">
                    <a href="#" className="uppercase flex flex-row text-xs gap-3 items-center text-red-600">
                        <i className="fas fa-trash " />
                        <h1>Deletar</h1>
                    </a>
                </div>
            )
        }
    ];

    const dataTableStyles = {
        table: {
          style: {
            backgroundColor: '#brbrbr', 
          },
        },
        header: {
          style: {
            backgroundColor: 'transparent', 
          },
        },
        cells: {
          style: {
            backgroundColor: 'transparent',
          },
        },
      };
    
    return (
        <div className='flex flex-col min-h-screen h-auto'>
            <div className="flex flex-row gap-4 items-center">
                <CircleIcon icon="rocket" />
                <h1 className="text-lg text-textPrimary">Relatório Administrativo de Salas Ativas</h1>
            </div> 
            <label className="input-label-new">Relatório destinado ao administrador geral do servidor, com o objetivo de remover salas que não tem volume de membros.</label>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-2 col-span-2">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="">
                        <Box icon='users' name="Membros Ativos" percent={20} quantity={10000} textDefine='membros' textRange='' />
                    </div>
                    <div className="">
                        <Box icon='users' name="Salas Ativas" percent={12.5} quantity={6500} textDefine='total de membros' textRange='' />
                    </div>
                    <div className="">
                        <Box icon='users' name="Salas com Menos de 70 users" percent={12.5} quantity={450} textDefine='total de membros' textRange='' />
                    </div>
                </div>
            </div>
            </div>
            
            <div className="flex flex-col md:flex-row w-full left-between gap-16 ">
                <div className="flex items-center">
                    <label className="input-label-new">Filtros:</label>
                </div>
                <div className="flex items-center">
                        <label className="input-label-new mr-2">Dias Ativo</label>
                        <input type="text" className="input-text-new" placeholder="Dias Ativo" />
                </div>
                <div className="flex items-center mt-4">
                        <label className="input-label-new mr-2">Membros Ativos</label>
                        <input type="text" className="input-text-new" placeholder="Membros Ativos" />
                </div>
            </div>
            <div className=" float-right flex justify-end pr-2">
              <a href="#" className="bg-bgGreen text-white rounded-2xl flex flex-row text-xs gap-3 w-32 h-6 "><h1 className="text-center mt-1 ml-6">EXPORTAR XLS</h1></a>
            </div>
            <div className="box-general font-abeezee" >
                <DataTable
                data={data}
                columns={columnsFilled}
                noHeader={true}
                customStyles={dataTableStyles}
                />
            </div>
        </div>
      );
      
}
"use client";
import Button from "@/app/components/button";
import CircleIcon from "@/app/components/circleIcon";
import TableComponent from "@/app/components/tableComponent";
import { useState } from "react";
import DataTable from "react-data-table-component";

export default function ResultRoom(){
    const [loaded, setLoaded] = useState(false);

    const data = [
        {
            id: 1,
            name: "Tigrão Milionário",
            role: "Aviator",
            status: "Ativo",
            date: "12/08/23",
            number: 48
        },
        {
            id: 2,
            name: "Tigrão Milionário",
            role: "Aviator",
            status: "Offline",
            date: "12/08/23",
            number: 48
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
            name: 'Status',
            selector: 'status',
            cell: (row: any) => (
                <div className={`bg-${row.status === "Ativo" ? "textGreen" : "transparent"} border border-solid border-white rounded-md text-center text-sm text-textPrimary`}>
                    {row.status}
                </div>
            )
        },
        {
            name: 'Data',
            selector: 'date',
            center: true
        },
        {
            name: 'Número',
            selector: 'number',
            align: 'left'
        },
        {
            name: 'Ações',
            cell: (row: any) => (
                <div className="flex flex-col gap-y-2">
                    <a href="#" className="uppercase flex flex-row text-xs gap-3 items-center">
                        <i className="fas fa-pen" />
                        <h1>Editar sala</h1>
                    </a>
                    <a href="#" className="uppercase flex flex-row text-xs gap-3 items-center text-textSecondary">
                        <i className="fas fa-plus" />
                        <h1>Estratégias</h1>
                    </a>
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
            <div className="box-general font-abeezee" >
            <DataTable
                data={data}
                columns={columnsFilled}
                noHeader={true}
                customStyles={dataTableStyles}
            />
            </div>
        </div>
    )
}
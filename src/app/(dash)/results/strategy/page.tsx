'use client';
import CircleIcon from "../../../components/circleIcon";
import { useState } from 'react';
import DataTable from "react-data-table-component";
export default function ResultComponent(){

    let [num, setNum] = useState(1)
    const data = [
        {
            id: 1,
            name: "Estratégia 1",
            sala: "Lightning Roulette",
            gales: 3,
            gd: 5,
            rd: 10,
            gdp: 80,
            gt: 5,
            rt: 10,
            gtp: 80
        },
        {
            id: 2,
            name: "Estratégia 2",
            sala: "Lightning Roulette",
            gales: 3,
            gd: 5,
            rd: 10,
            gdp: 80,
            gt: 5,
            rt: 10,
            gtp: 80
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
            name: 'Sala',
            selector: 'sala',
            cell: (row: any) => (
                <h1 className="text-sm text-textPrimary">{row.sala}</h1>
            )
        },
        {
            name: 'Gales',
            selector: 'gales',
            center: true
        },
        {
            name: 'GD',
            selector: 'gd',
            align: 'left'
        },
        {
            name: 'RD',
            selector: 'rd',
            align: 'left'
        },
        {
            name: 'GD%',
            selector: 'gdp',
            align: 'left'
        },
        {
            name: 'GT',
            selector: 'gTR',
            align: 'left'
        },
        {
            name: 'RT',
            selector: 'rt',
            align: 'left'
        },
        {
            name: 'GT%',
            selector: 'gt',
            align: 'left'
        },
        {
            name: 'Opções',
            cell: (row: any) => (
                <div className="flex flex-col gap-y-2">
                    <a href="#" className="bg-bgGreen rounded-md flex flex-row text-xs gap-3 w-32 h-6 "><h1 className="text-center mt-1 ml-6">Ver Detalhes</h1></a>
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
    const pages = [

        {page: num},
        {page: num + 1},
        {page: num + 2},
        {page: num + 3},
    ]
    return (
        <div className='flex flex-col min-h-screen h-auto'>
            <div className="flex flex-row gap-4 items-center justify-between">
                <div className="flex flex-row gap-4 items-center">
                    <CircleIcon icon="rocket" />
                    <h1 className="text-lg text-textPrimary">Resultados de estratégias</h1>
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
                <div className="ml-[1300px] mt-2  font-[ABeeZee]">
                   {
                    pages.map((pg,i)=>(
                        <button className="h-4 w-6 hover:text-[#11BCA9]" key={i}>{pg.page}</button>
                    ))
                   }
                </div>
        </div>
    )
}